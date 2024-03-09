import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';

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
        <div className="flex items-center justify-center">
          <div className="max-w-md">{children}</div>
        </div>
      </body>
    </html>
  );
}
