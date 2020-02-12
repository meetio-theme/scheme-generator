import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import path from "path";

export default {
  input: ["src/index.ts"],
  output: [
    {
      file: path.resolve(`dist/index.js`),
      format: 'iife'
    },
    {
      file: path.resolve(`dist/index.cjs.js`),
      format: 'cjs'
    }
  ],
  plugins: [
    typescript({}),
    resolve({
      mainFields: ["jsnext", "main", "browser"]
    }),
    commonjs(),
    terser()
  ],
  external: ['fs', 'path']
};
