module.exports = function(grunt) {

    // Carga las tareas cuyo nombre sigue el patrón `grunt-*`
    require('load-grunt-tasks')(grunt);

    // Configuración del proyecto
    grunt.initConfig(
        {
            pkg: grunt.file.readJSON('package.json')
        }
    );

    // Configuración de las tareas en archivos separados
    grunt.loadTasks('grunt');

    // Alias para las tareas
    grunt.registerTask('default',
        [
            'testdata'
          , 'concat:js'
          , 'copy:src:dev'
          , 'concurrent'
        ]
    );
    grunt.registerTask('dist',
        [
            'concat:js'
          , 'cssmin'
          , 'uglify'
          , 'copy:src:prod'
          , 'hashres:dist'
          , 'exec:jksrv'
        ]
    );

};
