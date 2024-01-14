import "~/styles/globals.css";

import { Space_Grotesk } from 'next/font/google';
import { Header } from '~/components/Header';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin-ext'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <div className="bg-zinc-900 text-white min-h-screen">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
