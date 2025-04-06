import type { Meta, StoryObj } from '@storybook/react';
import TextList from './TextList';

const meta: Meta<typeof TextList> = {
  title: 'Components/TextList',
  component: TextList,
  tags: ['autodocs'],
  argTypes: {
    tag: {
      control: 'select',
      options: ['ul', 'ol'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextList>;

export const Default: Story = {
  args: {
    tag: 'ul',
    items: [
      {
        text: '親アイテム1',
        link: { href: 'https://example.com/parent1' },
      },
      {
        text: '親アイテム1',
        link: { href: 'https://example.com/parent1' },
      },
      {
        text: '親アイテム2',
        items: [
          {
            text: '子アイテム2-1',
            items: [
              {
                text: '孫アイテム2-1-1',
              },
            ],
          },
          {
            text: '親アイテム1',
            link: { href: 'https://example.com/parent1' },
          },
          {
            text: '親アイテム1',
            link: { href: 'https://example.com/parent1' },
          },
        ],
      },
    ],
  },
};
