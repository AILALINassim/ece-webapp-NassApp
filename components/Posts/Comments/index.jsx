import CreateComment from "./CreateComment";
import Comment from "./Comment";
import DeleteButton from "./DeleteButton";

function Comments({ post, setDataPosts, setDisplayPage }) {
  console.log("Ps : ",post);
  return (
    <>
      {/* Create comment */}
      <CreateComment
        post={post}
        setDataPosts={setDataPosts}
        setDisplayPage={setDisplayPage}
      />

      {/* Display comments */}
      {post.comments.map((comment) => {
        return (
          <div key={comment.id}>
            {/* Comment */}
            <Comment comment={comment} />

            {/* Delete button */}
            <DeleteButton
              setDataPosts={setDataPosts}
              setDisplayPage={setDisplayPage}
              comment={comment}
            />
          </div>
        );
      })}
    </>
  );
}

export default Comments;
