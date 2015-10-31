$(document).ready(function() {
    console.log('document ready', Math.floor(Date.now()));

    $('body').cvPage();
});

$(window).load(function() {
    console.log('window loaded', Math.floor(Date.now()));
});

/* =================================
 NAVBAR
 =================================== */
$(window).scroll(function () {
    /*var scrollTop = $(document).scrollTop(),
        windowHeight = $(window).height();

    console.log(windowHeight);

    if (scrollTop > windowHeight) {
        $('#header').addClass('tiny').css('opacity','1');
    } else {
        $('#header').removeClass('tiny');
    }*/
});

(function ( $, window, document, undefined ) {
    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.


    var pluginName = 'cvPage',
        defaults = {
            fixedCls: 'fixed'
        };

    function Plugin(element, options) {
        this.element = element;
        this.$element = $(element);
        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {

        init : function () {
            // Place initialization logic here
            // You already have access to the DOM element and
            // the options via the instance, e.g. this.element
            // and this.options
            // you can add more functions like the one below and
            // call them like so: this.yourOtherFunction(this.element, this.options).

            this.$header = this.$element.find('header');

            this._setHomeInnerHeight();
            this._setHeaderPosition();

            this.bindEvents();
        },

        _setHomeInnerHeight : function() {
            var windowHeight = $(window).height();
            $('#home_wrapper').height(windowHeight);
        },

        _setHeaderPosition : function() {
            var scrollTop = $(document).scrollTop(),
                windowHeight = $(window).height();

            if(scrollTop >= windowHeight - this.$header.height()) {
                this.$header.addClass(this.options.fixedCls);
            }
            else {
                this.$header.removeClass(this.options.fixedCls);
            }
        },

        onWindowScroll : function(ev) {
            var self = ev.data;

            self._setHeaderPosition();
        },

        onWindowResize : function(ev) {
            var self = ev.data;

            self._setHomeInnerHeight();
        },

        bindEvents : function() {
            $(window).on('scroll', this, this.onWindowScroll);
            $(window).on('resize', this, this.onWindowResize);
        }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                    new Plugin( this, options ));
            }
        });
    };
})( jQuery, window, document );