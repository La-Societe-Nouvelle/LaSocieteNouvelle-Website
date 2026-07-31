"use client";

import { useState } from "react";
import { Row } from "react-bootstrap";

import PostPreview from "./PostPreview";
import FeaturedPost from "./FeaturedPost";

const PAGE_SIZE = 12;

function PostsGrid({ posts, path, featured = false }) {
  const featuredPost = featured && posts.length > 0 ? posts[0] : null;
  const gridPosts = featuredPost ? posts.slice(1) : posts;

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visiblePosts = gridPosts.slice(0, visibleCount);
  const hasMore = visibleCount < gridPosts.length;

  return (
    <>
      {featuredPost && <FeaturedPost post={featuredPost} path={path} />}

      <Row className="g-4">
        {visiblePosts.map((post, index) => (
          <PostPreview
            post={post}
            key={post.id}
            path={path}
            priority={!featuredPost && index === 0}
          />
        ))}
      </Row>

      {hasMore && (
        <div className="load-more-wrap">
          <p className="posts-counter">
            + {gridPosts.length - visiblePosts.length} autres articles
          </p>
          <button
            type="button"
            className="load-more-btn"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
          >
            Afficher plus d'articles
          </button>
        </div>
      )}
    </>
  );
}

export default PostsGrid;
