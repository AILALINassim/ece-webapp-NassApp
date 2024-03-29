/**
 * Delete a comment
 * @param {Number} commentId
 * @param {Function} getAllPosts
 * @param {Function} setDataPosts
 * @param {Function} setDisplayPage
 */
async function deleteComment(
  commentId,
  getAllPosts,
  setDataPosts,
  setDisplayPage
) {
  try {
    await fetch("/api/comment/delete/" + commentId, {
      method: "DELETE",
      credentials: "include",
    });
    getAllPosts(setDataPosts, setDisplayPage);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  deleteComment,
};
