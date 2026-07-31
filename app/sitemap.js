import { fetchPosts, fetchTags } from "@/lib/utils/fetchPosts";

const BASE_URL = "https://lasocietenouvelle.org";

const STATIC_ROUTES = [
  { path: "/", priority: 1.0 },
  { path: "/portail", priority: 0.9 },
  { path: "/devenir-partenaire", priority: 0.9 },
  { path: "/publier-empreinte", priority: 0.8 },
  { path: "/a-propos", priority: 0.8 },
  { path: "/ressources/application-mesure-impact", priority: 0.8 },
  { path: "/mesurer-empreinte-societale", priority: 0.8 },
  { path: "/indicateurs", priority: 0.8 },
  { path: "/ressources/api-publique-lsn", priority: 0.8 },
  { path: "/ressources/consulter-impacts-entreprises", priority: 0.8 },
  { path: "/devenir-partenaire/expert-comptable", priority: 0.74 },
  { path: "/devenir-partenaire/se-former", priority: 0.64 },
  { path: "/faq", priority: 0.64 },
  { path: "/ressources", priority: 0.64 },
  { path: "/indicateurs/eco", priority: 0.64 },
  { path: "/indicateurs/ghg", priority: 0.64 },
  { path: "/indicateurs/art", priority: 0.64 },
  { path: "/indicateurs/soc", priority: 0.64 },
  { path: "/indicateurs/knw", priority: 0.64 },
  { path: "/indicateurs/idr", priority: 0.64 },
  { path: "/indicateurs/geq", priority: 0.64 },
  { path: "/indicateurs/mat", priority: 0.64 },
  { path: "/indicateurs/was", priority: 0.64 },
  { path: "/indicateurs/nrg", priority: 0.64 },
  { path: "/indicateurs/wat", priority: 0.64 },
  { path: "/indicateurs/haz", priority: 0.64 },
  { path: "/infographies", priority: 0.6 },
  { path: "/blog", priority: 0.6 },
  { path: "/newsletter", priority: 0.5 },
  { path: "/contact", priority: 0.5 },
  { path: "/mentions-legales", priority: 0.4 },
  { path: "/politique-confidentialite", priority: 0.4 },
  { path: "/portail/company/889182770", priority: 0.4 },
];

export default async function sitemap() {
  const staticEntries = STATIC_ROUTES.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    priority,
  }));

  let postEntries = [];
  let categoryEntries = [];

  try {
    const { posts } = await fetchPosts();
    postEntries = posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.date,
      priority: 0.5,
    }));
  } catch (error) {
    console.error("Erreur lors de la génération du sitemap (posts):", error.message);
  }

  try {
    const { tags } = await fetchTags();
    categoryEntries = tags.map((tag) => ({
      url: `${BASE_URL}/categorie/${tag}`,
      priority: 0.5,
    }));
  } catch (error) {
    console.error("Erreur lors de la génération du sitemap (catégories):", error.message);
  }

  return [...staticEntries, ...postEntries, ...categoryEntries];
}
