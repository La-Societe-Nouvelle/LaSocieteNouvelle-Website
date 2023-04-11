import { Badge, Col, Image, Row } from "react-bootstrap";

export default function SinglePost({ post }) {
  return (
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <article className="m-5">
          <h2>{post.title}</h2>
          <div className="post-tags">
            <Badge bg="light">
              <a href={"/" + post.tag.slug}>{post.tag.name}</a>
            </Badge>
          </div>

          <div className="text-center my-4">
            {post.coverImage && post.tag.slug != "infographies" && (
              <Image src={post.coverImage.url} fluid alt="Image Article" />
            )}
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
          <hr></hr>
          <div className="text-end">
            <p className="small">Publié le {post.date}</p>
          </div>
        </article>
      </Col>
    </Row>
  );
}
