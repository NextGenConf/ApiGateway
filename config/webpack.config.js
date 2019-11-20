const paths = require("./paths");

module.exports = (env, argv) => {
    const developerMode = argv.mode === "development";

    return {
        entry: paths.index,
        devtool: developerMode ? "inline-source-map" : "none",
        output: {
            path: paths.dist,
            filename: "bundle.js",
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    include: [paths.srcDir],
                },
            ],
        },
        devServer: {
            port: 3000,
        },
    };
}
