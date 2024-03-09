import { FC } from 'react';
import HomeContent from './HomeContent';
import { axiosFn } from '@/lib/axiosFn';

/**
 * ホーム/container
 */
const HomeContainer: FC = async () => {
  const subscriptionsRes = await axiosFn.get(
    '/subscriptions?results=10'
  );
  const listOfSubscriptions =
    subscriptionsRes.data.subscriptionMaster;

  return (
    <HomeContent
      listOfSubscriptions={listOfSubscriptions}
    />
  );
};

export default HomeContainer;
