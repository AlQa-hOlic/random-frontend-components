import { useLayoutEffect, useRef, useState } from "react";

import { ReactComponent as MinusIcon } from "../../assets/challenges/comment-section/assets/icon-minus.svg";
import { ReactComponent as PlusIcon } from "../../assets/challenges/comment-section/assets/icon-plus.svg";
import { ReactComponent as ReplyIcon } from "../../assets/challenges/comment-section/assets/icon-reply.svg";

function ReplyButton({
  className = "",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex select-none items-center space-x-1 rounded p-2 focus:bg-[hsl(239,57%,95%)] focus:outline-none focus:ring-1 focus:ring-[hsla(238,40%,52%,0.2)] ${className}`}
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
  currentUser,
  currentUserImg,
  replyingTo,
  isOwner = false,
}: {
  id: string;
  user: {
    image: string;
    username: string;
  };
  score: number;
  content: string;
  createdAt: string;
  isOwner?: boolean;
  currentUser: string;
  currentUserImg: string;
  replyingTo?: string;
  onReplyClicked?: (commentId: string) => void;
  onScoreChange?: (
    commentId: string,
    scoreChangeType: "increment" | "decrement"
  ) => void;
}) {
  const commentContainerRef = useRef<HTMLDivElement>(null);
  const [replyContent, setReplyContent] = useState("");
  const [replyTextareaIsShown, setReplyTextareaShown] = useState(false);
  const showReplyTextarea = () => {
    setReplyTextareaShown(!replyTextareaIsShown);
  };

  useLayoutEffect(() => {
    const el = commentContainerRef.current?.querySelector<HTMLTextAreaElement>(
      'textarea[name="reply-textarea"]'
    );

    if (!el) return;

    el.focus();
    el.setSelectionRange(-1, -1);
  }, [replyTextareaIsShown]);

  return (
    <div ref={commentContainerRef} className="space-y-3">
      <div className="flex flex-col-reverse items-start rounded-lg bg-white p-5 md:flex-row md:space-x-5">
        <div className="mt-3 flex w-full justify-between md:mt-0 md:w-auto">
          <ScoreInput score={score} />
          {!isOwner && (
            <ReplyButton className="md:hidden" onClick={showReplyTextarea} />
          )}
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
                {isOwner && (
                  <span className="ml-2 rounded bg-[hsl(238,40%,52%)] px-1 py-[0.1rem] text-xs text-white">
                    you
                  </span>
                )}
              </span>

              <span className="text-sm text-[hsl(211,10%,45%)]">
                {createdAt}
              </span>
            </div>
            {!isOwner && (
              <ReplyButton
                className="hidden md:flex"
                onClick={showReplyTextarea}
              />
            )}
          </div>
          <p className="text-sm text-[hsl(211,10%,45%)]">
            <span className="mr-1 font-semibold text-[hsl(238,40%,52%)]">
              @{replyingTo}
            </span>
            {content}
          </p>
        </div>
      </div>
      {replyTextareaIsShown && (
        <div className="flex flex-row items-start space-x-3 rounded-lg bg-white p-4">
          <img
            className="w-6"
            src={currentUserImg}
            alt={`${currentUser}'s profile`}
          />
          <div className="flex grow flex-col items-start gap-3 md:flex-row">
            <textarea
              placeholder="Add a comment"
              className="w-full grow rounded-lg border border-[hsl(211,10%,45%)] border-opacity-20 px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-[hsla(238,40%,52%,0.5)]"
              rows={3}
              value={`@${user.username} ` + replyContent}
              onChange={(e) =>
                setReplyContent(
                  e.target.value.substring(`@${user.username} `.length)
                )
              }
              name="reply-textarea"
            ></textarea>
            <button className=" select-none rounded bg-[hsl(238,40%,52%)] px-3 py-2 text-sm uppercase text-white focus:outline-none focus:ring-1 focus:ring-[hsla(238,40%,52%,0.5)]">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
