module.exports = function (grunt) {
  grunt.initConfig({
    uncss: {
      dist: {
        files: [
          {
            nonull: true,
            src: ["http://localhost:8000/"],
            dest: "static/css/opt.css",
          },
        ],
      },
      options: {
        ignoreSheets: [/fonts.googleapis/, /cdn.jsdelivr.net/],
        stylesheets: [
          "/static/css/style.css",
          "/static/css/coloring.css",
          "/static/css/colors/scheme-01.css",
          "/static/css/bootstrap-reboot.min.css",
          "/static/css/bootstrap-grid.min.css",
          "/static/css/bootstrap.min.css",
          "/static/css/jquery.countdown.css",
          "/static/css/magnific-popup.css",
          "/static/css/owl.transitions.css",
          "/static/css/owl.theme.css",
          "/static/css/owl.carousel.css",
          "/static/css/animate.css",
        ],
        report: "gzip",
      },
    },
    uglify: {
      dev: {
        options: {
          mangle: {
            reserved: ["jQuery"],
          },
        },
        files: [
          {
            expand: true,
            src: ["/static/js/*.js", "!/static/js/*.min.js"],
            dest: "/static",
            cwd: ".",
            rename: function (dst, src) {
              // To keep the source js files and make new files as `*.min.js`:
              // return dst + '/' + src.replace('.js', '.min.js');
              // Or to override to src:
              return src;
            },
          },
        ],
      },
    },
  });

  // Load the plugins
  grunt.loadNpmTasks("grunt-uncss");

  grunt.loadNpmTasks("grunt-contrib-uglify");

  // Default tasks.
  grunt.registerTask("default", ["uncss"]);
};
