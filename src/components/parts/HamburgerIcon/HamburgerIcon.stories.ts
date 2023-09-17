import type { Meta, StoryObj } from '@storybook/react'
import { HamburgerIcon } from '.'

const meta = {
  title: 'parts/HamburgerIcon',
  component: HamburgerIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HamburgerIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    onClickHandler: () => alert('clicked'),
  },
}
