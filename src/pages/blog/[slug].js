import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";
import SinglePost from "../../components/posts/SinglePost";
import fetchPostBySlug from "../../utils/fetchSinglePost";

export default function Post({ post }) {

  return (
    <>
      <Helmet>
        <title>
          La Société Nouvelle | {post.title}
          des entreprises?
        </title>
      </Helmet>
      <header className="bg-light pt-4 pb-2">
        <Container>
          <div className="breadcrumb">
            <a href="/">Accueil</a> / <a href={"/blog/"}> Blog/</a>
            <a href={"/blog/" + post.slug}>{post.title}</a>
          </div>
        </Container>
      </header>
      <Container>
        <SinglePost post={post} />
      </Container>
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
