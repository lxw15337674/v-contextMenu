import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript2';
export default {
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    alias({
      entries: [
        {
          find: '@', replacement: '../src',
        }
      ]
    }),
    vue({ css: true, compileTemplate: true }),
    typescript({
      tsconfig: 'tsconfig.json',
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    resolve({ extensions: ['.js', '.vue', '.ts'], browser: true, preferBuiltins: true }),
    commonjs(),
  ],
};
