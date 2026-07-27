import hygraphFetch from "./hygraph";

const fetchPostBySlug = async (slug) => {
  const query = `
    query GetPostBySlug($slug: String!) {
      post(where: { slug: $slug }) {
        date
        title
        slug
        tag {
          name
          slug
        }
        coverImage {
          url
        }
        content {
          html
        }
      }
    }
  `;

  const variables = {
    slug,
  };

  const data = await hygraphFetch(query, variables, {
    revalidate: 86400,
    tags: ["posts"],
  });

  if (!data.post) {
    throw new Error(`No post found with slug "${slug}"`);
  }

  return data.post;
};
export default fetchPostBySlug;
