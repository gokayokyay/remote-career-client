const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://remotecareer.org',
  ignoredPaths: ['admin'],
  pagesDirectory: `${__dirname}/pages`,
  targetDirectory: `${__dirname}/public`,
  nextConfigPath: `${__dirname}/next.config.js`,
  ignoredExtensions: ['png', 'jpg'],
  pagesConfig: {
    '/': {
      priority: '0.5',
      changefreq: 'daily',
    },
  },
});
