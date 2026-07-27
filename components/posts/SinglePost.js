import Image from "next/image";
import Link from "next/link";
import RelatedPosts from "./RelatedPosts";
import { printDate } from "@/utils/dateHelpers";

export default function SinglePost({ post, relatedPosts = [] }) {
  return (
    <article className="single-post">
      {post.coverImage && post.tag?.slug !== "infographies" && (
        <div className="post-cover">
          <Image
            src={post.coverImage.url}
            alt={post.title}
            width={1200}
            height={600}
            className="cover-image"
            priority
          />
        </div>
      )}

      <div className="post-text">
        <header className="post-header">
          <div className="post-meta">
            {post.tag && (
              <Link href={`/categorie/${post.tag.slug}`} className="post-category">
                {post.tag.name}
              </Link>
            )}
            <span className="post-date">{printDate(post.date)}</span>
          </div>
          <h1 className="post-title">{post.title}</h1>
        </header>

        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        />
      </div>

      {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
    </article>
  );
}
