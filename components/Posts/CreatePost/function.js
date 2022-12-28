async function createPost(
  postImg,
  postMessage,
  postTitle,
  postTag,
  userId,
  getAllPosts,
  setDataPosts,
  setDisplayPage
) {

  console.log("POost",postTitle);
  if (postImg !== null) {
    const formData = new FormData();
    formData.append("message", postMessage);
    formData.append("imageUrl", postImg);
    formData.append("user_id", userId);
    formData.append("title", postTitle);
    formData.append("tag", postTag);
    try {
      await fetch("/api/post/create", {
        method: "POST",
        credentials: "include",
        body: formData,
      });
      getAllPosts(setDataPosts, setDisplayPage);
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      await fetch("/api/post/create", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: postMessage,
          user_id: userId,
          title: postTitle,
          tag : postTag,
        }),
      });
      getAllPosts(setDataPosts, setDisplayPage);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = {
  createPost,
};
