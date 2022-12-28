import { Container } from "./style";

function Comment({ comment }) {

  return (
    <Container key={comment.user_id}>

      <div className="rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none">
        <div>
          <span>
            {comment.profiles.full_name}
          </span>

          <p>{comment.message}</p>
        </div>

      </div>
    </Container>
  );
}

export default Comment;
