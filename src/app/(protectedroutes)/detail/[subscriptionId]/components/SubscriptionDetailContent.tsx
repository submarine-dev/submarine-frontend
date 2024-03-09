'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

type Props = {
  subscriptionId: string;
};

/**
 * サブスクリプション詳細/content
 */
const SubscriptionDetailContent: FC<Props> = ({
  subscriptionId,
}) => {
  const router = useRouter();

  /**
   * 戻るボタンクリック
   */
  const handleClickBackScreen = (): void => {
    router.back();
  };

  return (
    <div>
      サブスクID：{subscriptionId}
      <Button onClick={handleClickBackScreen}>戻る</Button>
    </div>
  );
};

export default SubscriptionDetailContent;
