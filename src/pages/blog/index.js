import React, { useState } from "react";
import { Helmet } from "react-helmet";
import articles from "../../lib/articles.json";

// Components

import {
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";

export default function Blog() {

  const [posts, setPosts] = useState(articles.posts);


  return (
    <>
      <Helmet>
        <title>La société Nouvelle | Blog </title>
      </Helmet>
      <PageHeader
        title="Blog"
        path={"blog"}
      />
      <section className="blog">
        <Container>
        {posts.map((post, key) => {
            return (
            
                <div className="post" key={key}>
                  <Row>
                    <Col lg={3}>
                      <div className="image-post">
                        <Image
                          alt="Image post"
                          src={"/images/articles/thumbnail-" + post.image}
                          fluid
                        />
                      </div>
                    </Col>
                    <Col>
                    <div>
                        <div className="post-title">
                          <h2>{post.titre}</h2>
                          <div className="post-meta d-flex justify-content-between">
                          <p className="category ">{post.categorie}</p>

                            <p>Publié le {post.date}</p>
                          </div>
                        </div>
                        <div className="post-content">
                          <p>{post.texte}</p>
                        </div>
                        <div className="post-footer">
                          <Link href={"/blog/" + post.slug} >Lire la suite</Link>
                        </div>
                    </div>
                    </Col>
                  </Row>
                </div>
              
            );
          })}
        </Container>
      </section>
    </>
  );
}
