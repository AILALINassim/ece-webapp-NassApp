import { useState, useRef, useEffect } from "react";

import { getAllPosts } from "../function";
import { createPost } from "./function";

function CreatePost({ setDataPosts, setDisplayPage }) {

  useEffect(() =>{
    setUserId(window.localStorage.getItem("userId"));
  },[])

  const [postMessage, setPostMessage] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postTag, setPostTag] = useState("");
  const [postImg, setPostImg] = useState(null);
  const [fileName, setFileName] = useState("");
  const [userId,setUserId] = useState("");
  const ref = useRef();

  const handleChange = (e) => {
    setPostImg(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createPost(
      postImg,
      postMessage,
      postTitle,
      postTag,
      userId,
      getAllPosts,
      setDataPosts,
      setDisplayPage
    );
    setPostMessage("");
    setPostTitle("");
    setFileName("");
    setPostImg(null);
    ref.current.value = null;
  };

  return (
    <div className="flex items-center justify-center p-12">
  <div className="mx-auto w-full max-w-[550px]">
    <form onSubmit={handleSubmit}>
      <div className="mb-5">
        <label
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Title
        </label>
        <input
          for="title"
          name="title"
          id="title"
          maxLength="255"
          onChange={(e) => setPostTitle(e.target.value)}
          required
          value={postTitle}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          for="subject"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Tag
        </label>
        <input
          for="tag"
          name="tag"
          id="tag"
          maxLength="255"
          onChange={(e) => setPostTag(e.target.value)}
          required
          value={postTag}

          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          for="message"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Message
        </label>
        <textarea
          rows="4"
          name="message"
          id="message"
          maxLength="255"
          onChange={(e) => setPostMessage(e.target.value)}
          required
          value={postMessage}
          className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
      </div>
      <div className="flex">
        <button
          className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
        <input className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8  mx-8 text-base font-semibold text-white outline-none" ref={ref} type="file" id="postImage" onChange={handleChange}/>  
      </div>
    </form>
  </div>
</div>

  );
}

export default CreatePost;
