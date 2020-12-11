import { terser } from 'rollup-plugin-terser';
export default {
  input: 'src/wing-fetch.js',
  output: [
    {
      file: 'dist/wing-fetch.js',
      name: 'wing-fetch',
      format: 'umd',
    },
    {
      file: 'dist/wing-fetch.es.js',
      format: 'es',
    },
    {
      file: 'dist/wing-fetch.amd.js',
      format: 'amd',
    },
    {
      file: 'dist/wing-fetch.cjs.js',
      format: 'cjs',
    },
  ],
  plugins: [terser()],
};
