'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { SubscribedBoard } from './SubscribedBoard';

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
    <div>
      <SubscribedBoard />
      <Button onClick={handleSearchSubscriptionClick}>
        サブスクを検索
      </Button>
      {[...Array(3)].map((_, index) => {
        return (
          <Button
            /*
             * TODO: 仮置きなのでindexをkeyにしている
             */
            key={index}
            onClick={() =>
              handleClickSubscription(index.toString())
            }
          >
            {index}のサブスク
          </Button>
        );
      })}
    </div>
  );
};

export default HomeContent;
