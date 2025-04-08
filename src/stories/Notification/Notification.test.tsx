import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { test, vi, expect } from 'vitest';
import type { NotificationProps } from './index';
import Notifications from './index';

test('ボタンが正しく動作すること', async () => {
  const handleClick = vi.fn();

  const buttonList: NotificationProps['buttonList'] = [
    {
      label: 'ラベル1',
      onClick: handleClick,
      type: 'primary',
    },
    {
      label: 'ラベル2',
      onClick: handleClick,
      type: 'primary',
    },
    {
      label: 'ラベル3',
      onClick: handleClick,
      type: 'primary',
    },
  ];

  const user = userEvent.setup();

  render(<Notifications title='タイトル' description='説明文' type='information' open onClose={vi.fn()} buttonList={buttonList} />);

  for (const item of buttonList) {
    const button = screen.getByText(item.label);
    await user.click(button as HTMLButtonElement);
  }

  // 合計3回クリックされたか確認
  expect(handleClick).toHaveBeenCalledTimes(3);

  // buttonList?.map(async (item) => {
  //   const button = screen.getByText(item.label);
  //   await user.click(button as HTMLButtonElement);
  //   expect(handleClick).toHaveBeenCalled();
  // });
});
