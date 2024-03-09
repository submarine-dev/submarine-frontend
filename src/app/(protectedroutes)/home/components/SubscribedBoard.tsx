import { BoardWrapper } from '@/components/BoardWrapper';
import { BodyTypo, H1 } from '@/components/Typography';
import { ContractedSubscriptionType } from '@/types/ContractedSubscriptionType';
import { FC } from 'react';
import { ContractedSubscriptionsRow } from './SubscribedBoard/ContractedSubscriptionsRow';

type Props = {
  totalPayment: number;
  contractedSubscriptions: ContractedSubscriptionType[];
};

/**
 * 登録されているサブスクと総額を表示するボード
 */
export const SubscribedBoard: FC<Props> = ({
  totalPayment,
  contractedSubscriptions,
}) => {
  return (
    <BoardWrapper>
      <div className="space-y-5">
        <div className="space-y-1">
          <BodyTypo>今月のお支払い</BodyTypo>
          <H1>{totalPayment}円</H1>
        </div>
        <div>
          {contractedSubscriptions.map(
            (contractedSubscription) => (
              <ContractedSubscriptionsRow
                key={contractedSubscription.subscriptionId}
                contractedSubscription={
                  contractedSubscription
                }
              />
            )
          )}
        </div>
      </div>
    </BoardWrapper>
  );
};
