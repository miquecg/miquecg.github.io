/*
 * Créditos:
 * - http://stackoverflow.com/a/5411130
 * - http://stackoverflow.com/a/1600228
 * - https://gist.github.com/necolas/1025811
 * - http://www.aaronpeters.nl/blog/why-loading-third-party-scripts-async-is-not-good-enough
 * - http://css-tricks.com/snippets/jquery/check-if-element-exists/
 */

(function(w, d, s) {
    var widgets = (/^\/$|articulos\/(?!$|pag\/)/).test(location.pathname)
      , addEventListener = (function() {
            if(d.addEventListener) {
                return function(el, ev, fn) {
                    el.addEventListener(ev, fn, false);
                };
            }
            else {
                return function(el, ev, fn) {
                    el.attachEvent('on' + ev, fn);
                };
            }
        }())
      , carga = (function() {
            var js
              , fjs = d.getElementsByTagName(s)[0]
              , add = function(url, id) {
                    if (d.getElementById(id)) { return; }
                    js = d.createElement(s);
                    js.src = url;
                    id && (js.id = id);
                    fjs.parentNode.insertBefore(js, fjs);
                }
              ;
            return { add: add };
        })()
      ;

    addEventListener(w, 'load', function() {
