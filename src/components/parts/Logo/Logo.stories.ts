import type { Meta, StoryObj } from "@storybook/react"
import { Logo } from "."

const meta = {
  title: "parts/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    height: 40,
    width: 100,
  },
}
