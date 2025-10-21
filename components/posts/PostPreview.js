import { Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { cutString } from "../../lib/utils/utils";

function PostPreview({post, path}) {

  return (
    <Col key={post.id} lg={3} md={6}>
      <div className="post-preview h-100">
        <div className="img-container">
          {post.coverImage && (
            <Image
              src={post.coverImage.url}
              alt={post.title}
              width={400}
              height={250}
              className="card-img"
            />
          )}
        </div>
        <div className="post-body">
          <div className="post-tags mb-2">
            <span className="badge bg-light">
              <Link href={`/categorie/${post.tag.slug}`}>
                {post.tag.name}
              </Link>
            </span>
          </div>
          <div className="post-title">
            <h3>
              <Link href={`${path}${post.slug}`} title={post.title}>
                {cutString(post.title, 70)}
              </Link>
            </h3>
          </div>

          <p className="excerpt">
            {cutString(post.excerpt, 140)}
          </p>
          <div className="mt-auto">
            <Link href={`${path}${post.slug}`} className="read-more-link">
              Lire la suite
              <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default PostPreview;
