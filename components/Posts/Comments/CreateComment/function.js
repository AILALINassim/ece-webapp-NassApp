/**
 * Create a comment
 * @param {String} commentMessage 
 * @param {Number} userId 
 * @param {Number} postId 
 * @param {Function} getAllPosts 
 * @param {Function} setDataPosts 
 * @param {Function} setDisplayPage 
 */
async function createComment(
  commentMessage,
  userId,
  postId,
  getAllPosts,
  setDataPosts,
  setDisplayPage
) {
  try {
    await fetch(process.env.NEXT_PUBLIC_HOST_URL+"/api/comment/create", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: commentMessage,
        user_id: userId,
        post_id: postId,
      }),
    });
    getAllPosts(setDataPosts, setDisplayPage);
  } catch (error) {
    console.log(error);
  }
}

/**
 * Get the user's avatar
 * @param {Number} userId 
 * @param {Function} setImgSrc 
 */
async function getUserAvatar(userId, setImgSrc) {
  try {
    const resultApi = await fetch(process.env.NEXT_PUBLIC_HOST_URL+"/api/user/" + userId, {
      method: "GET",
      credentials: "include",
    });
    const data = await resultApi.json();
    data.user.avatarUrl
      ? setImgSrc(data.user.avatarUrl)
      : setImgSrc("/images/default.png");
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createComment,
  getUserAvatar,
};
