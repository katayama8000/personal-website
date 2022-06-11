import "src/lib/tailwind.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Head from "next/head";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
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

      {router.pathname === "/" && (
        <div>
          <hr />
          <div className="p-5 text-center">&copy;2022 katayama8000</div>
        </div>
      )}
    </>
  );
}

export default MyApp;
