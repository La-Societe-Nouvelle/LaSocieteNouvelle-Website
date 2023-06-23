import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import PageHeader from "../../components/PageHeader";
import { Container, Row } from "react-bootstrap";
import PostPreview from "../../components/posts/PostPreview";
import PostPreviewLoading from "../../components/posts/PostPreviewLoading";
import { fetchPosts } from "../../utils/fetchPosts";
import BoxNewsletter from "../../components/BoxNewsletter";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      setIsLoading(true);
      const data = await fetchPosts();
      console.log(data)
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
        <title>La Société Nouvelle | Blog </title>
      </Helmet>
      <PageHeader title="Blog" path={"blog"} />
      <section id="Posts">
        <Container>
          <Row>
            {isLoading && <PostPreviewLoading />}
            {!isLoading && posts.map((post) => <PostPreview post={post} key={post.id}  path={'/blog/'} />)}
          </Row>
          <hr></hr>
          <div className="mt-4 mx-3">
            <BoxNewsletter></BoxNewsletter>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Posts;
