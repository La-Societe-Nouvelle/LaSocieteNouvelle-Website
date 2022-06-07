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
              <Image
                alt="Photo d'équipe de la Societé Nouvelle"
                src={"/images/articles/" + posts[0].image}
                fluid
              />
            </div>
            <div className="post-title">
               <h2><a href={"/blog/" + posts[0].slug}> {posts[0].titre} </a></h2>
            </div>
            <div className="post-meta">
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
                        <Image
                          alt="Photo d'équipe de la Societé Nouvelle"
                          src={"/images/articles/thumbnail-" + post.image}
                          fluid
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className="post-title">
                        <h2><a href={"/blog/" + post.slug}>{post.titre}</a></h2>
                      </div>
                      <div className="post-meta">
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
