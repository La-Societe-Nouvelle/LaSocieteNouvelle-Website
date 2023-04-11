import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";

import { Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

import { fetchPostsByTag, getTag } from "../utils/fetchPosts";

import PageHeader from "../components/PageHeader";
import PostPreview from "../components/posts/PostPreview";
import PostPreviewLoading from "../components/posts/PostPreviewLoading";

export default function TagPage() {
  const router = useRouter();
  const { tag } = router.query;

  const [posts, setPosts] = useState([]);
  const [tagName, setTagName] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (tag) {
      fetchTagName();
      fetchData();
      setIsLoading(false);
    }
  }, [router]);

  const fetchTagName = async () => {
    const tagName = await getTag(tag);

    setTagName(tagName);
  };

  const fetchData = async () => {
    const data = await fetchPostsByTag(tag);
    setPosts(data.posts);
  };

  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | </title>
      </Helmet>
      <PageHeader title={tagName} />

      <section id="Posts">
        <Container>
          <Row>
            {isLoading && <PostPreviewLoading />}
            {!isLoading &&
              posts.length > 0 &&
              posts.map((post) => <PostPreview post={post} key={post.id} />)}
          </Row>
        </Container>
      </section>
    </>
  );
}
