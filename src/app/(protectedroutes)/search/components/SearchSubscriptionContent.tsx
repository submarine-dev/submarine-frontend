'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

/**
 * ログイントップ/content
 */
const SearchSubscriptionContent: FC = () => {
  const router = useRouter();

  /**
   * 戻るボタンクリック
   */
  const handleClickBackScreen = (): void => {
    router.back();
  };

  return (
    <div>
      <Button onClick={handleClickBackScreen}>戻る</Button>
    </div>
  );
};

export default SearchSubscriptionContent;
