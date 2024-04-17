module.exports = {
  url: 'https://tiffwhite.me',
  domain: 'https://tiffwhite.me',
  siteName: '...tiff is typing',
  siteDescription:
    'hi. nice to meet you.',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: {
    name: 'tiff', // i.e. Lene Saile - page / blog author's name. Must be set.
    avatar: '/favicon.png',
    email: 'bloggy@tiffwhite.me', // i.e. hola@lenesaile.com - email of the author
    website: 'https://www.tiffwhite.me' // i.e. https.://www.lenesaile.com - the personal site of the author
  },
  creator: {
    name: 'tiff', // i.e. Lene Saile - creator's (developer) name.
    email: 'bloggy@tiffwhite.me',
    website: 'https://www.tiffwhite.me',
    social: 'https://appdot.net/@tiff'
  },
  themeColor: '#DD4462', //  Manifest: defines the default theme color for the application
  themeBgColor: '#FBFBFB', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg',
    mastodonProfile: 'https://appdot.net/@tiff'
  },
  pagination: {
    itemsPerPage: 5
  },
  webmentions: {
    fallbackAvatar: '/assets/images/template/logo2.svg'
  },
  details: {
    aria: 'section controls',
    expand: 'expand all',
    collapse: 'collapse all'
  },
  blog: {
    // this is for the rss feed
    name: 'tiff is typing',
    description:
      'this is the personal website of a permanently broken woman.',
    tagSingle: 'Tag',
    tagPlural: 'Tags',
    tagMore: 'More tags:',
    // feed links are looped over in the head.
    feedLinks: [{title: 'Atom Feed', url: '/feed.xml', type: 'application/atom+xml'}],
    pagination: 'Blog',
    paginationPage: 'Page',
    paginationPrevious: 'Previous',
    paginationNext: 'Next'
  },
  navigation: {
    ariaTop: 'Main',
    ariaBottom: 'Complementary',
    ariaSocial: 'Social',
    closedText: 'Menu'
  },
  webmentions: {
    formTitle: 'Have you published a response? Let me know where:',
    buttonValue: 'Send Webmention'
  },
  themeSwitch: {
    title: 'Theme',
    light: 'light',
    dark: 'dark'
  },
  viewRepo: {
    // this is for the view/edit on github link. The value in the package.json will be pulled in.
    allow: false,
    infoText: 'View this page on GitHub'
  },
  easteregg: true
};
