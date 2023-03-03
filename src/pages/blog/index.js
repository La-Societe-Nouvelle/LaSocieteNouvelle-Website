import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import fetchPosts from "../../utils/fetchPosts";
import PageHeader from "../../components/PageHeader";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Blog = () => {
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
    <>
      <Helmet>
        <title>La Société Nouvelle | Blog </title>
      </Helmet>
      <PageHeader title="Articles" path={"blog"} />
      <section id="Posts">
        <Container>
          <Row>
            {isLoading && (
              <>
                <Col lg={3}>
                  <Card className="mb-3 post-preview is-loading">
                    <div className="card-img"></div>
                    <Card.Body>
                      <Card.Title></Card.Title>
                      <Card.Text className="small"></Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={3}>
                  <Card className="mb-3 post-preview is-loading">
                    <div className="card-img"></div>
                    <Card.Body>
                      <Card.Title></Card.Title>
                      <Card.Text className="small"></Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={3}>
                  <Card className="mb-3 post-preview is-loading">
                    <div className="card-img"></div>
                    <Card.Body>
                      <Card.Title></Card.Title>
                      <Card.Text className="small"></Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            )}
            {!isLoading &&
              posts.map((post) => (
                <Col lg={3}>
                  <Card key={post.id} className="mb-3 post-preview">
                    {post.coverImage && <Card.Img src={post.coverImage.url} />}

                    <Card.Body>
                      <Card.Title>{post.title}</Card.Title>
                      <Card.Text className="small">{post.excerpt}</Card.Text>
                      <Button
                        size="sm"
                        variant="primary"
                        href={`/blog/${post.slug}`}
                      >
                        Lire la suite
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Blog;

//  export default function Blog() {

//    const [posts, setPosts] = useState(articles.posts);

//    return (
//      <>
//        <Helmet>
//          <title>La Société Nouvelle | Blog </title>
//        </Helmet>
//        <PageHeader
//          title="Blog"
//          path={"blog"}
//        />
//        <section className="blog">
//          <Container>
//          {/* {posts.map((post, key) => {
//              return (

//                  <div className="post" key={key}>
//                    <Row>
//                      <Col lg={3}>
//                        <div className="image-post">
//                          <Image
//                            alt="Image post"
//                            src={"/images/articles/thumbnail-" + post.image}
//                            fluid
//                          />
//                        </div>
//                      </Col>
//                      <Col>
//                      <div>
//                          <div className="post-title">
//                            <h2>   <a href={"/blog/" + post.slug}>{post.titre}</a> </h2>
//                            <div className="post-meta d-flex justify-content-between">
//                            <p className="category ">{post.categorie}</p>

//                              <p>Publié le {post.date}</p>
//                            </div>
//                          </div>
//                          <div className="post-content my-2">
//                            <p>{post.texte}</p>
//                          </div>
//                          <div className="post-footer mt-4 mb-3">
//                            <Link href={"/blog/" + post.slug} >Lire la suite</Link>
//                          </div>
//                      </div>
//                      </Col>
//                    </Row>
//                  </div>

//              );
//            })} */}
//          </Container>
//        </section>
//      </>
//    );
//  }
