const path = require("path");

const root = path.dirname(__dirname);

module.exports = {
    index: path.resolve(root, "src", "index.ts"),
    dist: path.resolve(root, "dist"),
    srcDir: path.resolve(root, "src"),
    faviconPath: path.resolve(root, "public", "favicon.ico"),
}
