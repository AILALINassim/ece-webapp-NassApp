import CreateComment from "./CreateComment";
import Comment from "./Comment";
import DeleteButton from "./DeleteButton";

function Comments({ post, setDataPosts, setDisplayPage }) {
  console.log("Ps : ",post);
  return (
    <>
      {post.comments.map((comment) => {
        return (
          <div key={comment.id}>
            <Comment comment={comment} />

            <DeleteButton
              setDataPosts={setDataPosts}
              setDisplayPage={setDisplayPage}
              comment={comment}
            />
          </div>
        );
      })}
            <CreateComment
        post={post}
        setDataPosts={setDataPosts}
        setDisplayPage={setDisplayPage}
      />
    </>
  );
}

export default Comments;
