async function likePost(
  postId,
  userId,
  getAllPosts,
  setDataPosts,
  setDisplayPage
) {
  try {
    await fetch("/api/post/like/" + postId, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        post_id: postId,
      }),
    });
    getAllPosts(setDataPosts, setDisplayPage);
  } catch (error) {
    console.log(error);
  }
}

async function deletePost(postId,userId,getAllPosts, setDataPosts, setDisplayPage) {
  try {
    await fetch("/api/post/delete/" + postId, {
      method: "DELETE",
      credentials: "include",
    });
    getAllPosts(setDataPosts, setDisplayPage);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  likePost,
  deletePost,
};
