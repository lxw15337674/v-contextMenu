import base from './rollup.base'
import { merge } from 'lodash'
const config = merge(base, {
  input: 'src/main.js',
  output: {
    exports: 'named',
    file: 'dist/main.js',
    format: 'umd',
    name: 'index',
    assetFileNames: "[name]-[hash][extname]",
  }
})
export default config
