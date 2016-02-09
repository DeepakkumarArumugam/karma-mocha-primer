// Enforce JavaScript style guide

module.exports = {
    main: 'app/**/*.js',
    options: {
        preset: 'google',
        verbose: true,
        validateIndentation : 4,
        maximumLineLength: null,
        disallowSpacesInAnonymousFunctionExpression: null,
        disallowSpacesInFunctionExpression: null
    }
};
