'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

/**
 * ログイントップ/content
 */
const IndexContent: FC = () => {
  const router = useRouter();

  /**
   * Googleログインボタンクリック
   */
  const handleSignButtonClick = (): void => {
    router.push('/home');
  };

  return (
    <div>
      <Button onClick={handleSignButtonClick}>
        Sign With Google
      </Button>
    </div>
  );
};

export default IndexContent;
