'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-sass');

  grunt.initConfig({
    clean: {
      dev: {
        src: ['build/']
      }
    },

    copy: {
      dev: {
        cwd: 'app/',
        src: ['**/*.html', '**/*.css'],
        expand: true,
        dest: 'build/'
      }
    },

    browserify: {
      dev: {
        src: ['app/js/**/*.js'],
        dest: 'build/bundle.js',
        options: {
          transform: ['debowerify']
        }
      }
    },

    sass: {
      dist: {
        files: {
          'app/stylesheet.css': 'app/stylesheet.sass'
        }
      }
    },

    jshint: {
      options: {
        node: true
      },
      src: ['server.js', 'Gruntfile.js', 'test/**.*.js', 'routes/**/*.js', 'app/**/*.js']
    },

    jscs: {

      src: ['server.js', 'Gruntfile.js', 'test/**/*.js', 'routes/**/*.js', 'app/**/*.js'],

      options: {
        config: '.jscsrc'
      }
    },

    simplemocha: {
      src: ['test/**/*.js']
    }
  });

  grunt.registerTask('build:dev', ['sass:dist', 'clean:dev', 'browserify:dev', 'copy:dev']);
  grunt.registerTask('default', ['jshint', 'jscs', 'simplemocha']);
};
