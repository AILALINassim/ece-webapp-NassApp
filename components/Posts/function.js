async function getAllPosts(setDataPosts, setDisplayPage) {
  try {
    const resultApi = await fetch("http://localhost:3000/api/post/get", {
      method: "GET",
      credentials: "include",
    });
    const data = await resultApi.json();
    console.log("Res  : ",data);
    if (!data.error) {
      setDataPosts(data.responseBody);
    } else {
      setDisplayPage(false);
    }
  } catch (error) {
    console.log("Err  : ",error);
  }
}

module.exports = {
  getAllPosts,
};
