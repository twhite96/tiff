const dayjs = require('dayjs');
const CleanCSS = require('clean-css');
const site = require('../../src/_data/meta');
const {throwIfNotType} = require('../utils');
const esbuild = require('esbuild');

/** Removes all tags from an HTML string. */
const stripHtml = str => {
  throwIfNotType(str, 'string');
  return str.replace(/<[^>]+>/g, '');
};

/** Formats the given string as an absolute url. */
const toAbsoluteUrl = url => {
  throwIfNotType(url, 'string');
  // Replace trailing slash, e.g., site.com/ => site.com
  const siteUrl = site.url.replace(/\/$/, '');
  // Replace starting slash, e.g., /path/ => path/
  const relativeUrl = url.replace(/^\//, '');

  return `${siteUrl}/${relativeUrl}`;
};

/** Converts the given date string to ISO8610 format. */
const toISOString = dateString => dayjs(dateString).toISOString();

/** Formats a date using dayjs's conventions: https://day.js.org/docs/en/display/format */
const formatDate = (date, format) => dayjs(date).format(format);

const minifyCss = code => new CleanCSS({}).minify(code).styles;

const minifyJs = async (code, ...rest) => {
  const callback = rest.pop();
  const cacheKey = rest.length > 0 ? rest[0] : null;

  try {
    if (cacheKey && jsminCache.hasOwnProperty(cacheKey)) {
      const cacheValue = await Promise.resolve(jsminCache[cacheKey]); // Wait for the data, wrapped in a resolved promise in case the original value already was resolved
      callback(null, cacheValue.code); // Access the code property of the cached value
    } else {
      const minified = esbuild.transform(code, {
        minify: true
      });
      if (cacheKey) {
        jsminCache[cacheKey] = minified; // Store the promise which has the minified output (an object with a code property)
      }
      callback(null, (await minified).code); // Await and use the return value in the callback
    }
  } catch (err) {
    console.error('jsmin error: ', err);
    callback(null, code); // Fail gracefully.
  }
};

// source: https://github.com/bnijenhuis/bnijenhuis-nl/blob/main/.eleventy.js
const splitlines = (input, maxCharLength) => {
  const parts = input.split(' ');
  const lines = parts.reduce(function (acc, cur) {
    if (!acc.length) {
      return [cur];
    }

    let lastOne = acc[acc.length - 1];

    if (lastOne.length + cur.length > maxCharLength) {
      return [...acc, cur];
    }

    acc[acc.length - 1] = lastOne + ' ' + cur;

    return acc;
  }, []);

  return lines;
};

const getWebmentionsForUrl = (webmentions, url) => {
  return webmentions.children.filter(entry => entry['wm-target'] === url);
};

const webmentionSize = mentions => {
  return !mentions ? 0 : mentions.length;
};


const webmentionsByType = (mentions, mentionType) => {
  return mentions.filter(entry => !!entry[mentionType]);
};

const isOwnWebmention = webmention => {
  const urls = [
    'https://www.tiffwhite.me',
    'https://appdot.net/@tiff'
  ];
  const authorUrl = webmention.author ? webmention.author.url : false;
  // check if a given URL is part of this site.
  return authorUrl && urls.includes(authorUrl);
};

const sortWebmentions = mentions => {
  return mentions.sort((a, b) => {
    if (a['published'] < b['published']) {
      return -1;
    }
    if (a['published'] > b['published']) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });
};

const shuffle = arr => {
  let m = arr.length,
    t,
    i

  while (m) {
    i = Math.floor(Math.random() * m--)
    t = arr[m]
    arr[m] = arr[i]
    arr[i] = t
  }

  return arr
};


module.exports = {
  toISOString,
  formatDate,
  toAbsoluteUrl,
  stripHtml,
  minifyCss,
  minifyJs,
  splitlines,
  getWebmentionsForUrl,
  webmentionSize,
  webmentionsByType,
  isOwnWebmention,
  sortWebmentions,
  shuffle
};
