import babel from "rollup-plugin-babel"
import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"
import json from 'rollup-plugin-json';

import pkg from "./package.json"

export default {
  input: "./index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs"
    },
    {
      file: pkg.module,
      format: "es"
    }
  ],
  external: ["react", "styled-components"],
  plugins: [
    json(),
    babel({
      exclude: ['node_modules/**'],
      plugins: ["external-helpers"]
    }),
    resolve(),
    commonjs()
  ]
}
