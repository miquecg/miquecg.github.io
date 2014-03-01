module.exports = function(grunt) {

    grunt.config('concurrent',
        {
            options:
            {
                logConcurrentOutput: true
            }
          , jekyll: ['watch', 'exec:jkdev']
        }
    );

};
