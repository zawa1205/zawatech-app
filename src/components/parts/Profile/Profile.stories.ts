import type { Meta, StoryObj } from '@storybook/react'
import { Profile } from '.'

const meta = {
  title: 'parts/Profile',
  component: Profile,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
