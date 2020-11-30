'use strict'

module.exports = ctx => ({
  console.log(ctx);
  return {
    map: ctx.file.dirname.includes('examples') ?
      false :
      {
        inline: false,
        annotation: true,
        sourcesContent: true
      },
    plugins: {
      cssnano: {
      cascade: false,
    },
      autoprefixer: {
      cascade: false
      }
    }
  }
});
