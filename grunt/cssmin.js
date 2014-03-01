module.exports = function(grunt) {

    grunt.config('cssmin',
        {
            dev:
            {
                src: '<%= concat.css.dest %>'
              , dest: 'css/prod.min.css'
            }
        }
    );

};
