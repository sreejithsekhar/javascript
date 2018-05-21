const webpackConfig = require('./webpack.config');

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webpack: {
            options: {
                stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
            },
            prod: webpackConfig,
            dev: Object.assign({
                watch: true
            }, webpackConfig)
        },
        eslint: {
            target: ['src/**/*.js']
        }
    });

    grunt.loadNpmTasks("grunt-webpack");
    grunt.loadNpmTasks("grunt-eslint");
}