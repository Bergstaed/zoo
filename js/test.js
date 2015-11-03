/**
 *
 */
;(function($, window, document, undefined) {
    'use strict';

    $.fn.initContainer = function() {
        var self = $(this);

        /**
         *
         */
        var myFunction = function() {
            var headline = self.find('.headl');
            headline.addClass('border');
        };

        // run fkt
        myFunction();
    };
    $.fn.buildClick = function() {
        var self = $(this);

        /**
         *
         */
        function build () {
            self.click(function(event) {
                event.preventDefault();
                var a = this;
                var b = $(this);
                b.addClass('border');
                //$(this).addClass('border');

                var test = 0;
                while (test<20) {
                    test=test+1;
                    document.getElementById('zaehler').
                        innerHTML = test;
                }



            });
            //self.addClass('border');
        }

        // run fkt
        build();
    };

})(window.jQuery, window, document);


/**
 * Initialize
 */
$(document).ready(function() {
    $('.specContainer').each(function() {
        $(this).initContainer();
    });
    $('.js-specLink').each(function() {
        $(this).buildClick();
    });


});