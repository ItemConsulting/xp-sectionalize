require(['jquery'], function($) {
    console.log('test');
    console.log($);
});

require(['responsiveImages'], function() {
    $('img').UTIL_responsiveImages();
});

require(['owlCarousel'], function() {
    var owlCarouselSelector = $('.owl-carousel');
    if (owlCarouselSelector.length) {
        owlCarouselSelector.owlCarousel({
            items: 1,
            nav: true,
            loop: true
        });
    }
});