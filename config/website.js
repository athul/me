const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Athul Cyriac Ajay', // Navigation and Site Title
  siteTitleAlt: 'Athul Cyrica Ajay', // Alternative Site title for SEO
  siteTitleShort: 'Athul C Ajay', // short_name for manifest
  siteHeadline: 'Build something new Everyday', // Headline for schema.org JSONLD
  siteUrl: 'https://athulcyriac.me', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: 'https://avatar.tobi.sh/Athul-CA.svg?text=ACA', // Used for SEO and manifest
  siteDescription: 'Ada Mwone...ith Kand Nokk',
  author: 'Athul-CA', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  /*   userTwitter: '@cara', // Twitter Username
  ogSiteName: 'cara', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5', */

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
