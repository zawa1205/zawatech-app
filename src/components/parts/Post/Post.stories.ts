import type { Meta, StoryObj } from '@storybook/react'
import { Post } from '.'

const meta = {
  title: 'parts/Post',
  component: Post,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Post>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Gitlab-CIでビルド時に環境変数CIが原因でエラーになる時の対処法',
    date: '2021-05-02T12:08:19',
  },
}
