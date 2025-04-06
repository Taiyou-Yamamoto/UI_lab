import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['S', 'M', 'L'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    open: true,
    size: 'L',
    onClose: () => alert('閉じるが呼ばれました'),
    children: ['モーダルの中身\nvanilla-extract + dialog モーダルのテスト'],
  },
};
