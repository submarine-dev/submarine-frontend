'use client';

import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { SubscribedBoard } from './SubscribedBoard';
import { AddSubscriptionBoard } from './AddSubscriptionBoard';
import { Body2Typo } from '@/components/Typography';
import { SubscriptionBaseType } from '@/types/SubscriptionBaseType';
import { axiosFn } from '@/lib/axiosFn';

/**
 * ログイントップ/content
 */
const HomeContent: FC = () => {
  const router = useRouter();
  const [listOfSubscriptions, setListOfSubscriptions] =
    useState<SubscriptionBaseType[]>([]);

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

  /**
   * 初回実行
   * - サブスクリストを取得
   */
  useEffect(() => {
    (async () => {
      const res = await axiosFn.get(
        '/subscriptions?results=10'
      );
      const newSubscriptions = res.data.subscriptionMaster;
      setListOfSubscriptions(newSubscriptions);
    })();
  }, []);

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
