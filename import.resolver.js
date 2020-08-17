const path = require("path");
const appRootDir = require("app-root-dir");

const srcPath = path.resolve(appRootDir.get(), "./src") + "/";
const subPaths = [
  "components",
  "constants",
  "contexts",
  "hooks",
  "routes",
  "styles",
  "utils",
];
const alias = subPaths.reduce(
  (accummulator, subPath) => ({
    ...accummulator,
    [`@${subPath}`]: `${srcPath}${subPath}`,
  }),
  {}
);

module.exports = {
  resolve: {
    modules: ["node_modules"],
    extensions: ["*", ".js", ".jsx"],
    alias,
  },
};
