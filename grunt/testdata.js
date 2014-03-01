module.exports = function(grunt) {

    /*
     * Parsea un archivo externo en formato json y sobreescribe valores del obje-
     * to de configuración cuando las claves de ambos coincidan en el espacio de
     * nombres.
     */
    grunt.registerTask('testdata'
      , 'Sobreescribe valores de la configuración'
      , function(root, path) {
            path || (path = __dirname + '/' + this.name + '.json');
            root || (root = 'pkg');
            if (grunt.file.isFile(path)) {
                var txt = 'Valores en uso';

                (function recursiveMerge(cfg, data) {
                    for (var p in data) {
                        if (cfg.hasOwnProperty(p)) {
                            var cfgValue  = cfg[p]
                              , dataValue = data[p]
                              ;
                            if (typeof cfgValue == 'object'
                                && typeof dataValue == 'object'
                                && Object.prototype.toString.call(cfgValue)
                                    == Object.prototype.toString.call(dataValue)
                               ) {
                                recursiveMerge(cfgValue, dataValue);
                            }
                            else {
                                cfg[p] = dataValue;
                                txt += '\n' + p + ': ' + dataValue;
                            }
                        }
                    }
                })(grunt.config.data[root], grunt.file.readJSON(path));

                grunt.log.writeln(txt);
            }
        }
    );

};
