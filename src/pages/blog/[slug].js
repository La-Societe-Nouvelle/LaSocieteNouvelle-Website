import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";


import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageHeader from "../../components/PageHeader";
import articles from "../../lib/articles.json";


const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
  const posts = articles.posts;

  let getPost = posts.filter((post) => {
    return post.slug == slug;
  });

  const obj = { ...getPost[0] };

  const [post, setPost] = useState(obj);
  const [content, setContent] = useState();

  useEffect(() => {
    const { slug } = router.query;
    const posts = articles.posts;
  
    let getPost = posts.filter((post) => {
      return post.slug == slug;
    });
  
    const obj = { ...getPost[0] };

    setPost(obj);

    getContent(slug);
  }, [router.query]);

  
const getContent = async(slug) => {


  {
    fetch(slug + ".txt")
    .then(t => t.text()).then(text => {
      setContent(text);
  })
  
  }
  }
  
  return (
    <>
      {post && (
        <>
          <Helmet>
            <title>La société Nouvelle | </title>
          </Helmet>
          <PageHeader
            title={post.titre}
            prev={"articles"}
            prevTitle={"Articles"}
            path={"articles/" + post.slug}
          />
          <Container>
            <section>
            
              <h2>{post.titre}</h2> 
              <div dangerouslySetInnerHTML={{__html: post.content}} />
            </section>
          </Container>
        </>
      )}
    </>
  );
};

export default Post;
