module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'requirejs'],

    files: [
      'test-main.js',
      {pattern: '*.js', included: false},
    ],

    browsers: ['FirefoxHeadless'],

    reporters: ['dots', 'coverage'],

    preprocessors: {
      'dependency.js': 'coverage'
    },

    coverageReporter: {
        type : 'html',
        dir : 'coverage/'
    }
  });
};
