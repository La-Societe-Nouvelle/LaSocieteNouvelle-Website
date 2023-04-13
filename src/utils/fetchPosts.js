import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_HYGRAPH_URL, // URL de l'API GraphQL
  cache: new InMemoryCache(), // Utilise une cache en mémoire
});

async function fetchPosts() {
  const query = gql`
    query GetPosts {
      posts(orderBy: date_DESC, stage: PUBLISHED) {
        id
        title
        slug
        excerpt
        date
        tag {
          name
          slug
        }
        coverImage {
          url
        }
      }
    }
  `;

  try {
    const { data } = await client.query({ query });
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      "Une erreur s'est produite lors de la récupération des articles."
    );
  }
}

async function fetchLatestPosts() {
  const query = gql`
    query getLatestPosts { 
      posts(orderBy: date_DESC, stage: PUBLISHED,, first: 4) {
        id
        title
        slug
        excerpt
        date
        tag {
          name
          slug
        }
        coverImage {
          url
        }
      }
    }
  `;

  try {
    const { data } = await client.query({ query });
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      "Une erreur s'est produite lors de la récupération des articles."
    );
  }
}

async function fetchPublications() {
  const query = gql`
    query GetPublications {
      posts(
        orderBy: date_DESC
        stage: PUBLISHED
        where: { tag: { slug_not_in: "actualites" } }
      ) {
        publishedAt
        id
        title
        slug
        excerpt
        date
        tag {
          name
          slug
        }
        coverImage {
          url
        }
      }
    }
  `;

  try {
    const { data } = await client.query({ query });
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      "Une erreur s'est produite lors de la récupération des articles."
    );
  }
}

async function fetchPostsByTag(slug) {
  const query = gql`
    query GetPostsByTag($slug: String!) {
      posts(
        orderBy: date_DESC
        stage: PUBLISHED
        where: { tag: { slug: $slug } }
      ) {
        date
        id
        excerpt
        slug
        title
        date
        tag {
          name
          slug
        }
        coverImage {
          url
        }
      }
    }
  `;

  const variables = {
    slug,
  };

  try {
    const { data } = await client.query({ query, variables });
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      "Une erreur s'est produite lors de la récupération des articles."
    );
  }
}

async function fetchTags() {
  const query = gql`
    {
      tags {
        slug
      }
    }
  `;

  const { data } = await client.query({ query });

  const tags = new Set();

  data.tags.forEach((tag) => {
    tags.add(tag.slug);
  });

  return { tags: Array.from(tags) };
}

async function getTag(tag) {
  const query = gql`
    query getTag($tag: String!) {
      tag(where: { slug: $tag }) {
        id
        name
        slug
      }
    }
  `;

  const variables = {
    tag,
  };
  try {
    const { data } = await client.query({ query, variables });
    return data.tag.name;
  } catch (error) {
    console.error(error);
    throw new Error(
      "Une erreur s'est produite lors de la récupération du tag."
    );
  }
}

export {
  getTag,
  fetchTags,
  fetchPublications,
  fetchPosts,
  fetchPostsByTag,
  fetchLatestPosts,
};
