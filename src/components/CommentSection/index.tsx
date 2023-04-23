import CommentCard from "./CommentCard";
import classes from "./CommentSection.module.css";

export interface CommentSectionProps {
  currentUserImg: string;
  currentUser: string;
  comments: {
    id: string;
    user: {
      image: string;
      username: string;
    };
    score: number;
    content: string;
    createdAt: string;
    replies: {
      id: string;
      user: {
        image: string;
        username: string;
      };
      score: number;
      content: string;
      createdAt: string;
      replyingTo: string;
    }[];
  }[];
}

export default function CommentSection({
  currentUser,
  currentUserImg,
  comments,
}: CommentSectionProps) {
  return (
    <section className={`max-w-[40rem] ${classes["font-rubik"]}`}>
      <div className="flex flex-col space-y-3">
        {comments.map((comment) => (
          <div key={comment.id}>
            <CommentCard
              id={comment.id}
              user={{
                image: import.meta.env.BASE_URL + comment.user.image,
                username: comment.user.username,
              }}
              score={comment.score}
              createdAt={comment.createdAt}
              content={comment.content}
              showYouBadge={comment.user.username === currentUser}
            />
            {comment.replies.length > 0 && (
              <div className="flex py-3">
                <div className="mx-3 my-1 border border-[hsl(211,10%,45%)] border-opacity-20 md:mx-8"></div>
                <div className="flex flex-col space-y-3">
                  {comment.replies.map((reply) => (
                    <CommentCard
                      key={reply.id}
                      id={reply.id}
                      user={{
                        image: import.meta.env.BASE_URL + reply.user.image,
                        username: reply.user.username,
                      }}
                      score={reply.score}
                      createdAt={reply.createdAt}
                      content={reply.content}
                      showYouBadge={reply.user.username === currentUser}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-row items-start space-x-3 rounded-lg bg-white p-4 py-6">
        <img
          className="w-6"
          src={currentUserImg}
          alt={`${currentUser}'s profile`}
        />
        <div className="flex grow flex-col items-start gap-3 md:flex-row">
          <textarea
            placeholder="Add a comment"
            className="w-full grow rounded-lg border border-[hsl(211,10%,45%)] border-opacity-20 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-[hsla(238,40%,52%,0.5)]"
            rows={3}
          ></textarea>
          <button className=" select-none rounded bg-[hsla(238,40%,52%)] px-3 py-2 text-sm uppercase text-white focus:outline-none focus:ring-1 focus:ring-[hsla(238,40%,52%,0.5)]">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}
