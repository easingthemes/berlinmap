const webpackConfig = require('../webpack/webpack.test.babel');
const argv = require('minimist')(process.argv.slice(2));
const path = require('path');

module.exports = (config) => {
  config.set({
    frameworks: ['mocha'],
    reporters: ['coverage', 'mocha'],
    browsers: process.env.TRAVIS // eslint-disable-line no-nested-ternary
      ? ['PhantomCustom']
      : process.env.APPVEYOR
        ? ['IE'] : ['PhantomJS'],

    autoWatch: false,
    singleRun: true,

    client: {
      mocha: {
        grep: argv.grep,
      },
    },

    files: [
      {
        pattern: './test-bundler.js',
        watched: false,
        served: true,
        included: true,
      },
    ],

    preprocessors: {
      ['./test-bundler.js']: ['webpack', 'sourcemap'], // eslint-disable-line no-useless-computed-key
    },

    webpack: webpackConfig,

    // make Webpack bundle generation quiet
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only',
    },

    customLaunchers: {
      ChromeTravis: {
        base: 'Chrome',
        flags: ['--no-sandbox'],
      },
      PhantomCustom: {
        base: 'PhantomJS',
        flags: ['--no-sandbox --load-images=false'],
        options: {
          windowName: 'my-window',
          settings: {
            webSecurityEnabled: false,
          },
        },
        debug: false,
      },
    },

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true,
    },

    coverageReporter: {
      dir: path.join(process.cwd(), 'coverage'),
      reporters: [
        { type: 'lcov', subdir: 'lcov' },
        { type: 'html', subdir: 'html' },
        { type: 'text-summary' },
      ],
    },

  });
};
