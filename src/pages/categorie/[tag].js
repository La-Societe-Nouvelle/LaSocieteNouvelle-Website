import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageHeader from "../../components/PageHeader";
import PostPreview from "../../components/posts/PostPreview";
import PostPreviewLoading from "../../components/posts/PostPreviewLoading";
import { fetchPostsByTag, fetchTags, getTag } from "../../utils/fetchPosts";

export default function TagPage({ postsByTag, tag }) {

  const [posts, setPosts] = useState();
  const [tagName] = useState(tag.tag.name);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setPosts(postsByTag.posts);
    setIsLoading(false);
  }, []);

  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | </title>
      </Helmet>
      <PageHeader title={tagName} />

      <section id="Posts">
        <Container>
          <Row>
            {isLoading && <PostPreviewLoading />}
            {!isLoading &&
              posts.map((post) => <PostPreview post={post} key={post.id} />)}
          </Row>
        </Container>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  
  const { tags } = await fetchTags();
  console.log(tags)
  const paths = tags.map((tag) => ({ params: { tag } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = await fetchPostsByTag(params.tag);
  const tag = await getTag(params.tag);

  return {
    props: { data, tag },
  };
}
