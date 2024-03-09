import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

/**
 * ボード（白背景の枠）をラップするコンポーネント
 */
export const BoardWrapper: FC<Props> = ({ children }) => {
  return (
    <div className={`bg-white p-3 rounded-md`}>
      {children}
    </div>
  );
};
