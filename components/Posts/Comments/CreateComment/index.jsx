import { useState, useEffect } from "react";

import { getAllPosts } from "../../function";
import { createComment, getUserAvatar } from "./function";
import { Form } from "./style";

function CreateComment({ post, setDataPosts, setDisplayPage }) {
  const userId = localStorage.getItem("userId");
  const postId = post.id;
  const [commentMessage, setCommentMessage] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    getUserAvatar(userId, setImgSrc);
  }, [userId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    createComment(
      commentMessage,
      userId,
      postId,
      getAllPosts,
      setDataPosts,
      setDisplayPage
    );
    setCommentMessage("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>

        {/* Message input */}
        <input
          placeholder="Écrivez votre commentaire ici..."
          value={commentMessage}
          maxLength="255"
          type="text"
          onChange={(e) => setCommentMessage(e.target.value)}
          required
        />

        {/* Submit button */}
        <button type="submit" className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-4 text-base font-semibold text-white outline-none" smallButton>
          RÉPONDRE
        </button>
      </Form>
    </>
  );
}

export default CreateComment;
