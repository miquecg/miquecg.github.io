module.exports = function(grunt) {

    grunt.config('watch',
        {
            js:
            {
                files: '<%= concat.js.src %>'
              , tasks: ['concat:js']
            }
          , css:
            {
                files: '<%= concat.css.src %>'
              , tasks: ['concat:css']
            }
          , dev:
            {
                options:
                {
                    livereload: true
                  , spawn: false
                }
              , expand: true
              , cwd: '_site/'
              , files: ['<%= concat.css.dest %>', '<%= concat.js.dest %>']
              , tasks: []
            }
        }
    );

};
