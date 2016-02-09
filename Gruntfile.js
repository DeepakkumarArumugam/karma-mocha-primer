'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);
    require('load-grunt-tasks')(grunt, {
        config: __dirname + '/package.json',
        scope: ['peerDependencies']
    });

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    function loadConfig(path) {
        var glob = require('glob');
        var object = {};
        var key;

        glob.sync('*', {cwd: path}).forEach(function (option) {
            key = option.replace(/\.js$/, '');
            object[key] = require(path + option);
        });

        return object;
    }

    var config = {
        pkg: grunt.file.readJSON('package.json')
    };

    grunt.util._.extend(config, loadConfig(__dirname + '/tasks/options/'));

    // Define the configuration for all the tasks
    grunt.initConfig(config);

    grunt.loadTasks(__dirname + '/tasks');
};