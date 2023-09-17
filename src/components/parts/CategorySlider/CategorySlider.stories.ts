import type { Meta, StoryObj } from '@storybook/react'
import { CategorySlider } from '.'

const meta = {
  title: 'parts/CategorySlider',
  component: CategorySlider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CategorySlider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
