import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import { SquareContent } from './SquareContent';

type Props = {
  index: number;
  label: string;
  color: `#${string}`;
  iconUrl: string | StaticImageData;
  onClick?: (index: number) => void;
};

/**
 * 四角でサブスクを表示するコンポーネント
 */
export const SubscriptionSquare: FC<Props> = ({
  index,
  label,
  color,
  iconUrl,
  onClick,
}) => {
  return (
    <SquareContent
      index={index}
      label={label}
      color={color}
      icon={
        <Image
          src={iconUrl}
          alt={label}
          width={30}
          height={30}
        />
      }
      onClick={onClick}
    />
  );
};
