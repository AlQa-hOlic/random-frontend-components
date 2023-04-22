import type { Meta, StoryObj } from "@storybook/react";

import CommentSection from "../components/CommentSection";

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

export const Default: Story = {
  args: {},
};
