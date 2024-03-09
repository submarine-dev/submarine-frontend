'use client';

import { FC } from 'react';
import { H2 } from './Typography';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Image from 'next/image';
import demoIconImage from './demoicon.png';
import { usePathname, useRouter } from 'next/navigation';

/**
 * ヘッダー
 */
export const HeaderComponents: FC = () => {
  const router = useRouter();
  const pathName = usePathname();

  /**
   * 戻るボタンクリック
   */
  const handleClickBackScreen = (): void => {
    router.back();
  };

  /**
   * ホーム以外のパスかどうか
   * - ホーム以外の場合にはbackボタンを表示する
   */
  const isNotHomePath = pathName !== '/home';

  return (
    <header className="grid grid-cols-12 justify-center items-center pb-5">
      <button
        onClick={handleClickBackScreen}
        type="button"
        className="col-span-1"
        disabled={!isNotHomePath}
      >
        {isNotHomePath ? (
          <IoMdArrowRoundBack className="p-1 w-full h-full text-white" />
        ) : null}
      </button>
      <div className="col-span-10">
        <H2 isCenter color="white">
          Submarine
        </H2>
      </div>
      <button type="button" className="col-span-1">
        <Image
          src={demoIconImage}
          alt="userIcon"
          width={40}
          height={40}
        />
      </button>
    </header>
  );
};
