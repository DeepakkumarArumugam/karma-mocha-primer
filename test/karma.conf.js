'use strict';

module.exports = function (config) {

    config.set({
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // base path, that will be used to resolve files and exclude
        basePath: '../',

        // increase timeout
        //browserNoActivityTimeout: 100000,

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['mocha', 'chai'],

        // list of files / patterns to load in the browser
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-route/angular-route.js',
            'node_modules/angular-resource/angular-resource.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'app/**/*.js',
            'test/**/*.js'
        ],

        // list of files / patterns to exclude
        exclude: [
            'test/reports/**/*'
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'app/**/*.js': ['coverage']
        },

        reporters: ['mocha', 'html', 'coverage', 'junit'],

        coverageReporter: {
            reporters: [
                {type: 'cobertura', dir: 'test/reports/coverage/cobertura'},
                {type: 'html', dir: 'test/reports/coverage/html'}
            ]
        },

        // web server port
        port: Math.floor(Math.random() * (9999 - 9000 + 1)) + 9000,

        htmlReporter: {
            outputFile: 'test/reports/quality/html/results.html'
        },

        junitReporter: {
            outputFile: 'test/reports/quality/surefire/results.xml',
            suite: ''
        },

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: [
            'PhantomJS'
            //'Chrome'
        ],

        // Which plugins to enable
        plugins: [
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-mocha',
            'karma-chai',
            'karma-coverage',
            'karma-junit-reporter',
            'karma-coverage',
            'karma-mocha-reporter',
            'karma-htmlfile-reporter'
        ],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true,

        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO
    });
};
