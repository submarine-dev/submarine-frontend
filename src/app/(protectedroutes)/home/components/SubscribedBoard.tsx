import { BoardWrapper } from '@/components/BoardWrapper';
import { BodyTypo, H1 } from '@/components/Typography';
import { FC } from 'react';

type Props = {};

/**
 * 登録されているサブスクと総額を表示するボード
 */
export const SubscribedBoard: FC<Props> = () => {
  return (
    <BoardWrapper>
      <div className="spacey-2">
        <div className="space-y-1">
          <BodyTypo>今月のお支払い</BodyTypo>
          <H1>23,399円</H1>
        </div>
      </div>
    </BoardWrapper>
  );
};
