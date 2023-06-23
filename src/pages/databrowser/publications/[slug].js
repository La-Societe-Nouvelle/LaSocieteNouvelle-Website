import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";
import SinglePost from "../../../components/posts/SinglePost";
import fetchPostBySlug from "../../../utils/fetchSinglePost";

export default function Post({ post }) {
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | {post.title}</title>
      </Helmet>
      <section className="bg-light p-2">
        <Container>
          <div className="bg-white rounded">
            <SinglePost post={post} />
          </div>
        </Container>
      </section>
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const data = await fetchPostBySlug(params.slug);
    return {
      props: {
        post: data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
