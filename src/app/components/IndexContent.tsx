'use client';

import UnauthenticatedLayout from '@/components/functions/auth/UnauthenticatedLayout';
import { Button } from '@/components/ui/button';
import { login } from '@/lib/firebase/auth';
import { FC } from 'react';

/**
 * ログイントップ/content
 */
const IndexContent: FC = () => {
  return (
    <UnauthenticatedLayout>
      <Button onClick={login}>Sign With Google</Button>
    </UnauthenticatedLayout>
  );
};

export default IndexContent;
