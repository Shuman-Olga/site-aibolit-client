const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const plugins = [
  new MiniCssExtractPlugin({
    filename: "[contenthash].css",
  }),

  new ImageMinimizerPlugin({
    minimizer: [
      {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          // Lossless optimization with custom option
          // Feel free to experiment with options for better result for you
          plugins: [
            // ["imagemin-webp", { quality: 75 }],
            ["gifsicle", { interlaced: true }],
            ["jpegtran", { progressive: true }],
            ["optipng", { optimizationLevel: 5 }],
          ],
        },
      },
      {
        implementation: ImageMinimizerPlugin.svgoMinify,
        options: {
          encodeOptions: {
            // Pass over SVGs multiple times to ensure all optimizations are applied. False by default
            multipass: true,
            plugins: [
              {
                name: "preset-default",
                params: {
                  overrides: {
                    removeViewBox: false,
                    addAttributesToSVGElement: {
                      params: {
                        attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
                      },
                    },
                  },
                },
              },
            ],
          },
        },
      },
    ],
  }),
];

module.exports = merge(common, {
  mode: "production",
  target: "browserslist",
  plugins,
  devtool: false,
  output: {
    filename: "[fullhash].js",
  },
  optimization: {
    usedExports: false,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: false,
          compress: true,
          output: {
            beautify: true,
            comments: false,
          },
        },
        extractComments: false,
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
  },
});
