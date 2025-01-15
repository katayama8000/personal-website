import '@mantine/core/styles.css';
import 'src/lib/tailwind.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { usePathname } from 'next/navigation';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const pathname = usePathname();
  return (
    <>
      <Head>
        <title>katayama8000</title>
        <link rel='icon' type='image/png' href='/img/icon/icon0.png' />
      </Head>
      <main className='m-auto max-w-4xl'>
        <Analytics />
        <SpeedInsights />
        <MantineProvider defaultColorScheme='dark'>
          <Component {...pageProps} />
        </MantineProvider>
      </main>
      {pathname === '/' && (
        <footer>
          <hr />
          <div className='p-5 text-center'>&copy;2025 katayama8000</div>
        </footer>
      )}
    </>
  );
};

export default MyApp;
