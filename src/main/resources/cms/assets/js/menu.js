var Menu = {

    init: function () {
        this.body = $('body');
        this.toggleBtn = this.body.find('> header .toggle-menu');
        this.menu = $('#main-nav');
        this.menuVisible = false;
        this.bindEvents();
    },

    // Bind events
    bindEvents: function () {
        this.bindToggleBtnClick();
        this.bindBackdropClick();
        this.bindEscClick();
    },

    // Show the menu
    showMenu: function () {
        this.body.addClass('main-nav-toggled');
        this.toggleBtn.attr('aria-expanded', 'true');
        this.menuVisible = true;
    },

    // Hide the menu
    hideMenu: function () {
        this.body.removeClass('main-nav-toggled');
        this.toggleBtn.attr('aria-expanded', 'false');
        this.menuVisible = false;
    },

    // Click on toggle button
    bindToggleBtnClick: function () {
        this.toggleBtn.on('click', $.proxy(function (e) {
            e.preventDefault();
            if (this.menuVisible) {
                this.hideMenu();
            }
            else {
                this.showMenu();
            }
        }, this));
    },

    // Click outside of menu
    bindBackdropClick: function () {
        $(document).on('click', $.proxy(function (e) {
            var clickIsOnMenuLink = $(e.target).closest(this.menu.find('a')).length;
            var clickIsOnToggleBtn = $(e.target).closest(this.toggleBtn).length;
            if (this.menuVisible && !clickIsOnMenuLink && !clickIsOnToggleBtn) {
                this.hideMenu();
            }
        }, this));
    },

    // Click on ESC button
    bindEscClick: function () {
        $(document).on('keyup', $.proxy(function (e) {
            if (e.keyCode === 27) {
                this.hideMenu();
            }
        }, this));
    }
};

Menu.init();


/*
define(['jquery'], function ($) {
    var Menu = {

        init: function () {
            this.body = $('body');
            this.toggleBtn = this.body.find('> header .toggle-menu');
            this.menu = $('#main-nav');
            this.menuVisible = false;
            this.bindEvents();
        },

        // Bind events
        bindEvents: function () {
            this.bindToggleBtnClick();
            this.bindBackdropClick();
            this.bindEscClick();
        },

        // Show the menu
        showMenu: function () {
            this.body.addClass('main-nav-toggled');
            this.toggleBtn.attr('aria-expanded', 'true');
            this.menuVisible = true;
        },

        // Hide the menu
        hideMenu: function () {
            this.body.removeClass('main-nav-toggled');
            this.toggleBtn.attr('aria-expanded', 'false');
            this.menuVisible = false;
        },

        // Click on toggle button
        bindToggleBtnClick: function () {
            this.toggleBtn.on('click', $.proxy(function (e) {
                e.preventDefault();
                if (this.menuVisible) {
                    this.hideMenu();
                }
                else {
                    this.showMenu();
                }
            }, this));
        },

        // Click outside of menu
        bindBackdropClick: function () {
            $(document).on('click', $.proxy(function (e) {
                var clickIsOnMenuLink = $(e.target).closest(this.menu.find('a')).length;
                var clickIsOnToggleBtn = $(e.target).closest(this.toggleBtn).length;
                if (this.menuVisible && !clickIsOnMenuLink && !clickIsOnToggleBtn) {
                    this.hideMenu();
                }
            }, this));
        },

        // Click on ESC button
        bindEscClick: function () {
            $(document).on('keyup', $.proxy(function (e) {
                if (e.keyCode === 27) {
                    this.hideMenu();
                }
            }, this));
        }
    };

    Menu.init();
});
*/


