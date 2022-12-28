
async function updatePost(
  postEditMessage,
  postEditImg,
  postId,
  getAllPosts,
  setDataPosts,
  setDisplayPage
) {


  if (postEditImg !== null) {
    try {
      await fetch("/api/post/update", {
        method: "PUT",
        credentials: "include",
        body: {
          message : postEditMessage,
          imageUrl : postEditImg
        },
      });
      getAllPosts(setDataPosts, setDisplayPage);
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      await fetch("/api/post/update", {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          message: postEditMessage,
          post_id : postId
        }),
      });
      getAllPosts(setDataPosts, setDisplayPage);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = {
  updatePost,
};
