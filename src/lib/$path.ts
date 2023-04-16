export const pagesPath = {
  about: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/about' as const,
      hash: url?.hash,
    }),
  },
  works: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/works' as const,
      hash: url?.hash,
    }),
  },
  $url: (url?: { hash?: string }) => ({
    pathname: '/' as const,
    hash: url?.hash,
  }),
};

export type PagesPath = typeof pagesPath;
