import path from 'path';
import {readFileSync} from 'fs';
import node from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import replace from 'rollup-plugin-replace';

let pkg = JSON.parse(readFileSync(path.resolve(__dirname, 'package.json')));

let entry = 'src/social-share.js';

if (process.env.NODE_ENV === 'development') {
  entry = 'src/social-share.test.js'
}

export default {
  entry,
  dest: 'bundle/social-share.umd.js',
  format: 'umd',
  moduleName: 'social-share',
  context: 'this',
  plugins: [
    node(),
    typescript(),
    replace({
      exclude: ['node_modules/**'],
    })
  ],
  external: Object.keys(pkg.devDependencies),
}
