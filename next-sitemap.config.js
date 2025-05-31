/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.sabindangi1.com.np',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
