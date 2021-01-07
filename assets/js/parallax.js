// parallax effect
(function () {
    var parallax = $('.js-parallax');
    if (parallax.length) {
        parallax.each(function () {
            var _this = $(this),
                scale = _this.data('scale'),
                orientation = _this.data('orientation');

            new simpleParallax(_this[0], {
                scale: scale,
                orientation: orientation,
                overflow: true,
                transition: 'cubic-bezier(0,0,0,1)'
            });
        });
    }
})();
