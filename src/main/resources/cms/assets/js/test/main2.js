require.config({
    baseUrl: '.',
    paths: {
        jquery: '../vendor/jquery-1.11.2.min.js',
        responsiveImages: '../lib/util/responsive-images'
    },
    shim: {
        'owlCarousel': {
            deps: ['jquery']
        },
        Q: {
            exports: "Q"
        }
    }
});

require(['app']);
