import { GraphQLClient, gql } from "graphql-request";
import { HYGRAPH_PERMANENTAUTH_TOKEN, HYGRAPH_URL } from "../lib/constants";

const client = new GraphQLClient(HYGRAPH_URL, {
  headers: {
    Authorization: `Bearer ${HYGRAPH_PERMANENTAUTH_TOKEN}`,
  },
});

async function fetchPosts() {
  const query = gql`
    query GetPosts {
      posts {
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
    const data = await client.request(query);
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
      posts(where: { tag: { slug_not_in: "actualites" } }) {
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
    const data = await client.request(query);
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
      posts(where: { tag: { slug: $slug } }) {
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
    const data = await client.request(query, variables);

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

  const data = await client.request(query);
  console.log(data);

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
    const data = await client.request(query, variables);

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      "Une erreur s'est produite lors de la récupération du tag."
    );
  }
}

export { getTag, fetchTags, fetchPublications, fetchPosts, fetchPostsByTag };
