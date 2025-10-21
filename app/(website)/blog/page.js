'use client';

import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import { fetchPosts } from "@/lib/utils/fetchPosts";

import PageHeader from "@/components/PageHeader";
import PostPreviewLoading from "@/components/posts/PostPreviewLoading";
import PostPreview from "@/components/posts/PostPreview";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      setIsLoading(true);
      const data = await fetchPosts();
      setPosts(data.posts);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="blog-page">

      <PageHeader
        title="Blog"
        subtitle="Découvrez nos actualités"
        icon="bi bi-journal-text"
      />

      <section className="section">
        <Container>
          <Row className="g-4">
            {isLoading && <PostPreviewLoading />}
            {!isLoading && posts.map((post) => <PostPreview post={post} key={post.id} path={'/blog/'} />)}
          </Row>
        </Container>
      </section>
    </div>
  );
}