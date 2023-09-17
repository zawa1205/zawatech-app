import type { Meta, StoryObj } from '@storybook/react'
import { SearchInput } from '.'

const meta = {
  title: 'parts/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SearchInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
