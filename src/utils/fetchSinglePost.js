import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_HYGRAPH_URL, // URL de l'API GraphQL
  cache: new InMemoryCache(), // Utilise une cache en mémoire
});

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

  const response = await client.query({query, variables});

  if (!response.data.post) {
    throw new Error(`No post found with slug "${slug}"`);
  }

  return response.data.post;
};
export default fetchPostBySlug;
