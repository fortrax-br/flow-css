import path from 'path';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import banner from './comment';

const BUNDLE = process.env.BUNDLE === 'true';
const ESM = process.env.ESM === 'true';
let fileDest = `flowcss${ESM ? '.esm' : ''}`;

const plugins = [
  babel({
    exclude: 'node_modules/**',
    babelHelpers: 'bundled'
  }),
]
if (BUNDLE) `${fileDest}.bundle`;

const rollupConfig = {
  input: path.resolve(__dirname, `../src/js/index.${ESM ? 'esm' : 'umd'}.js`),
  output: [
    {
      banner,
      name: 'flowcss',
      file: path.resolve(__dirname, `../dist/js/${fileDest}.js`),
      format: ESM ? 'esm' : 'umd',
    },
    {
      banner,
      file: path.resolve(__dirname, `../dist/js/${fileDest}.min.js`),
      name: 'flowcss',
      format: 'umd',
      comment: 'all',
      plugins: [terser()]
    }
  ],
  plugins
}

export default rollupConfig;
