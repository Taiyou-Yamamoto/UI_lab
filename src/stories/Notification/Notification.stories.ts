import type { Meta, StoryObj } from '@storybook/react';
import Notification from './index';

const meta: Meta<typeof Notification> = {
  title: 'Components/Notification',
  component: Notification,
  tags: ['autodocs'],
  args: {
    open: true,
    onClose: () => alert('閉じるボタンが押されました'),
    title: 'これは通知です',
    description: '説明文がここに入ります。',
    link: { href: '#', target: '_blank', rel: 'noopener noreferrer' },
    linkText: '詳しくはこちら',
  },
};
export default meta;

type Story = StoryObj<typeof Notification>;

export const Information: Story = {
  args: {
    type: 'information',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
  },
};

export const Danger: Story = {
  args: {
    type: 'danger',
  },
};

export const WithButtons: Story = {
  args: {
    type: 'information',
    buttonList: [
      {
        label: 'OK',
        onClick: () => alert('OK押された'),
        type: 'primary',
      },
      {
        label: 'Cancel',
        onClick: () => alert('Cancel押された'),
        type: 'secondary',
      },
    ],
  },
};
