import { Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageHeader from "../../components/PageHeader";
import PostPreview from "../../components/posts/PostPreview";
import { fetchPostsByTag, getTag } from "../../utils/fetchPosts";


function TagPage({ tagName, posts }) {

  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | </title>
      </Helmet>
      <PageHeader title={tagName} />

      <section id="Posts">
        <Container>
          <Row> 
            {posts.map((post) => (
              <PostPreview post={post} key={post.id}  path={'/blog/'}  />
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { tag } = query;

  try {
    const data = await fetchPostsByTag(tag);
    const tagName = await getTag(tag);
    return {
      props: {
        tagName: tagName,
        posts: data.posts,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default TagPage;
