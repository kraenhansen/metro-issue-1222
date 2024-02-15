const path = require("path");

module.exports = {
  watchFolders: [
    path.resolve(__dirname, "../my-lib"),
  ],
  resolver: {
    unstable_enableSymlinks: true,
    unstable_enablePackageExports: true,
  }
};
