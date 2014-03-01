        if (widgets) {

            // Google +1
            w.___gcfg = { lang: 'es-ES' };
            carga.add('https://apis.google.com/js/platform.js');

            // Facebook SDK
            w.fbAsyncInit = function() {
                FB.init(
                    {
                        appId  : '<%= pkg.data.fb_app_id %>'
                      , status : false
                      , cookie : false
                      , xfbml  : false
                    }
                );
            };
            carga.add('//connect.facebook.net/es_ES/all.js#xfbml=1'
              , 'facebook-jssdk'
            );

            // Twitter SDK
            carga.add('//platform.twitter.com/widgets.js', 'twitter-wjs');

            // Click para copiar el enlace permanente
            addEventListener(d.getElementsByClassName('permalink')[0], 'click'
              , function(e) {
                    e = e || w.event;
                    e.preventDefault();
                    w.prompt('Enlace permanente al artículo:', this.href);
                }
            );
        }
