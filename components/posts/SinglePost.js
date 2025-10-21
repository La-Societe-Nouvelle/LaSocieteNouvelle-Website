import Image from "next/image";
import Link from "next/link";

export default function SinglePost({ post }) {
  return (
    <article className="single-post">
      <header className="post-header">
        <div className="post-meta">
          <Link href={`/categorie/${post.tag.slug}`} className="post-category">
            {post.tag.name}
          </Link>
          <span className="post-date">{post.date}</span>
        </div>
        <h1 className="post-title">{post.title}</h1>
      </header>

      {post.coverImage && post.tag.slug !== "infographies" && (
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

      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content.html }} />
    </article>
  );
}
