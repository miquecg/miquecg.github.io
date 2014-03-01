module.exports = function(grunt) {

    grunt.config('exec',
        {
            jkdev: 'jekyll serve -w --config _config.yml,_config-dev.yml'
          , jksrv: 'jekyll serve'
        }
    );

};
