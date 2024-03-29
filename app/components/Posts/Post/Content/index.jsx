import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

import Button from "../../../../utils/styles/button";

import { getAllPosts } from "../../function";
import { updatePost } from "./function";
import { Form, Div } from "./style";
import Gravatar from "react-gravatar"
function Content({
  post,
  setDataPosts,
  setDisplayPage,
  editPost,
  setEditPost,
}) {
  const [postEditMessage, setPostEditMessage] = useState(post.message);
  const [postEditImg, setPostEditImg] = useState(null);
  const [fileName, setFileName] = useState("");
  const ref = useRef();

  const handleChange = (e) => {
    setPostEditImg(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleSubmit = (postId) => {
    updatePost(
      postEditMessage,
      postEditImg,
      postId,
      getAllPosts,
      setDataPosts,
      setDisplayPage
    );
    setEditPost(false);
    setFileName("");
    setPostEditImg(null);
    ref.current.value = null;
  };

  return (
    <>
      {editPost ? (
        <Form onSubmit={() => handleSubmit(post.id)}>
          <textarea
            value={postEditMessage}
            maxLength="255"
            type="text"
            onChange={(e) => setPostEditMessage(e.target.value)}
          />

          {post.imageUrl ? (
            <img src={`http://localhost:3000${post.imageUrl}`} alt="post" />
          ) : null}
          
          <div>
            <span>{fileName}</span>
            <label htmlFor="postEditImage">
              <FontAwesomeIcon icon={faImage} size="2x" />
            </label>
            <input
              ref={ref}
              id="postEditImage"
              type="file"
              onChange={handleChange}
            />

            <Button type="submit" smallButton>
              MODIFIER
            </Button>

            <Button
              type="button"
              onClick={() => setEditPost(false)}
              smallButton
            >
              ANNULER
            </Button>
          </div>
        </Form>
      ) : (
        <div className="relative">
        <p  className="font-light absolute top-0 right-0"  > 
        <div class="bg-blue-100 inline-flex items-center text-sm rounded mt-2 mr-1 overflow-hidden">
      <span class="ml-2 mr-1 leading-relaxed truncate max-w-xs px-1" x-text="tag">{post.tag}</span>
    </div>
        </p>
          <p  style={{fontWeight: 'bold'}} > Title : {post.title.toUpperCase()}</p>
          <p>{post.message}</p>

          {post.imageUrl ? (
            <Div>
              <img src={`http://localhost:3000${post.imageUrl}`} alt="post" />
            </Div>
          ) : null}
        </div>
      )}
    </>
  );
}

export default Content;
