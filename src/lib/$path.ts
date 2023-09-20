export const pagesPath = {
  "about": {
    $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/about' as const, hash: url?.hash })
  },
  "works": {
    $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/works' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
