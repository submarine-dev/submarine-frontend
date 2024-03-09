import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  isGhost?: boolean;
};

/**
 * ボード（白背景の枠）をラップするコンポーネント
 */
export const BoardWrapper: FC<Props> = ({
  children,
  isGhost,
}) => {
  const bgColor = isGhost ? '' : 'bg-white';

  return (
    <div className={`${bgColor} p-3 rounded-md`}>
      {children}
    </div>
  );
};
