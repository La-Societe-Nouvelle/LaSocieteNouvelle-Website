import { Badge, Col, Container, Image, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import fetchSinglePost from "../../utils/fetchSinglePost";
import { Helmet } from "react-helmet";
import { fetchPosts } from "../../utils/fetchPosts";

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
            <a href="/">Accueil</a> / <a href={"/blog/"}> Blog/</a>
            <a href={"/" + post.slug}>{post.title}</a>
          </div>
        </Container>
      </header>
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <article className="m-5">
              <h2>{post.title}</h2>
              <div className="post-tags">
                <Badge bg="light">
                  <a href={"/" + post.tag.slug}>{post.tag.name}</a>
                </Badge>
              </div>

              <div className="text-center my-4">
                {post.coverImage && post.tag.slug != "infographies" && (
                  <Image src={post.coverImage.url} fluid alt="Image Article" />
                )}
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: post.content.html }}
              ></div>
              <hr></hr>
              <div className="text-end">
                <p className="small">Publié le {post.date}</p>
              </div>
            </article>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = await fetchSinglePost(params.slug);
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
