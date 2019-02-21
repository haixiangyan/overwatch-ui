module.exports = {
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon-chai'],
    client: {
        chai: {
            includeStack: true
        },
        captureConsole: true
    },
    browserConsoleLogOptions: {
        level: 'log',
        format: '%b %T: %m',
        terminal: true
    },
    /**
     * Files containing tests. These will be preprocessed with webpack and
     * then loaded into karma.
     */
    files: [
        'tests/**/*.spec.js',
        'tests/**/*.spec.ts',
    ],
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],
    // web server port
    port: 9876,
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    // singleRun: true,
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    // Coverage reporter
    coverageReporter: {
        dir: './coverage',
        reporters: [{ type: 'lcov', subdir: '.' }, { type: 'text-summary' }]
    }
}