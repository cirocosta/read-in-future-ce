/** 
 * Here are defined all the tasks to be execute with GruntJS.
 */


/**
 * Importing the GruntJS module
 */

 module.exports = function(grunt) {
    'use strict';
 
    /**
     * Project configuration
     */
    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json'),
        
        uglify: {
            options: {
                mangle: true
            },
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'extension/js',
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
            all: ['extension/**/*.js']
        }
    };
 
    grunt.initConfig(gruntConfig);
 
    /**
     * Inicializacao dos Plugins
     */
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    /**
     * Registro de Tarefas
     */
    grunt.registerTask('default', ['cssmin','jshint','uglify']);
};