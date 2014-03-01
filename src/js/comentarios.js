        $.fn.exists = function(callback) {
            var args = Array.prototype.slice.call(arguments, 1);
            if (this.length) {
                callback.call(this, args);
            }
            return this;
        };

        // Variables globales Disqus
        w.disqus_identifier = '';
        w.disqus_shortname  = '<%= pkg.data.disqus_shortname %>';
        w.disqus_title      = '';
        w.disqus_url        = '';

        $('.boton-comentarios').exists(function() {
            // Activa el botón de los comentarios
            this
           .toggleClass('off on')
           .prop('disabled', false)
           .attr('aria-disabled', 'false')
           .html('Pulsa para comentar')
           ;

            // Click para cargarlos
            addEventListener(this.get(0), 'click'
              , function() {
                    var params = $('.contador-comentarios').data('disqus');
                    disqus_identifier = params.identifier;
                    disqus_title      = params.title;
                    disqus_url        = params.url;
                    $(this).add('.encabezado-comentarios').slideToggle();
                    $('#disqus_thread')
                   .addClass('bloque-comentarios')
                   .css('outline', 0)
                   .attr('tabindex', -1)
                   .focus()
                   ;
                    carga.add('//<%= pkg.data.disqus_shortname %>'
                      + '.disqus.com/embed.js'
                    );
                }
            );
        });

        // Mostrar número de comentarios
        $('.contador-comentarios').exists(function() {
            var urls  = []
              , elems = {}
              ;

            this.each(function() {
                var lnk = $(this).data('disqus').url;
                urls.push('link:' + lnk);
                elems[lnk] = $(this);
            });

            $.ajax(
                {
                    type: 'GET'
                  , url: 'https://disqus.com/api/3.0/threads/set.jsonp'
                  , data:
                    {
                        api_key: '<%= pkg.data.disqus_api_key %>'
                      , forum: '<%= pkg.data.disqus_shortname %>'
                      , thread: urls
                    }
                  , cache: false
                  , dataType: 'jsonp'
                  , success: function(result) {
                        for (var i in result.response) {
                            var count    = result.response[i].posts
                              , txtAfter = (count == 1)
                                    ? ' comentario'
                                    : ' comentarios'
                              ;
                            if (count) {
                                var el = elems[result.response[i].link]
                                  , txtBefore = el.data('text') || ''
                                  ;
                                el.html(txtBefore + count + txtAfter);
                            }
                        }
                    }
                }
            );
        });
