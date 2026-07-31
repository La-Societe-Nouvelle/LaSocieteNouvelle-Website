import { Container } from "react-bootstrap";
import { notFound } from "next/navigation";

import { fetchPostsByTag, getTag } from "@/lib/utils/fetchPosts";
import PageHeader from "@/components/PageHeader";
import PostsGrid from "@/components/posts/PostsGrid";

export const revalidate = 86400;

export async function generateMetadata({ params }) {
  const { tag } = await params;

  try {
    const tagName = await getTag(tag);

    // Si le tag n'existe pas, retourner un titre par défaut
    if (!tagName) {
      return {
        title: "Catégorie non trouvée | La Société Nouvelle",
      };
    }

    return {
      title: `${tagName} | La Société Nouvelle`,
      description: `Articles de la catégorie ${tagName}`,
    };
  } catch (error) {
    return {
      title: "Catégorie non trouvée | La Société Nouvelle",
    };
  }
}

export default async function TagPage({ params }) {
  let tagName, posts;
  const { tag } = await params;

  try {
    const data = await fetchPostsByTag(tag);
    tagName = await getTag(tag);
    posts = data.posts;

    // Si le tag n'existe pas, afficher la page 404
    if (!tagName) {
      notFound();
    }
  } catch (error) {
    notFound();
  }

  return (
    <div className="blog-page">
      <PageHeader
        title={tagName}
        icon="bi bi-file-earmark-text"
      />

      <section className="section">
        <Container>
          {/* key={tag} : force le remontage du composant client entre deux catégories
              pour réinitialiser le nombre d'articles affichés */}
          <PostsGrid key={tag} posts={posts} path="/blog/" featured />
        </Container>
      </section>
    </div>
  );
}