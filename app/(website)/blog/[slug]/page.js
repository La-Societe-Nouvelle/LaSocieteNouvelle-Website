import { Container } from "react-bootstrap";
import { notFound } from "next/navigation";

import SinglePost from "@/components/posts/SinglePost";
import fetchPostBySlug from "@/lib/utils/fetchSinglePost";
import { fetchRelatedPosts } from "@/lib/utils/fetchPosts";

export const revalidate = 86400;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const post = await fetchPostBySlug(slug);
    return {
      title: `${post.title} | La Société Nouvelle`,
      description: post.excerpt || "Article du blog La Société Nouvelle",
    };
  } catch (error) {
    return {
      title: "Article non trouvé | La Société Nouvelle",
    };
  }
}

export default async function Post({ params }) {
  let post;
  const { slug } = await params;

  try {
    post = await fetchPostBySlug(slug);
  } catch (error) {
    notFound();
  }

  const relatedPosts = await fetchRelatedPosts(post);

  return (
    <div className="single-post-page">
      <Container>
        <SinglePost post={post} relatedPosts={relatedPosts} />
      </Container>
    </div>
  );
}
