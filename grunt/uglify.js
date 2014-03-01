module.exports = function(grunt) {

    grunt.config('uglify',
        {
            dev:
            {
                src: '<%= concat.js.dest %>'
              , dest: 'js/prod.min.js'
            }
        }
    );

};
