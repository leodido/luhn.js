'use strict'

import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  format: 'umd',
  moduleName: 'luhn',
  moduleId: 'luhn',
  sourceMap: true,
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ],
  dest: 'lib/index.js'
}
