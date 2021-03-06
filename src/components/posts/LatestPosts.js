import Link from "next/link";
import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import articles from "../../lib/articles.json";

function LatestPosts() {
  const [posts, setPosts] = useState(articles.posts.slice(0, 4));

  return (
    <div id="latest-posts">
      <Row>
        <Col lg={6}>
          <div className="last">
            <div className="image-post">
              {posts[0].categorie == "video" ? (
                <iframe
                  width="560"
                  height="315"
                  src={"https://www.youtube.com/embed/" + posts[0].lien}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <Image
                  alt={posts[0].titre}
                  src={"/images/articles/" + posts[0].image}
                  fluid
                />
              )}
            </div>
            <div className="post-title">
              <h2>
                <a href={"/blog/" + posts[0].slug}> {posts[0].titre} </a>
              </h2>
            </div>
            <div className="post-meta d-flex justify-content-between">
              <p className="category">{posts[0].categorie}</p>
              <p>Publié le {posts[0].date}</p>
            </div>
            <div className="post-content">
              <p>{posts[0].texte}</p>
            </div>
            <div className="post-footer">
              <Link href={"/blog/" + posts[0].slug}>Lire la suite</Link>
            </div>
          </div>
        </Col>
        <Col>
          {posts.map((post, key) => {
            return (
              key != 0 && (
                <div className="post" key={key}>
                  <Row>
                    <Col lg={4}>
                      <div className="image-post">
                        {posts.categorie == "video" ? (
                          <iframe
                            width="560"
                            height="315"
                            src={"https://www.youtube.com/embed/" + post.lien}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        ) : (
                          <a href={"/blog/" + post.slug}>
                            <Image
                              alt="Photo d'équipe de la Societé Nouvelle"
                              src={"/images/articles/thumbnail-" + post.image}
                              fluid
                            />
                          </a>
                        )}
                      </div>
                    </Col>
                    <Col>
                      <div className="post-title ">
                        <h2>
                          <a href={"/blog/" + post.slug}>{post.titre}</a>
                        </h2>
                      </div>
                            <div className="post-meta d-flex justify-content-between">
                            <p className="category ">{post.categorie}</p>

                    <p>Publié le {post.date}</p>
                  </div>
                      <div className="post-content">
                        <p>{post.texte}</p>
                      </div>
                      <div className="post-footer">
                        <Link href={"/blog/" + post.slug}>Lire la suite</Link>
                      </div>
                    </Col>
                  </Row>
                </div>
              )
            );
          })}
        </Col>
      </Row>
    </div>
  );
}

export default LatestPosts;
