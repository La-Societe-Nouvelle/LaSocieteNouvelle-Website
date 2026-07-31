import Link from "next/link";
import Image from "next/image";
import { cutString, formatDate } from "../../lib/utils/utils";

function FeaturedPost({ post, path }) {

  return (
    <Link href={`${path}${post.slug}`} className="featured-post">
      <div className="featured-img">
        {post.coverImage ? (
          <Image
            src={post.coverImage.url}
            alt={post.title}
            fill
            className="featured-cover"
            sizes="(max-width: 991px) 100vw, 50vw"
            priority
          />
        ) : (
          <div className="img-placeholder">
            <i className="bi bi-journal-text" aria-hidden="true"></i>
          </div>
        )}
      </div>
      <div className="featured-body">
        <span className="featured-kicker">
          À la une{post.date && ` · ${formatDate(post.date)}`}
        </span>
        <h2 className="featured-title">{post.title}</h2>
        <p className="featured-excerpt">{cutString(post.excerpt, 180)}</p>
        <div className="featured-foot">
          {post.tag && <span className="badge">{post.tag.name}</span>}
          <span className="read-more-link">
            Lire la suite
            <i className="bi bi-arrow-right ms-1"></i>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default FeaturedPost;
