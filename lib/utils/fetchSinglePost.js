import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_URL);

const fetchPostBySlug = async (slug) => {
  const query = gql`
    query GetPostBySlug($slug: String!) {
      post(where: { slug: $slug }) {
        date
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

  const data = await client.request(query, variables);

  if (!data.post) {
    throw new Error(`No post found with slug "${slug}"`);
  }

  return data.post;
};
export default fetchPostBySlug;
