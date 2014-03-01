module.exports = function(grunt) {

    grunt.config('copy',
        {
            options:
            {
                process: function(content, srcpath) {
                    var target =
                        {
                            dev: 'src'
                          , prod: 'dest'
                        }
                      , arg = target[grunt.task.current.args[0]]
                      , file =
                        {
                            js: '<%= uglify.dev.' + arg + ' %>'
                          , css: '<%= cssmin.dev.' + arg + ' %>'
                        };
                    grunt.config('file', file);
                    return grunt.template.process(content);
                }
            }
          , src:
            {
                expand: true
              , flatten: true
              , src: 'src/html/*.html'
              , dest: '_includes/'
            }
        }
    );

};
