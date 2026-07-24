import type { Meta, StoryObj } from "@storybook/react-vite";
import { Hero } from "./Hero";

const meta = {
  title: "Example/Hero",
  component: Hero,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    // Pass any required props for Hero here
  },
};
