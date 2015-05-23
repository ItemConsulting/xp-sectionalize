define(['jquery'], function($) {

    function ResponsiveImages(element) {

        this.img = element;

        this.init = function () {
            if (this.img.attr('data-srcset')) {
                this.srcSet = this.img.data('srcset');
                this.setImageSrc();
            }
        };

        // Update image src attribute with optimal image size
        this.setImageSrc = function () {
            var optimalImage = this.getOptimalImage();
            this.img.attr('src', optimalImage);
        };

        // Get optimal image (closest width to placeholder image)
        this.getOptimalImage = function () {
            var width = this.getImageWidth();
            var availableSizes = this.getAvailableSizes();
            var srcIndex = this.getClosestHigherNum(width, availableSizes);
            return this.srcSet[srcIndex];
        };

        // Get current width of placeholder image
        this.getImageWidth = function () {
            var width = Math.floor(this.img.width());
            //(window.devicePixelRatio || 1)
            return width;
        };

        // Get array of available sizes (widths) of the image
        this.getAvailableSizes = function () {
            var sizes = [];
            $.each(this.srcSet, function (index) {
                sizes.push(parseInt(index, 10));
            });
            sizes.sort(function (a, b) {
                return a - b;
            });
            return sizes;
        };

        // Get's the closest higher number in array
        this.getClosestHigherNum = function (num, ar) {
            var closest = ar[ar.length - 1];
            for (var i = ar.length; i > 0; i--) {
                if (ar[i] > num) {
                    closest = ar[i];
                }
            }
            return closest;
        };


    };

    $.fn.UTIL_responsiveImages = function (options) {
        return this.each(function () {
            var element = $(this);

            // Return early if this element already has a plugin instance
            if (element.data('responsiveImages')) {
                return;
            }

            // pass options to plugin constructor
            var responsiveImages = new ResponsiveImages(element);
            responsiveImages.init();

            // Store plugin object in this element's data
            element.data('responsiveImages', responsiveImages);
        });
    };
});