import type { Metadata } from 'next';
import { Ubuntu, Noto_Sans } from 'next/font/google';
import './globals.css';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
});
const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-notoSans',
});

export const metadata: Metadata = {
  title: 'Sitthiphon Skulphan :: Software Developer',
  description: 'personal information and resume website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} ${notoSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
