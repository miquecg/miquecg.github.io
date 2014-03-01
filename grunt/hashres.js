module.exports = function(grunt) {

    grunt.config('hashres',
        {
            options:
            {
                fileNameFormat: '${hash}.${name}.${ext}'
            }
          , dist:
            {
                src: ['<%= uglify.dev.dest %>', '<%= cssmin.dev.dest %>']
              , dest: ['_includes/head.html', '_includes/scripts.html']
            }
          , favicons:
            {
                src: '_s3/favicons/*.png'
              , dest: '_includes/favicons.html'
            }
          , fuentes:
            {
                src: 'fuentes/*'
              , dest: 'src/css/font-face.css'
            }
        }
    );

};
