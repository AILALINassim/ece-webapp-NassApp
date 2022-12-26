import { useState } from "react";

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
  console.log("ICI",post.updatedat);
  return (
    <Container key={post.user_id}>
      {/* Avatar */}
      {post.users?.avatarUrl ? (
        <Avatar
          src={`http://localhost:3000${post.users.avatarUrl}`}
          alt="avatar"
        />
      ) : (
        <Avatar src={`http://localhost:3000/images/default.png`} alt="avatar" />
      )}

      <Div>
        <NameAndDate>
          {/* Name */}
          <UserName>
            {post.profiles.full_name}
          </UserName>

          
          <span>
            {post.updatedat ? <Modified>(modifié)</Modified> : null}
            {/* Date{Intl.DateTimeFormat("fr-FR", {
              dateStyle: "full",
              timeStyle: "short",
            }).format(new Date(post.createdat))} */}
          </span>
        </NameAndDate>

        {/* Content */}
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
