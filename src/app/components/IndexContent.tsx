'use client';

import UnauthenticatedLayout from '@/components/functions/auth/UnauthenticatedLayout';
import { Button } from '@/components/ui/button';
import { login } from '@/lib/firebase/auth';
import Image from 'next/image';
import { FC } from 'react';

/**
 * ログイントップ/content
 */
const IndexContent: FC = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-between">
      <h1 className="text-white text-3xl text-center my-40">
        Submarine
      </h1>
      <UnauthenticatedLayout>
        <Button
          variant="outline"
          onClick={login}
          className="my-10"
        >
          <Image
            src={'/google-icon.png'}
            alt={'google icon'}
            width={20}
            height={20}
          />
          &nbsp;&nbsp; Sign With Google
        </Button>
      </UnauthenticatedLayout>
    </div>
  );
};

export default IndexContent;
