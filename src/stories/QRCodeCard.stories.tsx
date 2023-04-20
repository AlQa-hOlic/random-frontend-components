import type { Meta, StoryObj } from "@storybook/react";

function QRCodeCard() {
  return (
    <div className="">
      <img
        src="/images/challenges/qr-code-component/desktop-design.jpg"
        width="100%"
        className="object-cover"
      />
    </div>
  );
}

const meta = {
  title: "Solution/QRCodeCard",
  component: QRCodeCard,
  // tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof QRCodeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
