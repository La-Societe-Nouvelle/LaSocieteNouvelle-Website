const path = require('path')
const remarkMath = require('remark-math')
const rehypeKatex = require('rehype-katex')
const { default: remarkGfm } = require('remark-gfm')

const createMDX = require('@next/mdx')

/* --- Config Next --- */
const nextConfig = {
  reactStrictMode: false, // Désactivé pour de meilleures performances en développement
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  // Optimisations pour MDX et KaTeX
  experimental: {
    optimizePackageImports: ['react-katex', 'katex', 'chart.js'],
    isrMemoryCacheSize: 0, // Désactive le cache ISR sur disque (fix EROFS en prod)
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
      };

      // Réduire la verbosité des logs
      config.infrastructureLogging = {
        level: 'error',
      };
    }

    return config;
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
      {
        protocol: 'https',
        hostname: 'eu-west-2.graphassets.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400, // Cache images for 24 hours
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

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
          // Optimisation : ne charger que les fontes essentielles
          output: 'html',
        }]
      ],
    },
  },
})

/* --- Export final --- */
module.exports = withMDX(nextConfig)
