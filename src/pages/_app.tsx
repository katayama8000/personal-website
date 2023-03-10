import 'src/lib/tailwind.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import Head from 'next/head';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    <>
      <Head>
        <title>katayama8000</title>
      </Head>
      <main className="m-auto max-w-4xl" role="main">
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme: 'dark' }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </main>

      {pathname === '/' && (
        <footer>
          <hr />
          <div className="p-5 text-center">&copy;2022 katayama8000</div>
        </footer>
      )}
    </>
  );
}

export default MyApp;
