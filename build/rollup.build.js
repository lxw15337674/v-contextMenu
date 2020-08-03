import base from './rollup.base'
import { merge } from 'lodash'
const config = merge(base, {
  input: 'src/index.js',
  plugins: [

  ],
  output: {
    exports: 'named',
    file: 'dist/index.js',
    format: 'umd',
    name: 'index',
    assetFileNames: "[name]-[hash][extname]",
  }
})
export default config
