import "~/styles/globals.css";

import { type AppType } from "next/dist/shared/lib/utils";
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin-ext'],
  display: 'swap',
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={spaceGrotesk.className}>
      <Component {...pageProps} />
    </main>
  );

};

export default MyApp;
