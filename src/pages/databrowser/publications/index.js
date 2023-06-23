import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Container, Row } from "react-bootstrap";
import PostPreview from "../../../components/posts/PostPreview";
import PostPreviewLoading from "../../../components/posts/PostPreviewLoading"; 
import { fetchPublications } from "../../../utils/fetchPosts";

const Publications = () => {
  const [posts, setPublications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPublications();
  }, []);

  const getPublications = async () => {
    try {
      setIsLoading(true);
      const data = await fetchPublications();
      setPublications(data.posts);
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
 
      <section className="databrowser">
        <Container>
          <h2 className="text-center mb-5">Publications</h2>
          <Row>
            {isLoading && <PostPreviewLoading />}
            {!isLoading && posts.map((post) => <PostPreview post={post} key={post.id} path={'/databrowser/publications/'} />)}
          </Row>

        </Container>
      </section>
    </>
  );
};

export default Publications;


