import { Container, Row } from "react-bootstrap";
import { notFound } from "next/navigation";

import { fetchPostsByTag, getTag } from "@/lib/utils/fetchPosts";
import PageHeader from "@/components/PageHeader";
import PostPreview from "@/components/posts/PostPreview";

export async function generateMetadata({ params }) {
  const { tag } = await params;

  try {
    const tagName = await getTag(tag);
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
          <Row className="g-4">
            {posts.map((post) => (
              <PostPreview post={post} key={post.id} path={'/blog/'} />
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}