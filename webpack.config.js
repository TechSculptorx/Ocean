const path = require("path");

module.exports = {
  entry: "./src/app.js",
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      // images
      {
        test: /\.(jpg|png|gif|svg)$/,
        // use: ["file-loader"],
        type: "asset/resource",
        generator: {
          filename: "img/[name][hash][ext][query]",
        },
      },
      // Shaders
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: ["raw-loader"],
      },
    ],
  },
};
