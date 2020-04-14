import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-pnp-resolve";
import nodeResolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import json from "rollup-plugin-json";
import postcss from "rollup-plugin-postcss";

export const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default function config() {
  const baseConfig = {
    input: "./src/index.tsx",
    // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
    // https://rollupjs.org/guide/en#external-e-external
   
    plugins: [
      // Allows node resolution
      nodeResolve({ extensions, mainFields: ["module"] }),
      // Allows pnp resolution
      resolve({ extensions }),
      // Compile TypeScript/JavaScript files
      babel({ extensions }),
      // Allow bundling cjs modules. Rollup doesn't understand cjs
      commonjs({
        extensions,
        namedExports: {
          // left-hand side can be an absolute path, a path
          // relative to the current directory, or the name
          // of a module in node_modules
          react: ["Children", "Component", "PropTypes", "createElement"],
          "react-dom": ["render"],
          "react-dom/server": ["renderToStaticMarkup", "renderToString"]
          // '../../../.pnp/externals/pnp-3de468307fafbcfa21f7f2ebda4d84f9c5ad43da/node_modules/react-dom/server.js': ['render','renderToStaticMarkup','renderToString']
        }
      }),
      // Parse json files when needed
      json(),
      // Deal with css
      postcss({
        extract: false,
        inject: true
      })
    ],
    output: [
      {
        dir: "lib",
        entryFileNames: "[name].cjs.js",
        chunkFileNames: "[name]-[hash].cjs.js",
        format: "cjs",
        globals: {
          cesium: "Cesium",
          "@babel/runtime": "7.6.3"
        }
      },
      {
        dir: "lib",
        entryFileNames: "[name].esm.js",
        chunkFileNames: "[name]-[hash].esm.js",
        format: "es",
        globals: {
          cesium: "Cesium",
          "@babel/runtime": "7.6.3"
        }
      }
    ]
  };
  return  baseConfig;
}
