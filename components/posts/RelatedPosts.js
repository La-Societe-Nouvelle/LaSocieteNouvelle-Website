import { Row } from "react-bootstrap";
import PostPreview from "./PostPreview";

export default function RelatedPosts({ posts }) {
  return (
    <section className="related-posts">
      <h2 className="related-posts-title">À lire aussi</h2>
      <Row className="g-4">
        {posts.map((post) => (
          <PostPreview post={post} key={post.id} path="/blog/" md={4} />
        ))}
      </Row>
    </section>
  );
}
