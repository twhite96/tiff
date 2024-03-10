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
  opengraph_default: '/assets/images/template/opengraph-default.jpg', // fallback/default meta image
  opengraph_default_alt:
    'Visible content: Eleventy starter based on workflow for Cube CSS, Every Layout, Design Tokens and Tailwind for uitility, based on the concepts explained in buildexcellentwebsit.es', // alt text for default meta image
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
  greenweb: {
    // this goues into src/common/greenweb.njk
    providers: {
      // if you want to add more than one, edit the array directly.
      domain: 'netlify.com',
      service: 'cdn'
    },
    credentials: {
      // optional, eg: 	{ domain='my-org.com', doctype = 'webpage', url = 'https://my-org.com/our-climate-record'}
      domain: '',
      doctype: '',
      url: ''
    }
  },
  viewRepo: {
    // this is for the view/edit on github link. The value in the package.json will be pulled in.
    allow: false,
    infoText: 'View this page on GitHub'
  },
  easteregg: true
};
