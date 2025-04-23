module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      development: {
        files: {
          'dist/css/main.css': 'dev/less/main.less',
        },
      },
    },

    uglify: {
      build: {
        files: {
          'dist/js/main.min.js': ['dev/js/main.js'],
        },
      },
    },

    copy: {
      html: {
        expand: true,
        cwd: 'dev/',
        src: 'index.html',
        dest: 'dist/',
      },
      imagens: {
        expand: true,
        cwd: 'dev/images/',
        src: '**/*.{png,jpg,jpeg,gif,svg}',
        dest: 'dist/images/',
      },
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
        },
        files: {
          'dist/index.html': 'dist/index.html',
        },
      },
    },

    watch: {
      styles: {
        files: ['dev/less/*.less'],
        tasks: ['less'],
      },
      scripts: {
        files: ['dev/js/*.js'],
        tasks: ['uglify'],
      },
      html: {
        files: ['dev/index.html'],
        tasks: ['copy:html', 'htmlmin'],
      },
      imagens: {
        files: ['dev/images/**/*.{png,jpg,jpeg,gif,svg}'],
        tasks: ['copy:imagens'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less', 'uglify', 'copy', 'htmlmin']);
  grunt.registerTask('build', ['less', 'uglify', 'copy:html', 'htmlmin', 'copy:imagens']);
};
