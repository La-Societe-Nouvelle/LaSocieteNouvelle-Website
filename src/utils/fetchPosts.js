import { GraphQLClient, gql } from "graphql-request";
import { HYGRAPH_PERMANENTAUTH_TOKEN, HYGRAPH_URL } from "../lib/constants";

const client = new GraphQLClient(HYGRAPH_URL, {
  headers: {
    Authorization: `Bearer ${HYGRAPH_PERMANENTAUTH_TOKEN}`,
  },
});
const query = gql`
  query GetPosts {
    posts {
      id
      title
      slug
      tags
      excerpt
      coverImage {
        url
      }
      publishedAt
    }
  }
`;

const fetchPosts = async () => {
  try {
    const data = await client.request(query);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      "Une erreur s'est produite lors de la récupération des articles."
    );
  }
};

export default fetchPosts;
