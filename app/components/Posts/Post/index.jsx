import { useState } from "react";
import Gravatar from 'react-gravatar'

import Content from "./Content";
import Buttons from "./Buttons";

import {
  Container,
  Avatar,
  Div,
  NameAndDate,
  Modified,
  UserName,
} from "./style";

function Post({ post, setDataPosts, setDisplayPage }) {
  const [editPost, setEditPost] = useState();
  console.log("ICI",post.profiles);
  return (
    <Container key={post.user_id}>
      <Gravatar email={post.profiles.email} size={150}/>

      <Div>
        <NameAndDate>
          <UserName>
           Fullname : {post.profiles.full_name}
          </UserName>
        </NameAndDate>

        <Content
          post={post}
          setDataPosts={setDataPosts}
          setDisplayPage={setDisplayPage}
          editPost={editPost}
          setEditPost={setEditPost}
        />

        {/* Like, Edit & Delete button */}
        <Buttons
          post={post}
          setDataPosts={setDataPosts}
          setDisplayPage={setDisplayPage}
          editPost={editPost}
          setEditPost={setEditPost}
        />
      </Div>
    </Container>
  );
}

export default Post;
