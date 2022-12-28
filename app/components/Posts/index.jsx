import { useState, useEffect } from "react";

import CreatePost from "./CreatePost";
import Post from "./Post";
import Comments from "./Comments";

import { getAllPosts } from "./function";
import { Container } from "./style";

function Posts({ setDisplayPage }) {
  console.log("JE SUIS ICI")
  const [dataPosts, setDataPosts] = useState([]);
 
  useEffect(() => {
    getAllPosts(setDataPosts, setDisplayPage);
  }, [setDisplayPage]);

  return (
    <>
      <CreatePost
        setDataPosts={setDataPosts}
        setDisplayPage={setDisplayPage}
      />

      {dataPosts.map((post) => {
        return (
          <Container key={post.id}>
            <Post
              post={post}
              setDataPosts={setDataPosts}
              setDisplayPage={setDisplayPage}
            />

            <Comments
              post={post}
              setDataPosts={setDataPosts}
              setDisplayPage={setDisplayPage}
            />
          </Container>
        );
      })}
    </>
  );
}

export default Posts;
