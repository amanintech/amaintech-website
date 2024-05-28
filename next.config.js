// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          destination: 'https://get.lamatic.ai/', // Your desired destination URL
        },
        {
          source: '/assets/:path*',
          destination: 'https://get.lamatic.ai/assets/:path*', // Rewrite for the assets
        },
        { source: '/docs/:path*',
          destination: 'https://docs.lamatic.ai/:path*', // Rewrite for the assets
        }
        // ... other rewrites you want to apply before file system check
      ],
      afterFiles: [
        // ... rewrites that should occur after checking the file system
      ],
      fallback: [
        // ... rewrites that are applied if no routes match
      ]
    }
  },
  staticPageGenerationTimeout: 300,
  images: {
    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      'pbs.twimg.com',
      'abs.twimg.com',
      's3.us-west-2.amazonaws.com',
      'transitivebullsh.it'
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
});

