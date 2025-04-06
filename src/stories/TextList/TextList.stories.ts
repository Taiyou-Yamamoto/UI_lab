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

const ulItems = [
  {
    text: '親アイテム1',
    link: { href: 'https://example.com/parent1' },
  },
  {
    text: '親アイテム2',
    link: { href: 'https://example.com/parent1' },
    items: [
      {
        text: '子アイテム',
        link: { href: 'https://example.com/parent1' },
      },
      {
        text: '子アイテム',
      },
      {
        items: [
          {
            text: '孫アイテム2-1-1',
          },
          {
            text: '孫アイテム2-1-1',
            link: { href: 'https://example.com/parent1' },
          },
          {
            text: '孫アイテム2-1-1',
            link: { href: 'https://example.com/parent1' },
          },
        ],
        text: '親アイテム1親アイテム1親アイテム1親アイテム1親アイテム1親アイテム1親アイテム1親アイテム1親アイテム1親アイテム1親アイテム1',
        link: { href: 'https://example.com/parent1' },
      },
    ],
  },
  {
    text: '親アイテム3',
  },
];

export const Default: Story = {
  args: {
    tag: 'ul',
    items: ulItems,
  },
};
export const ol: Story = {
  args: {
    tag: 'ol',
    items: ulItems,
  },
};
