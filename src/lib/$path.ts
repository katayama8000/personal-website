export const pagesPath = {
  "works": {
    $url: (url?: { hash?: string }) => ({ pathname: '/works' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
