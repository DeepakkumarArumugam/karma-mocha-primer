// Make sure code styles are up to par and there are no obvious mistakes

module.exports = {

    options: {
        reporter: require('jshint-stylish'),
        node: true,
        browser: true,
        esnext: true,
        bitwise: true,
        camelcase: true,
        curly: true,
        eqeqeq: true,
        immed: true,
        indent: 2,
        latedef: true,
        newcap: true,
        noarg: true,
        quotmark: "single",
        regexp: true,
        undef: true,
        unused: true,
        strict: true,
        trailing: true,
        smarttabs: true,
        globals: {
            angular: false,
            google: false,
            _: true,
            $: false
        }
    },
    all: [
        'Gruntfile.js',
        'app/**/*.js'
    ],
    test: {
        options: {
            jshintrc: 'test/.jshintrc'
        }
    }
};
