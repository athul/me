const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Athul Cyriac Ajay', // Navigation and Site Title
  siteTitleAlt: 'Athul Cyrica Ajay', // Alternative Site title for SEO
  siteTitleShort: 'Athul C Ajay', // short_name for manifest
  siteHeadline: 'Build something new Everyday', // Headline for schema.org JSONLD
  siteUrl: 'https://athulcyriac.co', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: 'https://avatars2.githubusercontent.com/u/40897573?v=2', // Used for SEO and manifest
  siteDescription: 'Ada Mwone..ith Kand Nokk, This is Athul Cyriac\'s personal website. ',
  author: 'Athul Cyriac Ajay', // Author for schema.org JSONLD

  userTwitter: '@athulcajay', // Twitter Username

  // Manifest and Progress color
  themeColor: tailwind.colors["green-lighter"],
  backgroundColor: tailwind.colors["yellow-lighter"],
}
