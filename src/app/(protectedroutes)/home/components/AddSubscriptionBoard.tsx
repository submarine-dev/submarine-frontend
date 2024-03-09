import { FC } from 'react';
import demoIconImage from '@/components/demoicon.png';
import { SubscriptionSquare } from '@/components/SubscriptionSquare';
import { SquareContent } from '@/components/SquareContent';
import { IoIosSearch } from 'react-icons/io';
import { getTextColor } from '@/util/getTextColor';

type Props = {};

/**
 * サブスクの検索・追加をするボード
 */
export const AddSubscriptionBoard: FC<Props> = ({}) => {
  return (
    <div className="flex space-x-2 overflow-x-auto">
      <SquareContent
        label={`サブスクを検索`}
        color="#FFFFFF"
        icon={<IoIosSearch size="25px" />}
      />
      {[...Array(5)].map((_, index) => {
        return (
          <SubscriptionSquare
            key={index}
            label="YouTube Premium"
            color="#FF0000"
            iconUrl={demoIconImage}
            index={index}
          />
        );
      })}
    </div>
  );
};
