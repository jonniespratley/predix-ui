import * as path from 'path';
import glob from 'glob';
import webpack from 'webpack';
import merge from 'webpack-merge';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import SystemBellPlugin from 'system-bell-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import NpmInstallPlugin from 'npm-install-webpack-plugin';




const pkg = require('./package.json');
const ROOT_PATH = __dirname;

const config = {
  paths: {
    bower: path.join(ROOT_PATH, 'bower_components'),
    dist: path.join(ROOT_PATH, 'dist'),
    src: path.join(ROOT_PATH, 'src'),
    docs: path.join(ROOT_PATH, 'docs'),
    ghPages: path.join(ROOT_PATH, 'gh-pages')
  },
  filename: pkg.name,
  library: pkg.name
};

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const analyzeBundle = new BundleAnalyzerPlugin({
  analyzerMode: 'static',
  reportFilename: 'report.html',
  defaultSizes: 'parsed',
  openAnalyzer: false,
  generateStatsFile: false,
  statsFilename: 'stats.json',
  logLevel: 'info'
});

const extractCss = new ExtractTextPlugin({
	filename: `${pkg.name}-[name].css`,
  allChunks: true
});

const extractSass = new ExtractTextPlugin({
	filename: `${pkg.name}-[name]-[hash].css`,
  allChunks: true
});

const cssRules = {
  test: /\.css$/,
  use: extractCss.extract({
    fallback: 'style-loader',
    //resolve-url-loader may be chained before sass-loader if necessary
    use: [
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true,
          sourceMap: true,
          camelCase: true
        }
      },
      'postcss-loader'
    ]
  })
};

const sassRules = {
  test: /\.s(a|c)ss$/,
  use: extractSass.extract({
    fallback: 'style-loader',
    use: [
      'babel-loader',
      //'raw-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
        //  modules: true,
          sourceMap: true,
          camelCase: true
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          importer: require('node-sass-import-once'),
           importOnce: {
             index: true,
             css: true,
             bower: true
           },
          includePaths: [
            'sass',
            'styles',
            'node_modules'
          ].map((d) => path.join(__dirname, d)).map((g) => glob.sync(g)).reduce((a, c) => a.concat(c), [])
        }
      }
    ]
  })
};

/**
 * common configuration
 */
const common = {
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.css',
      '.scss',
      '.png',
      '.svg',
      '.md'
    ],
    modules: [
      'bower_components',
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: 'eslint-loader',
        include: [
          config.paths.docs,
          config.paths.src
        ]
      },
      {
        test: /\.md$/,
        use: ['catalog/lib/loader', 'raw-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      }
    ]
  },
  plugins: [
    new SystemBellPlugin()
  ]
};


const siteCommon = {
  plugins: [
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'), // eslint-disable-line global-require
      inject: false,
      mobile: true,
      title: pkg.name,
      appMountId: 'app'
    }),
    new webpack.DefinePlugin({
      NAME: JSON.stringify(pkg.name),
      USER: JSON.stringify(pkg.user),
      VERSION: JSON.stringify(pkg.version)
    })
  ]
};


/**
 * dev configuration
 */
const dev = merge(common, siteCommon, {
  devtool: 'eval-source-map',
  entry: {
    docs: [config.paths.docs]
  },
  plugins: [
    //new NpmInstallPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin(),
    extractCss,
    extractSass
  ],
  module: {
    rules: [
      cssRules,
      sassRules,
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        },
        include: [
          config.paths.docs,
          config.paths.src
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    open: true,
    host: process.env.HOST,
    port: process.env.PORT,
    stats: true
  }
});








/**
 * github pages configuration
 */
const ghPages = merge(common, siteCommon, {
  entry: {
    app: config.paths.docs
  },
  output: {
    path: config.paths.ghPages,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js'
  },
  plugins: [
    new CleanWebpackPlugin(['gh-pages'], {
      verbose: false
    }),
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new webpack.DefinePlugin({
        // This affects the react lib size
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => (
        resource &&
        resource.indexOf('node_modules') >= 0 &&
        resource.match(/\.js$/)
      )
    })
  ],
  module: {
    rules: [
      cssRules,
      sassRules,
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [
          config.paths.docs,
          config.paths.src
        ]
      }
    ]
  }
});


/**
 * dist configuration
 * // TODO: Dist build needs to have .css and js
 */
const distCommon = {
  devtool: 'source-map',
  resolve: common.resolve,
  output: {
    path: config.paths.dist,
    libraryTarget: pkg.config.libraryTarget,
    library: pkg.config.library
  },
  entry: config.paths.src,
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: config.paths.src
      },
      cssRules,
      sassRules
    ]
  },
  plugins: [
    new SystemBellPlugin(),
    extractCss,
    extractSass,
    analyzeBundle
  ]
};

const dist = merge(distCommon, {
  output: {
    filename: `${config.filename}.js`
  }
});


const distMin = merge(distCommon, {
  output: {
    filename: `${config.filename}.min.js`
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
});




// TODO: Add in sass plugin and rules
//distCommon.plugins.push(extractCss);





//

module.exports = (env) => {
  process.env.BABEL_ENV = env;

  const targets = {
    dev,
    dist,
    distMin,
    ghPages
  };
  const c = targets[env] ? targets[env] : common;
  console.log('webpack.config', JSON.stringify(c, null, 2));
  return c;
};
