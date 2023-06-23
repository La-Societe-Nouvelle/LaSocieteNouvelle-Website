import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageHeader from "../components/PageHeader";
import PostPreview from "../components/posts/PostPreview";
import PostPreviewLoading from "../components/posts/PostPreviewLoading";
import { fetchPublications } from "../utils/fetchPosts";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      setIsLoading(true);
      const data = await fetchPublications();
      setPosts(data.posts);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Publications </title>
      </Helmet>
      <PageHeader title="Publications" path={"publications"} />
      <section id="Posts">
        <Container>
          <Row>
            {isLoading && <PostPreviewLoading />}
            {!isLoading && posts.map((post) => <PostPreview post={post}  path={'/blog/'}  />)}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Posts;
