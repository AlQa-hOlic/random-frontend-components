import { ReactComponent as MinusIcon } from "../../assets/challenges/comment-section/assets/icon-minus.svg";
import { ReactComponent as PlusIcon } from "../../assets/challenges/comment-section/assets/icon-plus.svg";
import { ReactComponent as ReplyIcon } from "../../assets/challenges/comment-section/assets/icon-reply.svg";

function ReplyButton({ className = "" }: { className?: string }) {
  return (
    <button
      className={`flex select-none items-center space-x-1 rounded p-2 focus:bg-[hsl(239,57%,85%)] focus:outline-none focus:ring-1 focus:ring-[hsla(238,40%,52%,0.5)] ${className}`}
    >
      <ReplyIcon className="w-3 text-[hsl(238,40%,52%)]" />
      <span className="text-sm font-semibold text-[hsl(238,40%,52%)]">
        Reply
      </span>
    </button>
  );
}

function ScoreInput({ score }: { score: number }) {
  return (
    <div className="flex select-none items-center space-x-2 space-y-0 rounded-md bg-[hsl(223,19%,93%)] p-2 md:flex-col md:space-x-0 md:space-y-1">
      <button className="p-1 text-[hsl(239,57%,85%)] focus:text-[hsl(238,40%,52%)] focus:outline-none">
        <PlusIcon className="h-3 w-3" />
      </button>
      <span className="px-1 text-[hsl(238,40%,52%)]">{score}</span>
      <button className="p-1 text-[hsl(239,57%,85%)] focus:text-[hsl(238,40%,52%)] focus:outline-none">
        <MinusIcon className="h-3 w-3 " />
      </button>
    </div>
  );
}

export default function CommentCard({
  user,
  score,
  content,
  createdAt,
  showYouBadge = false,
}: {
  id: string;
  user: {
    image: string;
    username: string;
  };
  score: number;
  content: string;
  createdAt: string;
  showYouBadge: boolean;
  onReplyClicked?: (commentId: string) => void;
  onScoreChange?: (
    commentId: string,
    scoreChangeType: "increment" | "decrement"
  ) => void;
}) {
  return (
    <div className="flex flex-col-reverse items-start rounded-lg bg-white p-5 md:flex-row md:space-x-5">
      <div className="mt-3 flex w-full justify-between md:mt-0 md:w-auto">
        <ScoreInput score={score} />
        <ReplyButton className="md:hidden" />
      </div>
      <div className="flex flex-col space-y-3">
        <div className="flex content-between">
          <div className="flex grow select-none items-center space-x-4">
            <img
              className="w-6"
              src={user.image}
              alt={`${user.username}'s profile`}
            />
            <span className="select-all text-sm font-bold text-gray-700">
              {user.username}
              {showYouBadge && (
                <span className="ml-2 rounded bg-[hsl(238,40%,52%)] px-1 py-[0.1rem] text-xs text-white">
                  you
                </span>
              )}
            </span>

            <span className="text-sm text-[hsl(211,10%,45%)]">{createdAt}</span>
          </div>
          <ReplyButton className="hidden md:flex" />
        </div>
        <p className="text-sm text-[hsl(211,10%,45%)]">{content}</p>
      </div>
    </div>
  );
}
