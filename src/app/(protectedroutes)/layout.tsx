import { HeaderComponents } from '@/components/HeaderComponents';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

/**
 * 認証済みルートのレイアウト
 */
const ProtectedRoutesLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="p-3">
        <HeaderComponents />
        {children}
      </div>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          height: '30dvh',
          borderRadius: '0 0 5% 5%',
          zIndex: -1,
        }}
        className="bg-primary max-w-md"
      />
    </div>
  );
};

export default ProtectedRoutesLayout;
