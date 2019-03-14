const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SystemBellPlugin = require('system-bell-webpack-plugin');
const {
  BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer');


const pkg = require('./package.json');

const cssRules = [];
const sassRules = [];
const ROOT_PATH = __dirname;

const config = {
  paths: {
    bower: path.join(ROOT_PATH, 'bower_components'),
    dist: path.join(ROOT_PATH, 'dist'),
    src: path.join(ROOT_PATH, 'src'),
    docs: path.join(ROOT_PATH, 'catalog'),
    ghPages: path.join(ROOT_PATH, 'gh-pages')
  },
  filename: pkg.name,
  library: pkg.name
};


const analyzeBundle = new BundleAnalyzerPlugin({
  analyzerMode: 'static',
  reportFilename: 'report.html',
  defaultSizes: 'parsed',
  openAnalyzer: false,
  generateStatsFile: false,
  statsFilename: 'stats.json',
  logLevel: 'info'
});


// https://github.com/webpack-contrib/svg-inline-loader
const svgRules = {
  test: /\.svg$/,
  use: [{
    loader: 'svg-inline-loader',
    options: {
      classPrefix: false,
      idPrefix: false
    }
  }]
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
    ],
    alias: {
      styles: './styles'
    }
  },
  module: {
    rules: [{
      test: /.(js|jsx)$/,
      enforce: 'pre',
      use: 'eslint-loader',
      include: [config.paths.docs, config.paths.src]
    },
    {
      test: /\.md$/,
      use: ['catalog/loader', 'raw-loader']
    },
    {
      test: /\.svg$/,
      use: [{
        loader: 'svg-inline-loader',
        options: {
          classPrefix: false,
          idPrefix: false
        }
      }]
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
  }
};

const siteCommon = {
  plugins: [
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'), // eslint-disable-line global-require
      // template: './catalog/index.ejs',
      inject: false,
      mobile: true,
      title: pkg.name,
      appMountId: 'catalog',
      googleAnalytics: {
        trackingId: 'UA-58422623-3'
      }
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
    // new NpmInstallPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [{
      test: /.(js|jsx)$/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          babelrc: true
        }
      },
      include: [
        config.paths.docs,
        config.paths.src
      ]
    },
    cssRules,
    sassRules
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    open: true,
    host: process.env.HOST,
    port: process.env.PORT,
    stats: 'errors-only'
  }
});


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
    // new ExtractTextPlugin('[name].[chunkhash].css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })

    /* new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({
        resource
      }) => (
        resource
        && resource.indexOf('node_modules') >= 0
        && resource.match(/.(js|jsx)$/)
      )
    }) */
  ],
  module: {
    rules: [
      cssRules,
      sassRules,
      {
        test: /.(js|jsx)$/,
        use: 'babel-loader',
        include: [
          config.paths.docs,
          config.paths.src
        ]
      }
    ]
  }
});


const externals = {
  'react-popper': {
    commonjs: 'react-popper',
    commonjs2: 'react-popper',
    amd: 'ReactPopper',
    root: 'ReactPopper'
  },
  'prop-types': {
    commonjs: 'prop-types',
    commonjs2: 'prop-types',
    amd: 'PropTypes',
    root: 'PropTypes'
  },
  'styled-components': {
    commonjs: 'styled-components',
    commonjs2: 'styled-components',
    amd: 'styled',
    root: 'styled'
  },
  react: {
    commonjs: 'react',
    commonjs2: 'react',
    amd: 'React',
    root: 'React'
  },
  'react-dom': {
    commonjs: 'react-dom',
    commonjs2: 'react-dom',
    amd: 'ReactDOM',
    root: 'ReactDOM'
  }
};

const distCommon = {
  devtool: 'source-map',
  mode: 'production',
  resolve: common.resolve,
  output: {
    path: config.paths.dist,
    libraryExport: 'default',
    libraryTarget: pkg.config.libraryTarget,
    library: pkg.config.library
  },
  entry: config.paths.src,
  externals,
  stats: 'verbose',
  module: {
    rules: [{
      test: /.(js|jsx)$/,
      use: 'babel-loader',
      include: config.paths.src
    }]
  },
  plugins: [
    new SystemBellPlugin(),
    analyzeBundle
  ]
};

const dist = merge(distCommon, {
  output: {
    filename: `${config.filename}.js`
  }
});

const distMin = merge(distCommon, {
  devtool: 'source-map',
  optimization: {
    minimize: true
  },
  output: {
    filename: `${config.filename}.min.js`
  },
  plugins: []
});

// This bundle has styled components.
const distBundle = merge(distMin, {
  devtool: 'source-map',
  output: {
    filename: `${config.filename}.bundle.min.js`
  }
});


module.exports = (env) => {
  process.env.BABEL_ENV = env;
  const targets = {
    dev,
    dist,
    distMin,
    distBundle,
    ghPages
  };
  const c = targets[env] ? targets[env] : common;

  return c;
};
