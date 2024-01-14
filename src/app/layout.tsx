import "~/styles/globals.css";

import { Space_Grotesk } from 'next/font/google';
import { Header } from '~/components/Header';
import { cn } from '~/lib/util';

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
      <body className={cn(spaceGrotesk.className, "bg-zinc-900")}>
        <div className=" text-white min-h-screen overscroll-">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
