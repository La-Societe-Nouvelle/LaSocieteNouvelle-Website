import hygraphFetch from "./hygraph";

const REVALIDATE = 86400; // 24h
const TAGS = ["posts"];

async function fetchPosts() {
  const query = `
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
    return await hygraphFetch(query, {}, { revalidate: REVALIDATE, tags: TAGS });
  } catch (error) {
    console.error("Erreur lors de fetchPosts:", error.message);
    throw new Error(
      "Une erreur s'est produite lors de la récupération des articles."
    );
  }
}

async function fetchLatestPosts() {
  const query = `
    query getLatestPosts {
      posts(orderBy: date_DESC, stage: PUBLISHED, first: 4) {
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
    return await hygraphFetch(query, {}, { revalidate: REVALIDATE, tags: TAGS });
  } catch (error) {
    console.error("Erreur lors de fetchLatestPosts:", error.message);
    throw new Error(
      "Une erreur s'est produite lors de la récupération des articles."
    );
  }
}

async function fetchPublications() {
  const query = `
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
    return await hygraphFetch(query, {}, { revalidate: REVALIDATE, tags: TAGS });
  } catch (error) {
    console.error("Erreur lors de fetchPublications:", error.message);
    throw new Error(
      "Une erreur s'est produite lors de la récupération des articles."
    );
  }
}

async function fetchPostsByTag(slug) {
  const query = `
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
    return await hygraphFetch(query, variables, { revalidate: REVALIDATE, tags: TAGS });
  } catch (error) {
    console.error("Erreur lors de fetchPostsByTag:", error.message);
    throw new Error(
      "Une erreur s'est produite lors de la récupération des articles."
    );
  }
}

async function fetchTags() {
  const query = `
    {
      tags {
        slug
      }
    }
  `;

  const data = await hygraphFetch(query, {}, { revalidate: REVALIDATE, tags: TAGS });

  const tags = new Set();

  data.tags.forEach((tag) => {
    tags.add(tag.slug);
  });

  return { tags: Array.from(tags) };
}

async function getTag(tag) {
  const query = `
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
    const data = await hygraphFetch(query, variables, { revalidate: REVALIDATE, tags: TAGS });

    // Vérifier si le tag existe avant d'accéder à ses propriétés
    if (!data.tag) {
      console.error(`Tag non trouvé: ${tag}`);
      return null;
    }

    return data.tag.name;
  } catch (error) {
    console.error("Erreur lors de getTag:", error.message);
    throw new Error(
      "Une erreur s'est produite lors de la récupération du tag."
    );
  }
}

async function fetchRelatedPosts(post) {
  const excludeSlug = post.slug;
  let related = [];

  if (post.tag?.slug) {
    try {
      const data = await fetchPostsByTag(post.tag.slug);
      related = (data.posts || []).filter((p) => p.slug !== excludeSlug);
    } catch (error) {
      console.error("Erreur lors de fetchRelatedPosts (tag):", error.message);
    }
  }

  if (related.length < 3) {
    try {
      const data = await fetchLatestPosts();
      const usedSlugs = new Set([excludeSlug, ...related.map((p) => p.slug)]);
      const fallback = (data.posts || []).filter((p) => !usedSlugs.has(p.slug));
      related = [...related, ...fallback];
    } catch (error) {
      console.error("Erreur lors de fetchRelatedPosts (fallback):", error.message);
    }
  }

  return related.slice(0, 3);
}

export {
  getTag,
  fetchTags,
  fetchPublications,
  fetchPosts,
  fetchPostsByTag,
  fetchLatestPosts,
  fetchRelatedPosts,
};
