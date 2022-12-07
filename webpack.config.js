const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WorkboxPlugin = require('workbox-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const path = require('path');

module.exports = (_env, argv) => {
    const isProduction = argv.mode === 'production';
    const isDevelopment = !isProduction;

    const URL_LOADER_SIZE_LIMIT = 8192;
    const PORT_DEVELOPMENT = 8080;

    return {
        // Enables source maps in development mode.
        devtool: isDevelopment && 'source-map',
        target: 'web',
        devServer: {
            hot: true,
            port: PORT_DEVELOPMENT,
            // Opens the browser after launching the dev server.
            open: true,
            // Enables asset compression for faster reloads.
            compress: true,
            // Enables a fallback to index.html for history-based routing.
            historyApiFallback: true,

            static: {
                directory: path.join(__dirname, './'),
            },
        },

        entry: {
            bundle: path.resolve(__dirname, 'src/index.js'),
        },

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'assets/js/[name].[contenthash:8].js',
            publicPath: '/',
        },

        module: {
            rules: [
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            cacheCompression: false,
                            envName: isProduction
                                ? 'production'
                                : 'development',
                        },
                    },
                },
                {
                    test: /\.css$/,
                    use: [
                        isProduction
                            ? MiniCssExtractPlugin.loader
                            : 'style-loader',
                        'css-loader',
                    ],
                },
                {
                    test: /\.module.css$/,
                    use: [
                        isProduction
                            ? MiniCssExtractPlugin.loader
                            : 'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: URL_LOADER_SIZE_LIMIT,
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },
                },
                {
                    // Also performs SVGO
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                },
                {
                    test: /\.(eot|otf|ttf|woff|woff2)$/,
                    loader: require.resolve('file-loader'),
                    options: {
                        name: 'static/media/[name].[hash:8].[ext]',
                    },
                },
                {
                    test: /\.worker\.js$/,
                    loader: 'worker-loader',
                },
            ],
        },

        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },

        plugins: [
            isProduction &&
                new MiniCssExtractPlugin({
                    // Extracts loaded styles into separate files for production use to take advantage of browser caching.
                    filename: 'assets/css/[name].[contenthash:8].css',
                    chunkFilename:
                        'assets/css/[name].[contenthash:8].chunk.css',
                }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(
                    isProduction ? 'production' : 'development'
                ),
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public/index.html'),
                inject: true,
            }),
            new ForkTsCheckerWebpackPlugin({
                // Prevents Webpack from emitting invalid code and showing compilation errors in an overlay when running a development server.
                async: false,
            }),
            // new WorkboxPlugin.GenerateSW({
            //     // Specifies the output filename for the generated worker file.
            //     swDest: 'service-worker.js',
            //     // Instructs the service worker to take control of the page immediately after registration and begin serving cached resources instead of waiting for the next page reload.
            //     clientsClaim: true,
            //     // Makes updates to the service worker take effect immediately instead of waiting for all active instances to be destroyed.
            //     skipWaiting: true,
            // }),
            isDevelopment && new webpack.ProgressPlugin(),
            isDevelopment &&
                new ESLintPlugin({
                    extensions: ['ts', 'tsx', 'js', 'jsx'],
                    fix: false,
                    emitError: true,
                    emitWarning: true,
                    failOnError: true,
                }),
            new Dotenv(),
        ].filter(Boolean),

        optimization: {
            minimize: isProduction,
            minimizer: [
                new TerserWebpackPlugin({
                    terserOptions: {
                        compress: {
                            comparisons: false,
                        },
                        mangle: {
                            safari10: true,
                        },
                        output: {
                            comments: false,
                            ascii_only: true,
                        },
                        warnings: false,
                    },
                }),
                new OptimizeCssAssetsPlugin(),
            ],
            splitChunks: {
                chunks: 'all',
                minSize: 0,
                maxInitialRequests: 20,
                maxAsyncRequests: 20,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name(module, chunks, cacheGroupKey) {
                            const packageName = module.context.match(
                                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                            )[1];
                            return `${cacheGroupKey}.${packageName.replace(
                                '@',
                                ''
                            )}`;
                        },
                    },
                    common: {
                        minChunks: 2,
                        priority: -10,
                    },
                },
            },
            runtimeChunk: 'single',
        },
    };
};
