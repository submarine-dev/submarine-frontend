import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/components/functions/context/auth';

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'submarine',
  description: 'submarine',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <AuthProvider>
          <div className="flex items-center justify-center h-[100vh] bg-gradient-to-t from-[#0B1C31] to-primary">
            <div className="max-w-sm md:max-w-md">
              {children}
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
