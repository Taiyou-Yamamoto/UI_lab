// List.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import List from './List';

const meta: Meta<typeof List> = {
  component: List,
  title: 'Components/List',
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    items: ['最初の項目', '2番目の項目', '3番目の項目'],
  },
};
