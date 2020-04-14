const presetEnv = require( "@babel/preset-env");
const presetTypescript = require( "@babel/preset-typescript");
const presetReact = require( "@babel/preset-react");


module.exports= (api, options) => {
  // Don't cache at all. Not recommended because it will be very slow.
  api.cache(false);
  return {
    presets: [
      [presetEnv, { targets: { node: "current" }, ...options }],
      [presetTypescript, {}],
      [presetReact, {}]
    ]
  };
};
