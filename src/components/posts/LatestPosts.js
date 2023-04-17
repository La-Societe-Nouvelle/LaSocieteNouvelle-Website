import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { fetchLatestPosts } from "../../utils/fetchPosts";
import { cutString } from "../../utils/utils";

function LatestPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getLatestPosts();
  }, []);

  const getLatestPosts = async () => {
    try {
      const data = await fetchLatestPosts();
   
      setPosts(data.posts);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="latest-posts">
      {posts.length > 0 && (
        <Row>
          <Col>
            <Card className="mb-3 post-preview">
              <div className="img-container">
                {posts[0].coverImage && (
                  <Card.Img src={posts[0].coverImage.url} alt={"Image d'illustraton pour l'article " + posts[0].title} />
                )}
              </div>
              <Card.Body>
                <div className="posts-tags">
                  <Badge bg="light">{posts[0].tag.name}</Badge>
                </div>
                <Card.Title>
                  <h5 className="mt-3">
                    <a
                      href={`/blog/${posts[0].slug}`}
                      title={posts[0].title}
                    >
                      {cutString(posts[0].title, 80)}
                    </a>
                  </h5>
                </Card.Title>

                <Card.Text className="small">
                  {cutString(posts[0].excerpt, 400)}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="mb-3 border-2 border-light horizontal-preview ">
              <Row>
                <Col lg={4}>
                  <div className="img-container ">
                    {posts[1].coverImage && (
                      <Card.Img
                        className=""
                        src={posts[1].coverImage.url}
                        alt={"Image d'illustraton pour l'article " + posts[1].title} 
                      />
                    )}
                  </div>
                </Col>
                <Col>
                  <Card.Body>
                    <div className="posts-tags">
                      <Badge bg="light">{posts[1].tag.name}</Badge>
                    </div>
                    <Card.Title>
                      <h5 className="h6 mt-3">
                        <a href={`/blog/${posts[1].slug}`} title={posts[1].title}>
                          {cutString(posts[1].title, 80)}
                        </a>
                      </h5>
                    </Card.Title>
                    <Card.Text className="small">
                      {cutString(posts[0].excerpt, 100)}
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>

            <Card className="mb-3 border-2 border-light ">
              <Card.Body>
                <Card.Title>
                  <Badge bg="light" className="me-2">
                    {posts[2].tag.name}
                  </Badge>
                  <h5 className="h6 mt-3">
                    <a href={`/blog/${posts[2].slug}`} title={posts[2].title}>
                      {posts[2].title}
                    </a>
                  </h5>
                </Card.Title>
              </Card.Body>
            </Card>

            <Card className="mb-3 border-2 border-light ">
              <Card.Body>
                <Card.Title>
                  <Badge bg="light">{posts[3].tag.name}</Badge>
                  <h5 className="h6 mt-3">
                    <a href={`/blog/${posts[3].slug}`} title={posts[3].title}>
                      {posts[3].title}
                    </a>
                  </h5>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default LatestPosts;
