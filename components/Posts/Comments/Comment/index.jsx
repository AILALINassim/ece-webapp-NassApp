import { Container } from "./style";

function Comment({ comment }) {

  return (
    <Container key={comment.user_id}>
      {/* Avatar 
      {comment.users.avatarUrl ? (
        <img
          src={`http://localhost:3000${comment.users.avatarUrl}`}
          alt="avatar"
        />
      ) : (
        <img src={`http://localhost:3000/images/default.png`} alt="avatar" />
      )}*/}

      <div className="rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none">
        <div>
          {/* Name */}
          <span>
            {comment.profiles.full_name}
          </span>

          {/* Message */}
          <p>{comment.message}</p>
        </div>

        {/* Date
        <span>
          {Intl.DateTimeFormat("fr-FR", {
            dateStyle: "long",
            timeStyle: "short",
          }).format(new Date(comment.createdAt))}
        </span> */}
      </div>
    </Container>
  );
}

export default Comment;
