/* 
    player trigger
*/
(function(){
    var player = videojs('my_video_1');
}());

/* 
    lazy image
*/
var LazyImages = {
    el: {
        img: '[data-background]:not(.activeted), [data-image-src]:not(.activeted), picture.prm-media:not(.activeted)'
    },
    cls: {
        activeted: 'activeted'
    },
    set: function (ID) {
        var  _t = this,
            src = ID.getAttribute('data-background') || '';

        if (src != '')
            ID.style.backgroundImage = 'url(' + src + ')';

        src = ID.getAttribute('data-image-src') || ID.getAttribute('data-original') || '';
        if (src != '')
            ID.setAttribute('src', src);

        if (ID.classList.contains('prm-media')){
            if( ID.getElementsByClassName('lazy-picture').length > 0 )
                ID.getElementsByClassName('lazy-picture')[0].setAttribute('media', '(max-width:0)');
        }


        ID.classList.add(_t.cls.activeted);
    },
    init: function () {
        var _t = this,
            imgs = [].slice.call(document.querySelectorAll(_t.el.img));

        if ('IntersectionObserver' in window) {
            /* support */
            var lazyImageObserver = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting || entry.intersectionRatio > 0) {
                        var ID = entry.target;
                        _t.set(ID);
                        lazyImageObserver.unobserve(ID);
                    }
                });
            }, 
            {
                threshold: [0, 1.0] 
            });

            imgs.forEach(function (ID) { lazyImageObserver.observe(ID); });

        } else {
            /* not support... */
            imgs.forEach(function (ID) {
                if (!ID.classList.contains(_t.cls.activeted))
                    _t.set(ID);
            });
        }
    }
};

LazyImages.init();
function setLazyImages(){ LazyImages.init(); }
window.onload = function(){ setLazyImages(); };
stage.addEventListener("CustomEvent", [{ type: 'LIST_LOADED', handler: 'setLazyImages' }]);
stage.addEventListener("CustomEvent", [{ type: 'SYSTEM_WIDGET_LOADED', handler: 'setLazyImages' }]);