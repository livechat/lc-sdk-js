import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import ts from 'rollup-plugin-ts'
import json from '@rollup/plugin-json';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('./package.json')

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    json(),
    ts({
      tsconfig: './tsconfig.json',
      transpiler: 'babel',
      transpileOnly: false,
      browserslist: ['last 5 versions'],
    }),
  ],
}
