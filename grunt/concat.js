module.exports = function(grunt) {

    grunt.config('concat',
        {
            options:
            {
                process: true
              , banner: '/* <%= pkg.name %> '
                      + '<%= grunt.template.today(\'dd-mm-yyyy\') %> */\n'
            }
            // Concat issue with dynamic mappings
            // https://github.com/gruntjs/grunt-contrib-concat/issues/31
          , js:
            {
                src:
                [
                    'src/js/intro.js'
                  , 'src/js/botones-sociales.js'
                  , 'src/js/lib/jquery-1.10.2.js'
                  , 'src/js/comentarios.js'
                  , 'src/js/outro.js'
                ]
              , dest: 'js/dev.js'
            }
          , css:
            {
                src:
                [
                    'src/css/font-face.css'
                  , 'src/css/normalize.css'
                  , 'src/css/plantilla.css'
                  , 'src/css/*.css'
                  , '!src/css/media-queries.css'
                  , 'src/css/media-queries.css'
                ]
              , dest: 'css/dev.css'
            }
        }
    );

};
