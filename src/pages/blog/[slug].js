import { Container, Image } from "react-bootstrap";
import { useRouter } from "next/router";
import fetchPosts from "../../utils/fetchPosts";
import fetchPostBySlug from "../../utils/fetchPostBySlug";
import { Helmet } from "react-helmet";
import PageHeader from "../../components/PageHeader";

export default function Post({ post }) {
  const router = useRouter();

  // Render a message while fetching data
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

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
            <a href="/">Accueil</a> / <a href={"/blog"}> Blog/</a>
            <a href={"/" + post.slug}>{post.title}</a>
          </div>
        </Container>
      </header>
      <article className="py-5">
        <Container>
          <h2 className="text-center h1">{post.title}</h2>
          <div className="text-center">
            <Image src={post.coverImage.url} fluid />
          </div>

          <div dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
        </Container>
      </article>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = await fetchPostBySlug(params.slug);
  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  const { posts } = await fetchPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}
