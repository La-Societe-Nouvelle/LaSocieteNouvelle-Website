import { Container } from "react-bootstrap";

import { fetchPosts } from "@/lib/utils/fetchPosts";

import PageHeader from "@/components/PageHeader";
import PostsGrid from "@/components/posts/PostsGrid";

export const revalidate = 86400;

export const metadata = {
  title: "Blog | La Société Nouvelle",
  description: "Découvrez nos actualités",
};

export default async function Posts() {
  let posts = [];

  try {
    const data = await fetchPosts();
    posts = data.posts;
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="blog-page">

      <PageHeader
        title="Blog"
        subtitle="Découvrez nos actualités"
        icon="bi bi-journal-text"
      />

      <section className="section">
        <Container>
          <PostsGrid posts={posts} path="/blog/" featured />
        </Container>
      </section>
    </div>
  );
}
