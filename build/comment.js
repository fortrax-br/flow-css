'use strict'

import pkg from '../package.json';
const year = new Date().getFullYear();

function getBanner(pluginFilename) {
  return `/*!
  * FlowCss${pluginFilename ? ` ${pluginFilename}` : ''} v${pkg.version} (${pkg.homepage})
  * Copyright 2020-${year} ${pkg.author}
  * Licensed under MIT (https://github.com/fortrax/flowcss/blob/main/LICENSE)
  */`
}

export default getBanner;
