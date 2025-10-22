import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { fetchLatestPosts } from "../../lib/utils/fetchPosts";
import { cutString } from "../../lib/utils/utils";

export default async function LatestPosts() {
  let posts = [];

  try {
    const data = await fetchLatestPosts();
    posts = data.posts;
  } catch (error) {
    console.error(error);
    return null;
  }

  if (!posts.length) {
    return null;
  }

  return (
    <div className="latest-posts">
      <Row className="g-4">
          {/* Article principal */}
          <Col lg={6}>
            <Link href={`/blog/${posts[0].slug}`} className="post-card post-card-featured">
              <div className="post-image-wrapper">
                {posts[0].coverImage && (
                  <Image
                    src={posts[0].coverImage.url}
                    alt={posts[0].title}
                    width={600}
                    height={400}
                    className="post-image"
                  />
                )}
              </div>
              <div className="post-content">
                <span className="post-tag">{posts[0].tag.name}</span>
                <h3 className="post-title">{cutString(posts[0].title, 80)}</h3>
                <p className="post-excerpt">{cutString(posts[0].excerpt, 150)}</p>
              </div>
            </Link>
          </Col>

          {/* Articles secondaires */}
          <Col lg={6}>
            <div className="secondary-posts">
              {/* Article avec image */}
              {posts[1] && (
              <Link href={`/blog/${posts[1].slug}`} className="post-card post-card-horizontal">
                <div className="post-image-wrapper-small">
                  {posts[1].coverImage && (
                    <Image
                      src={posts[1].coverImage.url}
                      alt={posts[1].title}
                      width={120}
                      height={120}
                      className="post-image"
                    />
                  )}
                </div>
                <div className="post-content">
                  <span className="post-tag">{posts[1].tag.name}</span>
                  <h4 className="post-title-small">{cutString(posts[1].title, 80)}</h4>
                  <p className="post-excerpt-small">{cutString(posts[1].excerpt, 100)}</p>
                </div>
              </Link>
              )}
              {/* Articles compacts */}
              <Link href={`/blog/${posts[2].slug}`} className="post-card post-card-compact">
                <span className="post-tag">{posts[2].tag.name}</span>
                <h4 className="post-title-small">{posts[2].title}</h4>
              </Link>

              <Link href={`/blog/${posts[3].slug}`} className="post-card post-card-compact">
                <span className="post-tag">{posts[3].tag.name}</span>
                <h4 className="post-title-small">{posts[3].title}</h4>
              </Link>
            </div>
          </Col>
        </Row>
    
    </div>
  );
}

