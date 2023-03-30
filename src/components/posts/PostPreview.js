import React from "react";
import { Badge, Button, Card, Col } from "react-bootstrap";
import { cutString } from "../../utils/utils";

function PostPreview({post}) {

  return (
    <Col key={post.id} lg={3}>
      <Card className="mb-3 post-preview">
        <div className="img-container">
          {post.coverImage && <Card.Img src={post.coverImage.url} />}
        </div>
        <Card.Body>
          <div className="post-tags">
            <Badge bg="light"><a href={ "/blog/" + post.tag.slug}>{post.tag.name}</a></Badge>
          </div>
          <Card.Title>
            <h3 className="h4 mt-3">
              <a href={`/blog/${post.slug}`} title={post.title}>
                {cutString(post.title, 80)}
              </a>
            </h3>
          </Card.Title>

          <Card.Text className="small">
            {cutString(post.excerpt, 140)}
          </Card.Text>
          <div className="text-end">
            <Button size="sm" variant="primary" href={`/blog/${post.slug}`}>
              Lire la suite
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default PostPreview;
