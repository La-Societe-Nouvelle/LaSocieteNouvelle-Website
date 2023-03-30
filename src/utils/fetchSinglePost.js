import { GraphQLClient, gql } from "graphql-request";
import { HYGRAPH_PERMANENTAUTH_TOKEN, HYGRAPH_URL } from "../lib/constants";

const client = new GraphQLClient(HYGRAPH_URL, {
  headers: {
    Authorization: `Bearer ${HYGRAPH_PERMANENTAUTH_TOKEN}`,
  },
});

const fetchSinglePost = async (slug) => {
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

  const response = await client.request(query, variables);

  if (!response.post) {
    throw new Error(`No post found with slug "${slug}"`);
  }

  return response.post;
};
export default fetchSinglePost;
