const slugify = require('slugify');

/** Converts string to a slug form. */
const slugifyString = str => {
  return slugify(str, {
    replacement: '-',
    remove: /[#,&,+()$~%.'":*¿?¡!<>{}]/g,
    lower: true
  });
};

const Icon = (iconName, useInline = false) => {
  const spriteUrl = '/assets/icons/icons.sprite.svg'
  const iconId = `#icon-${iconName}`
  const href = useInline ? iconId : spriteUrl + iconId

  const output = `<svg class="icon icon--${iconName}" role="img" aria-hidden="true" width="24" height="24">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="${href}"></use>
    </svg>`

  return minify(output)
}

/** throw an error if the provided argument is not of the expected. */
const throwIfNotType = (arg, expectedType) => {
  if (typeof arg !== expectedType) {
    throw new Error(
      `Expected argument of type ${expectedType} but instead got ${arg} (${typeof arg})`
    );
  }
};

module.exports = {
  slugifyString,
  throwIfNotType,
  Icon
};
