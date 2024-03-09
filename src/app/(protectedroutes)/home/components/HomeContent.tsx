'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { SubscribedBoard } from './SubscribedBoard';
import { AddSubscriptionBoard } from './AddSubscriptionBoard';
import { Body2Typo } from '@/components/Typography';

/**
 * ログイントップ/content
 */
const HomeContent: FC = () => {
  const router = useRouter();

  /**
   * サブスク検索ボタンクリック
   */
  const handleSearchSubscriptionClick = (): void => {
    router.push('/search');
  };

  /**
   * サブスクのクリック
   *
   * @param subscriptionId サブスクID
   */
  const handleClickSubscription = (
    subscriptionId: string
  ): void => {
    router.push(`/detail/${subscriptionId}`);
  };

  return (
    <div className="space-y-3">
      <SubscribedBoard />
      <div className="space-y-2">
        <Body2Typo>サブスクを追加</Body2Typo>
        <AddSubscriptionBoard />
      </div>
    </div>
  );
};

export default HomeContent;
