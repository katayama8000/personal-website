import "src/lib/tailwind.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>This is about me</title>
      </Head>
      <main className="m-auto max-w-4xl">
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          emotionOptions={{ key: "mantine", prepend: false }}
          theme={{ colorScheme: "dark" }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </main>
    </>
  );
}

export default MyApp;
