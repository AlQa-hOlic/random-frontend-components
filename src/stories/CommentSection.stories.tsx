import type { Meta, StoryObj } from "@storybook/react";

import CommentSection from "../components/CommentSection";
import sampleData from "./../assets/challenges/comment-section/data.json";

const meta = {
  title: "Challenge/CommentSection",
  component: CommentSection,
  // tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered",

    backgrounds: {
      default: "gray_bg",
      values: [
        {
          name: "gray_bg",
          value: "hsl(212,45%,89%)",
        },
      ],
    },
    viewport: {
      viewports: {
        desktop: {
          name: "Desktop",
          styles: {
            width: "1440px",
            height: "800px",
          },
        },
        mobile: {
          name: "Mobile",
          styles: {
            width: "375px",
            height: "800px",
          },
        },
      },
    },
  },
} satisfies Meta<typeof CommentSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const mapCommentData = (data: (typeof sampleData.comments)[0]) => {
  let replies: {
    content: string;
    createdAt: string;
    id: string;
    score: number;
    user: { image: string; username: string };
    replyingTo: string;
  }[] = [];
  if (data.replies.length > 0) {
    replies = data.replies.map((reply) => ({
      content: reply.content,
      createdAt: reply.createdAt,
      id: reply.id.toString(),
      score: reply.score,
      user: {
        image: reply.user.image.png,
        username: reply.user.username,
      },
      replyingTo: reply.replyingTo,
    }));
  }

  return {
    content: data.content,
    createdAt: data.createdAt,
    id: data.id.toString(),
    score: data.score,
    user: {
      image: data.user.image.png,
      username: data.user.username,
    },
    replies,
  };
};

export const Default: Story = {
  args: {
    currentUser: sampleData.currentUser.username,
    currentUserImg: sampleData.currentUser.image.png,
    comments: sampleData.comments.map(mapCommentData),
  },
};
