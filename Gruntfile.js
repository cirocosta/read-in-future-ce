 module.exports = function(grunt) {
    'use strict';
 
    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json'),
        
        uglify: {
            options: {
                mangle: true
            },
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'extension/src',
                    src: '**/*.js',
                    dest: 'extension/build/js',
                    ext: '.min.js'
                }]
            }
        },

        cssmin : {
            minify: {
                expand: true,
                cwd: 'extension/css',
                src: '**/*.css',
                dest: 'extension/build/css',
                ext: '.min.css'
            }
        },

        jshint: {
            all: [
                'Gruntfile.js',
                'extension/src/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        csslint: {
            options: {
                csslintrc: '.csslintrc',
            },
            strict: {
                src: ['extension/css/**/*.css']
            }
        },

        jasmine: {
            src: 'extension/src/cfuncs_dbutils.js',
            options: {
                specs: "extension/spec/**/*.js"
            }
        }
    };
 
    grunt.initConfig(gruntConfig);
 
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-csslint');

    grunt.registerTask('build', ['cssmin', 'uglify']);
    grunt.registerTask('test', ['jshint', 'csslint', 'jasmine']);
    grunt.registerTask('default', ['test']);
};