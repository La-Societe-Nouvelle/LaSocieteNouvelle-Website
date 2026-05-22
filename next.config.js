const path = require('path')
const createMDX = require('@next/mdx')

/* --- Config Next --- */
const nextConfig = {
  reactStrictMode: false, // Désactivé pour de meilleures performances en développement
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  // Optimisations pour MDX et KaTeX
  experimental: {
    optimizePackageImports: ['react-katex', 'katex', 'chart.js']
  },

  // Cache optimisé pour le mode dev
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },

  // Optimisation Webpack pour MDX
  webpack: (config, { dev }) => {
    if (dev) {
      // Cache agressif pour MDX en dev
      config.cache = {
        type: 'filesystem',
        cacheDirectory: path.join(__dirname, '.next/cache/webpack'),
      }

      // Réduire la verbosité des logs
      config.infrastructureLogging = {
        level: 'error',
      }
    }

    return config
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    silenceDeprecations: [
      'legacy-js-api',
      'color-functions',
      'global-builtin',
      'import',
    ],
  },

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'eu-west-2.graphassets.com' },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

module.exports = async () => {
  // Plugins ESM-only -> import() obligatoire
  const [
    { default: remarkMath },
    { default: rehypeKatex },
    { default: remarkGfm },
  ] = await Promise.all([
    import('remark-math'),
    import('rehype-katex'),
    import('remark-gfm'),
  ])

  /* --- Création du wrapper MDX --- */
  const withMDX = createMDX({
    options: {
      mdxOptions: {
        remarkPlugins: [remarkMath, remarkGfm],
        rehypePlugins: [
          [rehypeKatex, {
            strict: false,
            trust: true,
            throwOnError: false,
            output: 'html',
          }],
        ],
      },
    },
  })

  return withMDX(nextConfig)
}
