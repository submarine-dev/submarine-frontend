'use client';

import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { SubscribedBoard } from './SubscribedBoard';
import { AddSubscriptionBoard } from './AddSubscriptionBoard';
import { Body2Typo } from '@/components/Typography';
import { SubscriptionBaseType } from '@/types/SubscriptionBaseType';
import { axiosFn } from '@/lib/axiosFn';

type Props = {
  listOfSubscriptions: SubscriptionBaseType[];
};

/**
 * ログイントップ/content
 */
const HomeContent: FC<Props> = ({
  listOfSubscriptions,
}) => {
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
        <AddSubscriptionBoard
          listOfSubscriptions={listOfSubscriptions}
        />
      </div>
    </div>
  );
};

export default HomeContent;
