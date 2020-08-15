const path = require("path");

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: "slider.js",
    devtool: "inline-source-map",
    output: {
        filename: "dist.js",
        path: path.resolve(__dirname, "dist"),
        library: "createSlider",
        libraryTarget: "this",
        libraryExport: "default"
    },
    resolve: {
        modules: [path.resolve(__dirname, "src")],
        extensions: [".js"],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: [ "env" ]
                    }
                }]
            },
            {
                test: /\.css$/i,
                exclude: /node-modules/,
                use: [{
                    loader: "style-loader"
                },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[local]_[hash:base64:4]"
                            }
                        }
                    }]
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: "svg-inline-loader"
                }]
            },
        ],
    },
};