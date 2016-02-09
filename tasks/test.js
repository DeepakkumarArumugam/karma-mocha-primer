module.exports = function (grunt) {

    grunt.registerTask('quality', [
        'jshint',
        'jscs'
    ]);

    grunt.registerTask('test', [
        'clean:test',
        'quality',
        'karma'
    ]);
};