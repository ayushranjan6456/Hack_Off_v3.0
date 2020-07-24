jQuery(function ($) {
    'use strict';

    /* Table of contents */
    /*
        # Headers
        # Bar
        # Navigation
        # Footer
        # Shortcodes
            ## Accordion box
            ## Banner box
            ## Counter box
            ## Contact form
            ## Countdown box
            ## Cover box
            ## Gallery
            ## Parallax
            ## Progress bar
            ## Pricing table
            ## Social Bar
            ## Split Box
            ## Sliders
            ## Tabs
            ## Video Background
            ## Scroll content
        # Shop
            ## Shop products filter
            ## Shop Masonry
        #Product
            ## Ajax cart
        # Lazy load
        # Other
    */

    window.Clb = {
        init: function () {
            // Header
            this.header = $('#masthead');
            this.body = $('body');
            this.headerIsFifth = Clb.header.hasClass('header-4');
            this.headerIsSixth = Clb.header.hasClass('header-5');
            this.wpadminbar = $('#wpadminbar');

            this.headerFixed = {
                initialOffset: parseInt(this.header.attr('data-fixed-initial-offset')) || 150,

                enabled: $('[data-header-fixed]').length,
                value: false,

                mobileEnabled: $('[data-mobile-header-fixed]').length,
                mobileValue: false
            };

            this.searchPopup = $('.clb-search-popup');
            this.subheader = $('.subheader');

            // Logos
            this.siteBranding = this.header.find('.site-branding');
            this.siteTitle = this.header.find('.site-title');
            this.logo = this.header.find('.logo');
            this.fixedLogo = this.header.find('.fixed-logo');
            this.mobileLogo = this.header.find('.mobile-logo');
            this.fixedMobileLogo = this.header.find('.fixed-mobile-logo');

            this.logoForOnepage = this.header.find('.for-onepage');
            this.logoForOnepageDark = this.logoForOnepage.find('.dark');
            this.logoForOnepageLight = this.logoForOnepage.find('.light');

            // Menus
            this.megaMenu = this.header.find('#mega-menu-wrap');
            this.mobileMenu = $('[data-mobile-menu-resolution]').data('mobile-menu-resolution');

            // Page
            this.containerLoading = $('.container-loading');

            this.shopProductsType = $('.woo-shop-container');

            //RTL
            this.isRtl = $('body').hasClass('rtl');

            //Elementor
            this.isElementorPage = $('body').hasClass('elementor-page');

            this.resize();
        },

        resize: function () {
            this.isMobile = $(window).width() <= 768;
            this.isPad = $(window).width() <= 1024;
            this.isMobileMenu = $(window).width() <= Clb.mobileMenu
        }
    };

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    /* # Headers */
    function handleHeaders() {

        // // Search open
        // $('[data-nav-search]').on("click", function (e) {
        //     e.preventDefault();
        //     $('.search_results').empty();
        //     Clb.searchPopup.addClass('visible');
        // });

        // // Search close
        // Clb.searchPopup.find('.close').on("click", function (e) {
        //     Clb.searchPopup.removeClass('visible');
        //     $('.search_results').empty();
        // });

        // $(document).on('keydown', function (e) {
        //     if (e.keyCode == 27) {
        //         Clb.searchPopup.removeClass('visible');
        //         $('.search_results').empty();
        //     }
        // });
        $('[data-nav-search]').on("click", function (e) {
            e.preventDefault();
            handlePopup('.clb-search-popup');
            $('.search_results').empty();
        });


        // Remove close from form
        Clb.searchPopup.find('form').on("click", function (e) {
            e.stopPropagation();
        });

        handleMobileHeader();
        handleHeaderSize();
        handleFixedHeader();
    }

    function handleMobileHeader() {
        if (Clb.header && Clb.header.length) {

            if (Clb.isMobileMenu) {
                Clb.header.addClass('mobile-header');
                Clb.body.addClass('is-mobile-menu');
                setTimeout(function(){
                    $('.main-nav').addClass('unhidden');
                }, 300);
            } else {
                Clb.header.removeClass('mobile-header');
                Clb.body.removeClass('is-mobile-menu');
                $('.main-nav').addClass('visible');
            }
        }
    }

    function handleHeaderSize() {

        handleFixedHeader();

        // Reset mega menu css properties for mobile phone
        if (Clb.isMobileMenu) {
            Clb.megaMenu.find('ul').css({
                'left': '',
                'width': '',
                'max-width': '',
                'min-width': ''
            });
        }
    }

    function handleFixedHeader() {
        var fixed = Clb.headerFixed;

        if ($(document).scrollTop() > fixed.initialOffset) {

            if ((!Clb.isMobileMenu && fixed.enabled && !fixed.value) ||
                (Clb.isMobileMenu && fixed.mobileEnabled && !fixed.mobileValue)) {

                if (Clb.isMobileMenu) {
                    fixed.mobileValue = true;
                } else {
                    fixed.value = true;
                }

                Clb.header.addClass('header-fixed no-transition')

                // Hide non fixed logos
                Clb.logo.css('display', 'none');
                Clb.mobileLogo.css('display', 'none');
                Clb.logoForOnepage.css('display', 'none');

                // Show fixed logo
                if (Clb.isMobileMenu && Clb.fixedMobileLogo.length) {
                    Clb.fixedMobileLogo.css('display', 'flex');
                } else {
                    Clb.fixedLogo.css('display', 'flex');
                }
            }

        } else if (fixed.value || fixed.mobileValue) {

            fixed.value = false;
            fixed.mobileValue = false;

            Clb.header.removeClass('header-fixed');

            // Hide fixed logos
            Clb.fixedLogo.css('display', '');
            Clb.fixedMobileLogo.css('display', '');

            // Show non fixed logo
            if (Clb.isMobileMenu && Clb.mobileLogo.length) {
                Clb.logo.css('display', 'none');
                Clb.logoForOnepage.css('display', 'none');
                Clb.mobileLogo.css('display', 'flex');
            } else {
                Clb.logo.css('display', 'flex');
                Clb.logoForOnepage.css('display', '');
                Clb.mobileLogo.css('display', 'none');
            }

        }

        // Effect appearance
        if ($(document).scrollTop() > fixed.initialOffset + 50) {
            Clb.header.removeClass('no-transition').addClass('showed');
        } else {
            Clb.header.removeClass('showed').addClass('no-transition');
        }
    }

    function handleHeaderTitle() {
        // Ttitle Parallax
        if ($('.clb-page-headline .page-title').hasClass('no-transition')) {
            if ($('.clb-page-headline h1').length) {
                var scroll = $(document).scrollTop() / 3;
                if (scroll > 200) {
                    scroll = 200;
                } else {
                    scroll = scroll;
                }
                $('.clb-page-headline h1, .clb-page-headline p.subtitle, .clb-page-headline .tags').css({
                    'transform': 'translate3d(0,' + (scroll) + 'px, 0)',
                    'opacity': 1 - (scroll / 200)
                });
            }
        }
    }

    /* # Bar */

    function handleBarScroll() {
        var bar = $('.bar');

        if (bar.length) {
            var hamburger = $('.bar-hamburger .hamburger');

            if ($(document).scrollTop() > 100) {
                hamburger.css('margin-top', '25px');
            } else {
                hamburger.css('margin-top', '');
            }
        }
    }

    /* # Navigation */

    window.openFullscreenMenu = function () {
        $('.clb-hamburger-nav').addClass('visible').find('.menu > li').each(function (i) {
            var link = $(this);
            setTimeout(function () {
                link.addClass('showed');
            }, 150 + i * 40);
        });
    };

    function handleNavigations() {

        // Mobile menu
        var menuNow = 0;

        $('.clb-hamburger').on("click", function () {
            handlePopup('.main-nav .mbl-overlay');
        });

        $('.clb-close, .mbl-overlay-bg, .mobile-header #site-navigation a').on("click", function () {
            
            $('#mega-menu-sub-' + menuNow).removeClass('active');
            $('#mega-menu-sub-' + menuNow).removeAttr('id');
            menuNow--;
            $('#site-navigation').removeClass('active');
            $('.close-menu').css('right', '-100%');
            $('.clb-hamburger').removeClass('hidden');
            $('#masthead .search').removeClass('visible');

            if (Clb.isPad) {
                closePopup($('.main-nav .mbl-overlay'));
            }
        });

        if (Clb.isPad) {
            $(document).on('keydown', function (e) {
                if (e.keyCode == 27) {
                    closePopup($('.main-nav .mbl-overlay'));
                }
            });
        }


        $('a.menu-link').on('click', function () {

            if ($(this).attr('href').includes('#')) {
                menuNow = 0;
                $('[id^="mega-menu-sub-"]').removeClass('active');
                $('[id^="mega-menu-sub-"]').removeAttr('id');
                $('#site-navigation').removeClass('active');
                $('.close-menu').css('right', '-100%');
                $('.clb-hamburger').removeClass('hidden');
                $('#masthead .search').removeClass('visible');
                closePopup($('.clb-popup.clb-hamburger-nav'));
                closePopup($('.site-header .mbl-overlay.menu-mbl-overlay.visible'));
            }
        });


        $('.has-submenu > a').on('click touchend', function (e) {

            if (Clb.isPad) {
                var parent = $(this).parent();
                var menu = parent.find('.sub-nav > ul.sub-menu, > .sub-sub-nav > ul.sub-sub-menu, .submenu');
                var subMenu = parent.find('>.sub-nav >.sub-menu, >.sub-sub-nav >.sub-sub-menu');

                // If click on first level menu item remove all active classes
                if (parent.hasClass('menu-item-depth-0') && !parent.hasClass('active-main-item')) {
                    $('.sub-nav >.sub-menu, .sub-sub-nav >.sub-sub-menu').removeAttr('style');
                    $('.active-main-item').find('.sub-menu.active, .sub-sub-menu.active').removeClass('active');
                    $('.active-main-item').removeClass('active-main-item active');
                    parent.addClass('active-main-item');
                } else if (parent.hasClass('active-main-item')) {
                    resetAllClasses();
                    return false;
                }

                // If click on depth level menu item remove all active classes
                if (menuNow > 0) {
                    resetClassesOnClickNonActiveItem(parent);
                }

                // If click on open menu item, close it.
                if ($(this).hasClass('active') || parent.hasClass('active')) {
                    resetClassesOnClickActiveItem(parent);
                    resizeSubMenu(menuNow);

                    if (!parent.hasClass('menu-item-depth-' + menuNow)) {
                        menuNow--;
                    }
                    $(this).removeClass('active');
                    $('.sub-menu').removeAttr('style');
                    return false;
                } else {
                    if (!parent.hasClass('menu-item-depth-' + menuNow)) {
                        menuNow++;
                    }

                    // If click on sub-nav-item resize height sub-menu
                    if (parent.hasClass('sub-nav-item')) {
                        $('.sub-nav >.sub-menu, .sub-sub-nav >.sub-sub-menu').removeAttr('style');
                        resizeSubMenu(menuNow);
                    }

                    var submenuItems = subMenu.find('> .mega-menu-item');
                    subMenu.css('height', calcHeight(submenuItems) + 'px');
                    parent.addClass('active');
                    menu.addClass('active');
                    $('.menu-link').removeClass('active');
                    $(this).addClass('active');
                    return false;
                }
            } else if (Clb.isPad) { // todo: wtf?
                var self = $(this);

                $('.sub-sub-nav, .menu-link').removeClass('open active');
                $(this).addClass('active');
                $(this).siblings('.sub-sub-nav').addClass('open');

                $(document).on('mouseup touchstart', function (e) {
                    if (self.has(e.target).length === 0) {
                        $('.sub-sub-nav, .menu-link').removeClass('open active');
                    }
                });

                return false;
            } else {
                window.location.href = $(this).attr('href');
            }
        });

        if ($('#masthead nav > .mobile-wpml-select').length) {
            $('#masthead nav > .mobile-wpml-select').insertAfter($('#mega-menu-wrap > ul > li').last());
        }

        // Mega Menu
        if ($('#mega-menu-wrap').length) {
            $('#mega-menu-wrap').accessibleMegaMenu({
                uuidPrefix: 'accessible-megamenu',
                menuClass: 'menu',
                topNavItemClass: 'nav-item',
                panelClass: 'sub-nav',
                panelGroupClass: 'sub-sub-menu',
                hoverClass: 'hover',
                focusClass: 'focus',
                openClass: 'visible'
            }).on('megamenu:open', function (e, el) {
                var $menu = $(this),
                    $el = $(el),
                    $subNav;

                if (Clb.isMobileMenu) {
                    return false;
                }

                if ($el.is('.main-menu-link.visible') && $el.siblings('div.sub-nav').length > 0) {
                    $subNav = $el.siblings('div.sub-nav');
                } else if ($el.is('div.sub-nav')) {
                    $subNav = $el;
                    $el = $subNav.siblings('.main-menu-link');
                } else {
                    return true;
                }

                //$subNav.removeAttr( 'style' ).removeClass( 'sub-nav-onecol' );

                var ul = $subNav.find('ul.sub-menu-wide');
                ul.each(function () {
                    var $ul = $(this);
                    var total_width = 1;

                    $ul.find('> .sub-nav-item').each(function () {
                        total_width += $(this).outerWidth();
                    });

                    $ul.innerWidth(total_width);
                });

                var headerLeft = 0;
                if ($('#masthead.header-2').length) {
                    var headerWrap = $('#masthead.header-2 .header-wrap');
                    headerLeft = $(window).width() - headerWrap.outerWidth() - headerWrap.offset().left;
                }
                var windowWidth = $(window).width();

                var subNavWidth = $subNav.find('> ul').width();
                var subNavMargin = 0;

                $subNav.css({'max-width': windowWidth});

                if (subNavWidth > windowWidth) {
                    $subNav.addClass('sub-nav-onecol');

                    subNavWidth = $subNav.width();
                }
                var elWidth = $el.outerWidth();
                var elOffsetLeft = $el.offset().left;
                var elOffsetRight = windowWidth - $el.offset().left - elWidth;

                if (elOffsetLeft < 0) {
                    subNavMargin = -(elOffsetLeft - subNavWidth / 2 + elWidth / 2) - headerLeft;
                }
                if (elOffsetRight < (subNavWidth - elWidth)) {
                    subNavMargin = -(subNavWidth - elWidth - elOffsetRight) - headerLeft;
                }

                if (ul.outerWidth() >= windowWidth) {
                    $subNav.css('left', '');
                    ul.innerWidth(windowWidth);
                    subNavMargin = -$subNav.offset().left;
                }

                $subNav.css('left', subNavMargin);
            });

            $('#mega-menu-wrap .sub-sub-nav').each(function () {
                if ($(this).offset().left + $(this).outerWidth() > $(window).width()) {
                    $(this).addClass('menu-left');

                    var menuPosition = $(this).find('.sub-sub-menu').outerWidth();
                    $(this).css('left', - menuPosition);
                }
            });
        }

        /* # Cart */

        $("a.cart .icon").on("click", function (e) {
            e.preventDefault();
            $(".submenu_cart").toggleClass("visible");
        });
        $("#close_cart").on("click", function () {
            $(".submenu_cart").removeClass("visible");
        });

        /* # Fullscreen hamburger menu */

        $('.clb-hamburger').on('click', function (e) {
            e.preventDefault();
            openFullscreenMenu();
        });

        var closeMenu = function () {
            $('.clb-hamburger-nav').removeClass('visible').find('.menu > li').each(function (i) {
                $(this).removeClass('showed active');
            });
        };

        $(".close").on("click", function () {
            closeMenu();
        });

        var fullscreenMenu = $('.clb-hamburger-nav-holder');
        if (fullscreenMenu.length) {

            var isCentered = fullscreenMenu.parents('.clb-hamburger-nav').hasClass('centered') || fullscreenMenu.parents('.clb-hamburger-nav').hasClass('type3');
            var menuNow = 0;

            $(document).on('mouseup touchstart', function (e) {
                if (fullscreenMenu.has(e.target).length === 0) {
                    $('.sub-nav > ul > li, .sub-nav .mega-menu-item > .sub-sub-nav > .sub-sub-menu > li').removeClass('showed active showed-onclick');
                    $('.nav-item').removeClass('active');
                    $('.sub-nav, .sub-sub-nav').removeClass('open-onclick');
                }
            });

            if ( isCentered ) {
                var megaMenuItem = fullscreenMenu.find('.mega-menu-item');
                megaMenuItem.each(function(){
                    var self = $(this).find('> a');
                    var clonedLink = self.find('> span').clone().addClass('menu-link-cloned').appendTo(self);
                    self.find('.has-submenu-icon').wrapAll('<div class="btn-round btn-round-small btn-round-has-submenu"></div>');
                });


            }

            fullscreenMenu.accessibleMegaMenu({
                uuidPrefix: 'accessible-megamenu',
                menuClass: 'menu',
                topNavItemClass: 'nav-item',
                panelClass: 'sub-nav',
                panelGroupClass: 'sub-sub-menu',
                hoverClass: 'hover',
                focusClass: 'focus',
                openClass: 'visible'
            }).on('megamenu:open', function (e, el) {

                $(this).find('.sub-nav:not(.visible) > ul > li, .sub-nav .mega-menu-item:not(:hover) > .sub-sub-nav > .sub-sub-menu > li').removeClass('showed active');
                if (!Clb.isPad) {
                    $(this).find('.sub-nav.visible > ul > li, .sub-nav .mega-menu-item:hover > .sub-sub-nav > .sub-sub-menu > li').each(function (i) {
                        var self = $(this);
                        setTimeout(function () {
                            if (self.parent().parent().parent().is(':hover')) {
                                self.addClass('showed');
                            }
                        }, i * 40);
                    });
                }

                if ( isCentered ) {
                    var menuIcon = $('.has-submenu > a .btn-round-has-submenu');

                    menuIcon.on('click touchend', function () {
                        var parent = $(this).parent().parent();

                        if (parent.hasClass('menu-item-depth-0') && !parent.hasClass('active')) {
                            resetAllClasses(parent);
                            parent.addClass('active-main-item');
                        }

                        if (!parent.hasClass('menu-item-depth-' + menuNow)) {
                            menuNow++;
                        }

                        if (parent.hasClass('menu-item-depth-' + menuNow) && !parent.hasClass('active')) {
                            resetClassesOnClickNonActiveItem(parent);
                        }

                        resetClassesOnClickActiveItem(parent);

                        parent.addClass('active');

                        parent.find('> .sub-nav, > .sub-sub-nav').addClass('open-onclick');
                        $('.open-onclick').find('> .sub-menu > .mega-menu-item, > .sub-sub-menu > .mega-menu-item ').addClass('showed-onclick');

                        return false;
                    });
                } else {
                    if (Clb.isPad) {

                        $('.has-submenu > a').on('click touchend', function (i) {

                            var parent = $(this).parent();

                            if (parent.hasClass('menu-item-depth-0') && !parent.hasClass('active')) {
                                resetAllClasses(parent);
                            }

                            if (!parent.hasClass('menu-item-depth-' + menuNow)) {
                                menuNow++;
                            }

                            if (parent.hasClass('menu-item-depth-' + menuNow) && !parent.hasClass('active')) {
                                resetClassesOnClickNonActiveItem(parent);
                            }

                            parent.addClass('active');

                            if (!$(this).hasClass('showed')) {
                                $('.sub-sub-nav .sub-sub-menu .sub-nav-item').removeClass('showed');
                                $('.sub-sub-nav .sub-sub-menu').removeClass('visible');
                            }

                            parent.addClass('active');
                            parent.find('> .sub-nav > .sub-menu > .sub-nav-item, > .sub-sub-nav > .sub-sub-menu > .sub-nav-item').addClass('showed');
                            parent.find('> .sub-sub-nav > .sub-sub-menu').addClass('visible');
                        });
                    }
                }
            });
        }

        function calcHeight(items) {
            var calcHeight = 0;

            items.each(function () {
                var itemHeight = $(this).outerHeight();
                calcHeight += itemHeight;
            });

            return calcHeight;
        }


        function resizeSubMenu() {
            //resize sub-menu
            setTimeout(function () {
                var newHeight = $('.menu-depth-1.active').height();
                $('.sub-menu.active').css('height', newHeight + 'px');
            }, 500);
        }

        function resetAllClasses() {
            menuNow = 0;
            $('.sub-nav > ul.sub-menu, .sub-sub-nav > ul.sub-sub-menu, .submenu, .sub-nav-item').removeClass('active showed');
            $('.nav-item').removeClass('active active-main-item');
            $('.sub-nav, .sub-sub-nav').removeClass('open-onclick');
            $('.sub-nav >.sub-menu, .sub-sub-nav >.sub-sub-menu').removeAttr('style');
        }

        function resetClassesOnClickNonActiveItem(menuItem) {
            var menuItems = $('.menu-item-depth-' + menuNow);
            menuItems.removeClass('active');
            menuItems.find('.sub-nav > ul.sub-menu, .sub-sub-nav > ul.sub-sub-menu, .submenu, .sub-nav-item').removeClass('active showed-onclick');
            menuItems.find('.sub-nav, .sub-sub-nav').removeClass('open-onclick ');
            menuItems.find('.sub-nav >.sub-menu, .sub-sub-nav >.sub-sub-menu').removeAttr('style');
        }

        function resetClassesOnClickActiveItem(menuItem) {
            if (menuItem.hasClass('active-main-item')) {
                resetAllClasses();
            }
            menuItem.find('.sub-menu, .sub-sub-menu').removeAttr('style');
        }
    }

    /* # Footer */

    function handleFooter() {
        // Sticky
        var stickyFooter = $('.site-footer.sticky');
        if (stickyFooter.length && !Clb.isMobile) {
            $('.site-content').css({
                'margin-bottom': stickyFooter.outerHeight() + 'px',
                'position': 'relative',
                'z-index': '3'
            });
            stickyFooter.addClass('visible');
        }
    };

    function handleFooterSize() {
        var stickyFooter = $('.site-footer.sticky');
        if (stickyFooter.length) {
            if (!Clb.isMobile) {
                stickyFooter.css({
                    'width': stickyFooter.parent().outerWidth() + 'px',
                    'left': stickyFooter.parent().offset().left + 'px',
                });
                $('.site-content').css({
                    'margin-bottom': stickyFooter.outerHeight() + 'px',
                    'position': 'relative',
                    'z-index': '3'
                });
            } else {
                $('.site-content').css({
                    'margin-bottom': '',
                    'position': '',
                    'z-index': ''
                });
                stickyFooter.css({
                    'width': '',
                    'left': '',
                });
            }
        }
    }

    /* # Shortcodes */

    /* ## Accordion box */

    function handleAccordionBox() {
        $('[data-ohio-accordion]').each(function () {
            var accordion = $(this);
            var titles = $(this).find('.accordionItem_title');
            var items = $(this).find('.accordionItem');
            var contents = $(this).find('.accordionItem_content');
            var iconOpened = 'ion-md-remove', iconClosed = 'ion-md-add';
            var isOutline = $(this).hasClass('outline');

            var toggle = function (num) {

                var opened = accordion.find('.visible');
                var content = contents.eq(num);

                // If not active
                if (!items.eq(num).hasClass('active')) {
                    // Activate this item
                    items.removeClass('active');
                    items.eq(num).addClass('active');

                    setTimeout(function () {
                        content.css('height', '').addClass('no-transition visible');            // Open new content
                        var height = content.outerHeight() + 'px';                             // Save heights
                        content.removeClass('no-transition visible').css('height', (isOutline) ? '0px' : '10px'); // Close new content

                        setTimeout(function () {
                            opened.removeClass('visible no-transition').css('height', (isOutline) ? '0px' : '10px'); // Close old content
                            content.addClass('visible').css('height', height);              // Open new content

                            // Change titles
                            titles.find('.accordionItem_control i').removeClass(iconOpened).addClass(iconClosed);
                            titles.eq(num).find('.accordionItem_control i').removeClass(iconClosed).addClass(iconOpened);
                        }, 30);
                    }, 30);
                } else {
                    items.eq(num).removeClass('active');
                    items.eq(num).find('.accordionItem_content.visible').removeClass('visible').css('height', (isOutline) ? '0px' : '10px'); // Close old content
                    items.eq(num).find('.accordionItem_title .accordionItem_control i').removeClass(iconOpened).addClass(iconClosed);
                }
            };

            titles.each(function (i) {
                $(this).on('click', function () {
                    toggle(i);
                });
            });

            //toggle($(this).attr('data-ohio-accordion') || 0);

            this.accordionToggle = toggle;
        });
    };
    $(window).on('ohio:handle_accordion_box', handleAccordionBox);

    function handleAccordionBoxSize() {
        $('[data-ohio-accordion]').each(function () {
            var content = $(this).find('.accordionItem_content.visible');
            var items = $(this).find('.accordionItem');
            var wrap = content.find('.wrap');   

            items.each(function(){
                var icon = $(this).hasClass('active') ? 'ion-md-remove' : 'ion-md-add';
                $(this).find('.accordionItem_control i').addClass(icon);
            });

            content.css('height', wrap.outerHeight() + 'px');
        });
    };
    $(window).on('ohio:handle_accordion_box_size', handleAccordionBoxSize);

    /* ## Banner box */

    function handleBannerBox() {
        $('.banner-box.overlay-title.hover').each(function () {
            $(this).on("hover", function () {
                    var self = $(this);
                    var content = $(this).find('.title-wrap');
                    var description = $(this).find('.description-wrap');

                    description.css('margin-top', -content.outerHeight() + 'px');
                },
                function () {
                    var self = $(this), newHeight = 0, oldHeight = 0;
                    self.find('.description-wrap').css('margin-top', '');
                });
        });
    }

    function handleBannerBoxSize() {
        $('.banner-box.overlay-title.hover').each(function () {
            var newHeight = 0,
                titles = $(this).find('.title-wrap');

            $(this).css('height', '');
            $(this).css('height', ($(this).outerHeight() - titles.outerHeight()) + 'px');
        });
    }

    /* ## Counter box */

    function handleCounterBox() {
        $('[data-counter]').each(function () {
            var counter = $(this);
            var scrollTop = $(document).scrollTop() + $(window).height();

            if (scrollTop > counter.offset().top + counter.height()) {
                var countEnd = parseInt(counter.attr('data-counter').replace(/\s/g, ''));
                counter.removeAttr('data-counter');

                for (var j = 0; j <= 20; j++) {
                    (function (count) {

                        setTimeout(function () {
                            var number = Math.round((countEnd / 20) * count);

                            counter.find('.count').html(number);
                        }, 50 * count);

                    })(j);
                }
            }
        });
    };
    $(window).on('ohio:handle_counter_box', handleCounterBox);

    /* ## Contact form */

    function handleSubscribeContactForm() {
        // Button
        $('.contact-form').each(function () {
            var submit = $(this).find('[type="submit"]');
            var button = $(this).find('[data-contact-btn] button');

            if (submit.length) {
                button.find('.text').html(submit.val());
                submit.replaceWith(button);
                $(this).find('.ajax-loader').remove();
            }

            // For focus
            if ($(this).hasClass('without-label-offset')) {
                $(this).find('.wpcf7-form-control-wrap').after('<div class="focus"></div>');

                $(this).find('input, textarea, select').on('focus', function () {
                    $(this).parent().parent().find('.focus').addClass('active');
                }).on('blur', function () {
                    $(this).parent().parent().find('.focus').removeClass('active');
                });
            }
        });

        // Loader
        $('.contact-form form').on('submit', function () {
            var btn = $(this).find('.btn');

            if (btn.hasClass('btn-link')) {
                btn.addClass("btn-loading");
                btn.find('.text').css('display', 'none');
            } else {
                btn.addClass("btn-loading");
            }


        });
        $(document).on('spam.wpcf7 invalid.wpcf7 spam.wpcf7 mailsent.wpcf7 mailfailed.wpcf7 unaccepted.wpcf7', function (e) {
            var form = $('.contact-form');
            $(form).find('.btn').removeClass("btn-loading");

            if ($(form).find('.btn').hasClass('btn-link')) {
                $(form).find('.btn .text').css('display', 'block');
            }
        });
    }
    $(window).on('ohio:handle_contact_forms', handleSubscribeContactForm);

    /* ## Countdown box */
    function handleCountdownBox() {
        $("[data-countdown-box]").each(function () {
            var countdownBox = $(this);
            var labels = countdownBox.attr('data-countdown-labels').split(','),
                parser = /([0-9]{2})/gi;

            // Return the time components that diffs
            var diff = function (obj1, obj2) {
                var diff = [];
                labels.forEach(function (key) {
                    if (obj1[key] !== obj2[key]) {
                        diff.push(key);
                    }
                });
                return diff;
            }
            // Parse countdown string to an object
            var strfobj = function (str) {
                var parsed = str.match(parser),
                    obj = {};
                labels.forEach(function (label, i) {
                    obj[label] = parsed[i]
                });
                return obj;
            }

            var template = $("#" + countdownBox.attr("data-countdown-box")).html(),
                currentDate = '00:00:00:00:00',
                nextDate = '00:00:00:00:00';
            // Build the layout
            var initData = strfobj(currentDate);
            labels.forEach(function (label, i) {
                let preparedTemplate = template.replace(/\<\%\= current \%\>/g, initData[label]);
                preparedTemplate = preparedTemplate.replace(/\<\%\= next \%\>/g, initData[label]);
                preparedTemplate = preparedTemplate.replace(/\<\%\= label \%\>/g, label);

                countdownBox.append(preparedTemplate);
            });
            // Starts the countdown
            countdownBox.countdown(new Date($(this).attr("data-countdown-time")), function (event) {
                window.c = event;
                var newDate = event.strftime('%m:%n:%H:%M:%S'), data;
                if (newDate !== nextDate) {
                    currentDate = nextDate;
                    nextDate = newDate;
                    // Setup the data
                    data = {
                        'current': strfobj(currentDate),
                        'next': strfobj(nextDate)
                    };
                    // Apply the new values to each node that changed
                    diff(data.current, data.next).forEach(function (label) {
                        var selector = '.%s'.replace(/%s/, label),
                            node = countdownBox.find(selector);
                        // Update the node
                        node.removeClass('flip');
                        node.find('.box-current .number').text(data.current[label]);
                        node.find('.box-next .number').text(data.next[label]);
                        // Wait for a repaint to then flip
                        setTimeout(function () {
                            node.addClass('flip');
                        }, 50);
                    });
                }
            });
        });
    }
    $(window).on('ohio:handle_countdown_box', handleCountdownBox);

    /* ## Cover box */

    function handleCoverBox() {
        $('[data-ohio-cover-box]').each(function () {
            var box = $(this),
                items = $(this).find('[data-item]'),
                triggers = $(this).find('[data-trigger]');

            var selected = -1;

            var openItem = function (num) {
                items.removeClass('active');
                var item = items.eq(num).addClass('active');

                if (selected != num && !Clb.isMobile) {
                    selected = num;

                    item.addClass('no-transition');
                    item.css('width', '');

                    var width = item.outerWidth();
                    item.css('width', '0');

                    setTimeout(function () {
                        item.removeClass('no-transition');
                        items.css('width', '0');
                        item.css('width', (width - 2) + 'px');
                    }, 30);
                }
            };

            triggers.on('mouseenter', function () {
                openItem(triggers.index($(this)));
            });

            openItem(0);
        });
    }

    function handleCoverBoxSize() {
        $('[data-ohio-cover-box]').each(function () {
            var box = $(this);

            box.find('[data-item]').each(function (i) {
                if (!Clb.isMobile) {
                    $(this).css('height', box.find('[data-trigger]').eq(i).outerHeight() + 'px');
                    $(this).find(' > * ').css('width', box.find('[data-trigger]').eq(i).outerWidth() + 'px');
                } else {
                    $(this).css({
                        'height': '',
                        'width': ''
                    });
                }
            });
        });
    }

    /* ## Gallery */

    function handleGallery() {
        // Open popup
        $('body').on('click', '[data-gallery-item]', function () {

            var gallery = $(this).closest('[data-gallery]'),
                popup = $('#' + gallery.attr('data-gallery')),
                images = gallery.find('.gallery-image'),
                options = popup[0].options;
                                
            if ($('.site-footer.sticky').length && !Clb.isMobile) {
                Clb.header.css('z-index', '1');
            }
            handlePopup(popup);

            if ($('.single-product').length > 0) {
                var image = $(this).parents('.woo_c-product-image-slider').find('.gimg').eq(0);
            } else {
                var image = $(this).find('.gimg').eq(0);
            }

            // Clone image for move
            var cloneImg = image.clone().css({
                'height': image.outerHeight()+'px',
                'top': image.offset().top - $(window).scrollTop(),
                'left': image.offset().left,
            }).addClass('gallery-tmpimage');

            // Create slider
            var slider = $(document.createElement('div')).addClass('slider');
            popup.find('.clb-popup-holder').append(slider);
            // Generated slider
            images.each(function () {

                var div = $(document.createElement('div'));

                div.addClass('image-wrap').append($(this).find('.gimg').eq(0).clone());

                var imgDetails = $(this).find('.clb-gallery-img-details');
                if (imgDetails.length) {
                    var description = imgDetails.clone();
                    div.append(description).addClass('with-description');

                    if ($(window).width() > 787) {
                        setTimeout(function () {
                            div.find('.image-wrap').css('height', 'calc(100% - ' + (description.outerHeight() - 5) + 'px)')
                        }, 10);
                    }
                }
                slider.append(div);
            });

            var imageNumber = $(this).attr('data-gallery-item');

            slider.clbSlider({
                navBtn: true,
                drag: true,
                dots: false,
                startSlide: imageNumber
            });

            slider.find('.clb-slider-nav-btn .btn-round').removeClass('btn-round-light');

            // Move tmp image

            $(document.body).append(cloneImg);

            var sliderImg = slider.find('img.gimg').eq(imageNumber);

            setTimeout(function(){
                cloneImg.css({
                    'height': sliderImg.outerHeight() + 'px',
                    'top': (sliderImg.offset().top - popup.offset().top) + 'px',
                    'left': '',
                    'margin-left': '-' + (sliderImg.outerWidth() / 2) + 'px'
                }).addClass('active');
                slider.addClass('ready');
                // Open slider, remove tmp image
                setTimeout(function(){
                    slider.addClass('visible');
                }, 200);

                setTimeout(function(){
                    cloneImg.remove();
                }, 800);
            }, 100);

            popup.expanded = false;

            var expand = function(){
                if( popup.expanded ){
                    document.webkitCancelFullScreen();
                    $(this).find('.ion').addClass('ion-md-expand').removeClass('ion-md-contract');
                    popup.expanded = false;
                } else {
                    popup.expanded = true;
                    popup[0].webkitRequestFullscreen();
                    $(this).find('.ion').removeClass('ion-md-expand').addClass('ion-md-contract');
                }
            };

            $(popup).find('.expand').on('click', expand);
            $(popup).find('.clb-close').on('click', function(){
                if (popup.expanded) {
                    document.webkitCancelFullScreen();
                    popup.expanded = false;
                }
            });
        });
    }

    /* ## Parallax */

    function initParallax() {
        $('[data-parallax-bg]').each(function () {
            var parallax = $(this);
            parallax.parent('.wpb_wrapper').addClass('full-height');
            var bg = parallax.find('.parallax-bg');
            var speed = parallax.attr('data-parallax-speed');
            parallax.data('oldHeight', bg.height());
            parallax.data('isHeadlineLoad', true);

            if (parallax.attr('data-parallax-bg') == 'vertical') {
                parallax.find('.parallax-bg').css({
                    height: (parallax.outerHeight() + speed * 200) + 'px'
                });
            } else {
                parallax.find('.parallax-bg').css({
                    width: (parallax.outerWidth() + speed * 200) + 'px'
                });
            }
            bg.addClass((parallax.attr('data-parallax-bg') == 'vertical') ? '' : 'horizontal');
        });
    };

    function handleParallax() {
        var contentScroll = $(document).scrollTop();
        var wndHeight = $(window).height();

        $('[data-parallax-bg]').each(function () {
            var parallax = $(this);
            var parallaxTop = parallax.offset().top;
            var parallaxHeight = parallax.outerHeight();
            var parallaxWidth = parallax.outerWidth();

            // If parallax block on screen
            if (parallaxTop <= contentScroll + wndHeight && parallaxTop + parallaxHeight >= contentScroll) {

                var speed = parseFloat(parallax.attr('data-parallax-speed')) * 100;
                var bg = parallax.find('.parallax-bg');
                var newHeight = bg.height();
                var oldHeight = parallax.data('oldHeight');

                var percent = (-parallaxTop + contentScroll + wndHeight) / (parallaxHeight + wndHeight);
                var offset = -(percent * 2) * speed;
                if (parallax.parents('.clb-page-headline').length && parallax.data('isHeadlineLoad')) {
                    if (parallax.attr('data-parallax-bg') == 'vertical') {
                        bg.css('transform', 'translate3d(0, ' + (-(newHeight - oldHeight) / 2) + 'px, 0)');
                        parallax.data('isHeadlineLoad', false)
                    }
                } else {
                    if (parallax.attr('data-parallax-bg') == 'vertical') {
                        bg.css('transform', 'translate3d(0, ' + offset + 'px, 0)');
                        if (parallax.parents('.clb-page-headline').length) {
                            bg.css('transition', 'transform linear 0.1s');
                        }
                        
                    } else {
                        bg.css('transform', 'translate3d(' + offset + 'px, 0, 0)');
                    }
                }
            }
        });
    };

    /* ## Progress bar */

    function handleProgressBar() {
        $("[data-ohio-progress-bar]:not([data-processed])").each(function () {
            var percent,
                bar = $(this),
                line = bar.find('.line'),
                progressEnd = parseInt(bar.attr("data-ohio-progress-bar")),
                withTooltip = bar.find('[data-tooltip]').length;

            var scrollTop = $(document).scrollTop() + $(window).height();

            if (line.length == 0 && bar.hasClass('split')) {
                var div = $(document.createElement('div')).addClass('line-split');

                div.append($(document.createElement('div')).addClass('line brand-bg-color'));

                for (var i = 0; i < 8; i++) {
                    var div = div.clone();

                    bar.find('.line-wrap').append(div);

                    div.find('.line').css({
                        'left': -(div.offset().left - bar.offset().left) + 'px'
                    });
                }

                if (withTooltip) {
                    bar.find('.line-wrap').append('<div class="line"><h4 class="line-percent"><span class="percent">0</span>%</h4></div>');
                }

                line = bar.find('.line');
            }

            percent = bar.find('.percent');

            if (scrollTop > bar.offset().top + bar.height()) {
                bar.attr("data-processed", "true");
                if (bar.hasClass('inner')) {
                    line.css("width", (bar.outerWidth() * (progressEnd / 100) - 8) + "px");
                } else {
                    line.css("width", (bar.outerWidth() * (progressEnd / 100)) + "px");
                }

                for (var j = 0; j <= 40; j++) {
                    (function (count) {
                        setTimeout(function () {
                            percent.html(Math.round((progressEnd / 40) * count));
                        }, 30 * count);
                    })(j);
                }
            }
        });
    }
    $(window).on('ohio:handle_progress_bar', handleProgressBar);

    /* ## Progress bar size */

    function handleProgressBarSize() {
        $("[data-ohio-progress-bar][data-processed]").each(function () {
            var bar = $(this);
            var line = bar.find('.line');
            var progressEnd = parseInt(bar.attr("data-ohio-progress-bar"));

            if (bar.hasClass('inner')) {
                line.css("width", (bar.outerWidth() * (progressEnd / 100) - 8) + "px");
            } else {
                line.css("width", (bar.outerWidth() * (progressEnd / 100)) + "px");
            }

            bar.find('.line-split').each(function () {
                $(this).find('.line').css({
                    'left': -($(this).offset().left - bar.offset().left) + 'px'
                });
            });
        });
    }

    /* ## Price table */

    function handlePriceTable() {
        if (!Clb.isMobile) {
            $('.pricing-table.features').each(function () {
                var row = $(this).parents('.vc_row').eq(0);
                var table = row.find('.pricing-table').eq(1);

                // Calculate position
                $(this).css({
                    'padding-top': (table.find('.list-box').eq(0).offset().top - table.offset().top - $(this).find('h3').outerHeight() - 15) + 'px',
                    'min-height': table.outerHeight() + 'px'
                });


                // Calculate sizes
                $(this).find('li').each(function (i) {
                    var max = 0;
                    row.find('.pricing-table').each(function () {
                        var h = $(this).find('li').eq(i).outerHeight();
                        if (h > max) {
                            max = h;
                        }
                    });
                    row.find('.pricing-table').each(function () {
                        $(this).find('li').eq(i).css({
                            'height': max + 'px',
                        });
                    });
                });
            });
        } else {
            $('.pricing-table.features').each(function () {
                $(this).css({
                    'padding-top': '',
                    'min-height': ''
                });
            });
        }
    };

    /* ## Split box */

    function handleSplitboxParallax() {
        var process = function (side, num) {
            if ($(this).attr('data-parallax-' + side)) {
                $(this).find('.split-box-container').eq(num).attr({
                    'data-parallax-bg': $(this).attr('data-parallax-' + side),
                    'data-parallax-speed': $(this).attr('data-parallax-speed-' + side)
                });
            } else {
                $(this).find('.split-box-container').eq(num).find('.parallax-bg').css({
                    'height': '100%',
                    'width': '100%'
                });
            }
        };

        $('.split-box').each(function () {
            process.call(this, 'left', 0);
            process.call(this, 'right', 1);
        });
    }

    /* ## Sliders */

    function handleSliders(image) {

        if (image === undefined) {
            image = $('.gimg');
        }

        $('[data-ohio-slider]').each(function () {
            var carousel = $(this);
            var options = $(this).attr('data-ohio-slider');
            options = (options) ? JSON.parse(options) : {};

            if (options.autoplay) {
                options.autoplayTimeout = options.autoplayTimeout * 1000;
            }

            options.items = +options.itemsDesktop || 5,
            options.responsive = {
                1024: {
                    items: +options.itemsTablet || 3,
                },
                768: {
                    items: +options.itemsMobile || 1,
                }
            };


            delete options.itemsDesktop;
            delete options.itemsTablet;
            delete options.itemsMobile;

            carousel.clbSlider(options);

            
            if (carousel.hasClass('with-preloader')) {
                carousel.addClass('visible');
                carousel.parent().find('.sk-preloader').addClass('hidden');
            }
        });

        $('[data-ohio-slider-simple]').each(function () {
            var carousel = $(this);

            carousel.clbSlider({
                dots: false,
                verticalScroll: false,
                loop: true,
                autoHeight: true
            }).on('clb-slider.changed', function(){
                setTimeout(function () {
                    $('.ohio-masonry').masonry();
                }, 250);
            });
        });
    }

    function handleFullscreenSlider() {
        var onepage = $('.fullscreen-slider');
        if (onepage.length) {
            var options = JSON.parse(onepage.attr('data-options'));

            onepage.clbSlider(options);

            var onepageOffset = onepage.offset().top;
            var onepageHeight = onepage.height();

            var divNav = $('#mega-menu-wrap > ul > li > a, #masthead .menu-optional > li a, #masthead .ion:not(.ion-md-add)');
            var pagination = onepage.find('.clb-slider-nav-btn .btn-round, .clb-slider-pagination .clb-slider-page');
            var dots = onepage.find('.clb-slider-nav-dots .clb-slider-dot');
            var social = $('.clb-social-holder li');
            var search = $('.search-global');
            var scroll = $('.clb-scroll-top');

            onepage.on('clb-slider.changed', function(){
                var item = onepage.find('.clb-slider-outer-stage > .clb-slider-stage > .clb-slider-item.active');
                var activedot = onepage.find('.clb-slider-nav-dots .clb-slider-dot.active');
                
                var paginationColor = item.data('pagination-color');
                var menuColor = item.data('header-nav-color');
                var socialColor = item.data('social-networks-color');
                var searchColor = item.data('search-color');
                var scrollColor = item.data('scroll-to-top-color');
                var logoType = item.data('header-logo-type');

                divNav.css( 'color', menuColor ? menuColor : '' );
                pagination.css( 'color', ( paginationColor ) ? paginationColor : '' );
                dots.css( 'color', ( paginationColor ) ? paginationColor : '' );
                activedot.css( 'border-color', ( paginationColor ) ? paginationColor : '' );
                social.css( 'color', ( socialColor ) ? socialColor : '' );
                search.css( 'color', ( searchColor ) ? searchColor : '' );
                scroll.css( 'color', ( scrollColor ) ? scrollColor : '' );

                if( logoType ){
                    $([Clb.logo[0], Clb.fixedLogo[0]]).css({
                        'position': 'absolute',
                        'width': '0px',
                        'height': '0px',
                        'overflow': 'hidden'
                    });

                    if( logoType == 'dark' ){
                        Clb.logoForOnepageLight.addClass('hidden');
                        Clb.logoForOnepageDark.removeClass('hidden');
                    }
                    if( logoType == 'light' ){
                        Clb.logoForOnepageDark.addClass('hidden');
                        Clb.logoForOnepageLight.removeClass('hidden');
                    }
                } else {
                    defaultLogo();
                }
            });

            $(window).on( 'scroll', function(){
                if ($(window).scrollTop() > (onepageOffset + onepageHeight) || $(window).scrollTop() < onepageOffset) {
                    divNav.css( 'color', '' );
                    defaultLogo();
                }

                if ( $(window).scrollTop() > (onepageOffset) || $(window).scrollTop() < onepageOffset) {
                    toggleSliderScrollBar('hide');
                } else {
                    toggleSliderScrollBar('show');
                }
            });
        }

        function defaultLogo() {
            Clb.logoForOnepageDark.addClass('hidden');
            Clb.logoForOnepageLight.addClass('hidden');
            $([Clb.logo[0], Clb.fixedLogo[0]]).css({
                'position': '',
                'width': '',
                'height': '',
                'overflow': ''
            });
        }

    }

    function toggleSliderScrollBar(toggle) {
        var scrollTop = $('.clb-scroll-top:not(.clb-slider-scroll-top)');
        var sliderSCrollTop = $('.clb-slider-scroll-top ');

        if (toggle == 'show') {
            scrollTop.addClass('invisible').removeClass('visible');
            sliderSCrollTop.addClass('visible').removeClass('invisible');
        } else if (toggle == 'hide') {
            scrollTop.addClass('visible').removeClass('invisible');
            sliderSCrollTop.addClass('invisible').removeClass('visible');
        }
    }
    /* ## Tabs  */

    function handleTabBox() {
        $('[data-ohio-tab-box]').each(function () {
            var box = $(this);
            var buttons = $(this).find('.tabNav_link');
            var buttonsWrap = $(this).find('.tabNav');
            var line = $(this).find('.tabNav .tabNav_line');
            var items = $(this).find('.tabItems_item');
            var options = (box.attr('data-options')) ? JSON.parse(box.attr('data-options')) : {};
            var nextBtn = $(this).find('.next-btn:not(.btn-round)');
            var tabOffset = box.offset().top;

            // Initializtion
            if (buttons.length == 0) {
                items.each(function () {
                    var title = $(this).attr('data-title');
                    box.find('.tabNav').append($(document.createElement('li')).addClass('tabNav_link ' + options.tabClass).html(title));
                });
                buttons = $(this).find('.tabNav_link');
                buttons.eq(0).addClass('active ' + options.tabActiveClass);
            }

            if ( !box.find('.tabItems_item.active').length ) {
                items.eq(0).addClass('active');
            }

            items.addClass(options.itemClass);


            // Process
            var refresh = function () {
                // Height
                var activeItem = box.find('.tabItems_item.active');
                if (box.hasClass('vertical') && buttonsWrap.outerHeight() > activeItem.outerHeight()) {
                    box.find('.tabItems').css('height', activeItem.outerHeight() + 'px');
                } else {
                    box.find('.tabItems').css('height', activeItem.outerHeight() + 'px');
                }

                // Line
                var active = box.find('.tabNav .active');
                if (box.hasClass('vertical')) {
                    line.css({
                        'height': active.outerHeight() + 'px',
                        'transform': 'translateY(' + (active.offset().top - buttonsWrap.offset().top) + 'px)'
                    });
                } else {
                    line.css({
                        'width': active.outerWidth() + 'px',
                        'transform': 'translateX(' + (active.offset().left - buttonsWrap.offset().left + buttonsWrap.scrollLeft()) + 'px)'
                    });
                }
            };

            buttons.on('click', function () {
                buttons.removeClass('active ' + options.tabActiveClass).addClass(options.tabClass);
                items.removeClass('active');

                $(this).addClass('active ' + options.tabActiveClass);
                items.eq($(this).index() - 1).addClass('active');

                refresh();
            });

            var nextTab = function (element) {
                
                element.each(function (i) {
                    if (element.eq(i).hasClass('active')) {
                        element.eq(i).removeClass('active');
                        element.eq(i).next().addClass('active ' + options.tabActiveClass);
                        return false;
                    }
                });
            }

            if ($('#masthead[data-header-fixed]').length) {
                tabOffset -= 70;
            }

            nextBtn.on('click', function () {
                event.preventDefault();
                nextTab(buttons);
                nextTab(items);
                refresh();
                $('body, html').animate({scrollTop: tabOffset}, 500);

            });

            //Single product smooth scroll to review
            $(".write-review").on("click", function (event) {
                event.preventDefault();
                var id = $(this).attr('href');
                var tab = $('#product_review');

                tab.find('.tabNav_link').removeClass('active');
                tab.find('.tabItems_item').removeClass('active');

                var top = $(id).offset().top;
                $('body,html').animate({scrollTop: (top)}, 700);

                tab.find('.tabNav_link[data-ohio-tab="reviews"]').addClass('active');
                tab.find('.tabItems_item[data-ohio-tab-content="reviews"]').addClass('active');

                refresh();
            });

            refresh();
            
        });
    };
    $(window).on('ohio:handle_tab_box', handleTabBox);

    function handleTabBoxSize() {
        $('[data-ohio-tab-box]').each(function () {
            var box = $(this);
            var activeItem = box.find('tabItems_item.active');
            var buttonsWrap = box.find('.tabNav');

            if (box.hasClass('vertical') && buttonsWrap.outerHeight() > activeItem.outerHeight()) {
                box.find('.tabItems_item').css('height', activeItem.outerHeight() + 'px');
            } else {
                box.find('.tabItems_item').css('height', activeItem.outerHeight() + 'px');
            }
        });
    };
    $(window).on('ohio:handle_tab_box_size', handleTabBoxSize);

    /* ## Video Background */

    function handleVideoBackground() {
        $('[data-arg-video-bg]').each(function () {
            var videoLink = $(this).attr('data-arg-video-bg');
            var iframe = $(document.createElement('iframe'));

            iframe.addClass('arg-video-bg').attr('src', videoLink);
            $(this).append(iframe);
        });
    }

    /* ## Theme popup */
    function handlePopup(data) {
        $(data).each(function(){
            // Activate popup
            $(this).addClass('visible');
            $(this).find('.btn-loading-disabled').addClass('btn-loading');
        });


        // setTimeout(function () {
        //     popup.addClass('open');
        // }, 30);
    }

    $(document).on('keydown', function (e) {
        var popup = $('.clb-popup');

        if (e.keyCode == 27) {
            closePopup(popup);
        }
    });

    $('body').on('click keydown', '.clb-popup .clb-close, .clb-popup .subscribe-nothanks-btn', function (e) {
        e.preventDefault(e);
        var popup = $(this).closest('.clb-popup');
        closePopup(popup);
    });

    function closePopup(popup) {
        // Close button
        setTimeout(function () {
            popup.removeClass('visible');
            popup.find('.clb-popup-holder').empty();
            popup.find('.clb-popup-holder').removeClass().addClass('clb-popup-holder');

            if ($('.site-footer.sticky').length && !Clb.isMobile) {
                Clb.header.css('z-index', '1000');
            }
        }, 200);

    }

    /* ## Video popup */
    function handleVideoPopup() {
        $(document).on('click', '.video-module', function (event) {
            event.preventDefault();
            handlePopup('.clb-popup.custom-popup');
            var popupInner = $('.clb-popup-holder').addClass('clb-video-popup');
            popupInner.siblings('.btn-loading-disabled').removeClass('btn-loading');
            var autoplay = $(this).attr('data-video-module-autoplay') ? 1 : 0;

            // Append video
            popupInner.append($(document.createElement("iframe")).attr({
                'src': $(this).attr('data-video-module') + "?autoplay=" + autoplay + "",
                'allowfullscreen': 'true',
                'frameborder': '0'
            }));

            setTimeout(function(){
                $('.clb-popup').removeClass('container-loading');
            }, 1000)
        });
    }

    /* ## Product quickview */

    function handleQuickviewPopup(items) {
        var link;

        if (items === undefined ) {
            link = $('.quickview-link');
        } else {
            link = items.find('.quickview-link');
        }

        link.on("click", function (event) {
            event.preventDefault
            Clb.containerLoading.removeClass('hidden');
            handlePopup('.clb-popup.custom-popup');
            var link = $(this);

            $.ajax({
                url: ohioVariables.url,
                data: {
                    action: 'ohio_product_modal',
                    product_id: $(this).attr('data-product-id'),
                },
                dataType: 'html',
                type: 'POST',
                success: function (data) {
                    var popupInner = $('.custom-popup .clb-popup-holder').addClass('clb-popup-product');
                    popupInner.siblings('.btn-loading-disabled').removeClass('btn-loading');
                    popupInner.append(data);

                    // Add link for title
                    var productTitle = $('.clb-popup-product .woo_c-product-details-title');
                    var productLink = link.parent().find('.slider a');

                    productTitle.wrap('<div class="product-popup-title-link"><a href=' + productLink.attr('href') + ' target="_blank"></a></div>');

                    Clb.containerLoading.addClass('hidden');

                    handleSingleProductGallery(popupInner.find('.woo_c-product'), popupInner.find('.post-' + link.attr('data-product-id') + ''));
                    btnPreloader();
                    handleCustomSelect();
                }
            });
        });
    }

    // function popup_counter(event) {
    //     var element = event.target;
    //     var items = event.item.count;
    //     var item = event.item.index + 1;
    //     $('.numbers_slides').html(item + " / " + items)
    // }

    /* # Portfolio */

    function handlePortfolio() {
        // Filter
        $('[data-ohio-portfolio-grid]').each(function () {
            var isotopeGrid = $(this).find('[data-isotope-grid]');
            var filterbar = $(this).find('[data-filter="portfolio"]');
            var isDoubleWidth = false;

            isotopeGrid.find('.grid-item').each(function(){
                if ($(this).hasClass('double-width')) {
                    isDoubleWidth = true;
                } else {
                    isDoubleWidth = false;
                    return false;
                }
            });

            if (isotopeGrid.isotope) {
                isotopeGrid.isotope({
                    percentPosition: true,
                    masonry: {
                        columnWidth: isDoubleWidth ? '.grid-item' : '.grid-item:not(.double-width)'
                    }
                });
            }

            // Generate category numbers
            if (filterbar.attr('data-filter-paged')) {
                filterbar.find('a').each(function () {
                    var category = $(this).attr('data-isotope-filter');

                    var number = (category == '*') ? isotopeGrid.find('> div').length : isotopeGrid.find(category).length;

                    if (number < 10) {
                        number = '0' + number;
                    }

                    $(this).find('.num').html(number);
                });
            }

            filterbar.find('a').on('click', function () {
                filterbar.find('.active').removeClass('active');
                $(this).addClass('active');

                if (isotopeGrid.isotope) {
                    isotopeGrid.isotope({
                        filter: $(this).attr('data-isotope-filter')
                    });
                }

                setTimeout(function () {
                    if (typeof(AOS) != 'undefined') {
                        AOS.refresh();
                    }
                    if (window.vc_waypoints) {
                        window.vc_waypoints();
                    }
                }, 600);

                return false;
            });

            if (window.location.hash) {
                filterbar.find('a[href="' + window.location.hash + '"]').trigger('click');
            }
        });
    }

    function handlePortfolioPopup(){
        var portfolioPopupSlider = $('.clb-portfolio-lightbox-media .slider');

        var loopSetting         = Boolean(portfolioPopupSlider.attr('data-slider-loop')),
            navSetting          = Boolean(portfolioPopupSlider.attr('data-slider-navigation')),
            bulletsSetting      = Boolean(portfolioPopupSlider.attr('data-slider-dots')),
            paginationSetting   = Boolean(portfolioPopupSlider.attr('data-slider-pagination')),
            mousescrollSetting  = Boolean(portfolioPopupSlider.attr('data-slider-mousescroll')),
            autoplaySetting     = Boolean(portfolioPopupSlider.attr('data-slider-autoplay')),
            autoplayTimeSetting = portfolioPopupSlider.attr('data-slider-autoplay-time');

        
        $('[data-clb-portfolio-lightbox-slider]').each(function(){
            if (!$(this).hasClass('clb-slider')) {
                $(this).clbSlider({
                    dots: bulletsSetting,
                    pagination: paginationSetting,
                    mousewheel: mousescrollSetting,
                    autoplay: autoplaySetting,
                    autoplayTimeout: autoplayTimeSetting,
                    loop: loopSetting,
                    navBtn: navSetting,
                    drag: true,
                });
            }
        });

        portfolioPopupSlider.find('.clb-slider-nav-btn .btn-round').removeClass('btn-round-light');

        $('.btn-lightbox, .btn-lightbox-init').on('click', function(e){
            e.preventDefault();
            var portfolioItemId = $(this).parents('.portfolio-item').attr('data-portfolio-popup');

            if (portfolioItemId != undefined) {
                loadLightboxGallery.call( document.querySelector( '#' + portfolioItemId ) );
                handlePopup('#' + portfolioItemId);
            }

        });
    }

    function loadLightboxGallery() {
        if ( !this.getAttribute( 'data-lightbox-loaded' ) ) {
            var self = this;
            var stage = self.querySelector( '.clb-portfolio-lightbox-media' );
            var loaded = 0;
            
            stage.classList.add( 'container-loading' );

            $(this).find( '[data-ohio-lightbox-image]' ).each(function() {
				var originalImage = this;
				var image = new Image();
				image.src = originalImage.getAttribute( 'data-ohio-lightbox-image' );
				image.onload = function() {
					originalImage.style.backgroundImage = "url(" + image.src + ")";
					loaded++;
					
					if (loaded === $(self).find( '[data-ohio-lightbox-image]' ).length) {
						stage.classList.remove( 'container-loading' );
						self.setAttribute( 'data-lightbox-loaded', true );
					}
				}
			});
        }
    }

    /* ## Scroll content */
    function handleScrollContent(){
        $('[data-ohio-content-scroll]').each(function(){
            var content = $(this),
                parent = $( $(this).attr('data-ohio-content-scroll') ),
                timeout = null, startTop = 0,
                contentLeft = 0,
                minWidth = 768,
                header = $('#masthead[data-header-fixed]'),
                subheader = $('.subheader'),
                wpadminbar = $('#wpadminbar'),
                headerSpacer = $('.full-top-position').length ? 130 : 0;
            var refresh = function(){
                var scrollTop = $(window).scrollTop();

                if( header.length ){
                    scrollTop += header.outerHeight();

                    if( subheader.length ){
                        scrollTop += subheader.outerHeight();
                    }
                }

                if( $('#wpadminbar').length ){
                    scrollTop += $('#wpadminbar').outerHeight();
                }

                if( $(window).width() >= minWidth && content.outerHeight() < parent.outerHeight() ){
                    // scroll start
                    if( scrollTop > startTop ){
                        var headerTop = 0;
                        if( header.length ){
                            headerTop += header.outerHeight();

                            if( subheader.length ){
                                headerTop += subheader.outerHeight();
                            }
                        }
                        
                        if( $('#wpadminbar').length ){
                            headerTop += $('#wpadminbar').outerHeight();
                        }
                        content.css({
                            'max-width': (content.outerWidth()) + 'px',
                            'position': 'fixed',
                            'top': headerTop + 'px',
                            'left': contentLeft + 'px'
                        });
                    } else {
                        content.css({
                            'max-width': 'none',
                            'position': 'relative',
                            'top': '0px',
                            'left': '0px'
                        });
                    }
                    // scroll end
                    if( scrollTop + content.outerHeight() > parent.offset().top + parent.outerHeight() ){
                        var top = parent.outerHeight() - content.outerHeight() - headerSpacer;

                        content.css({
                            'max-width': 'none',
                            'position': 'relative',
                            'top': (top) + 'px',
                            'left': '0' + 'px'
                        });
                    }
                } else {
                    content.css({
                        'max-width': 'none',
                        'position': 'relative',
                        'top': '0px',
                        'left': '0px'
                    });
                }
            };

            var resize = function(){
                content.css( 'position', 'static' );

                contentLeft = content.offset().left;
                startTop = content.offset().top;

                clearTimeout( timeout );
                timeout = setTimeout(function(){
                    content.css({
                        'position': 'absolute',
                        'top': (content.offset().top - parent.offset().top) + 'px',
                        'left': (content.offset().left - parent.offset().left) + 'px'
                    });
                    refresh();
                }, 30);
            };

            setTimeout( function(){ resize(); }, 100);
            $(window).on('scroll', refresh ).on( 'resize', resize );
        });
    }

    // ## Shop masonry

    function handleShopMasonry() {
        var shopMasonry = $('[data-shop-masonry]');
        if ( !Clb.isElementorPage) {
            shopMasonry.each(function(){

                var product = $(this).find('> li.product');
    
                if (shopMasonry && !shopMasonry.parents('.shop-product-type_3').length && product.length > 1 ) {
                    shopMasonry.masonry({
                        percentPosition: true,
                        columnWidth: ' .product:not(.double_width)'
                    });
                }
            })
        }
    }

    /* # Product */

    /* ## Ajax cart */

    jQuery(function ($) {

        $(".input-text.qty.text").on('keyup mouseup', function () {
            var value = $(this).val();
            $("#product_quantity").val(value)
        });

        $(document).on('click', '.single_add_to_cart_button', function (e) {


            if ($(this).hasClass('out-of-stock') || $(this).hasClass('product_type_variable') || $(this).closest('form').hasClass('external-product') || $(this).hasClass('product_type_external') || ( !$(this).hasClass('single_add_to_cart_button') && $(this).parents('ul.products') ) ) return;

            e.preventDefault();

            var $variation_form = $(this).closest('.variations_form');
            var var_id = $variation_form.find('input[name=variation_id]').val();
            var product_id = $variation_form.find('input[name=product_id]').val();
            var quantity = $variation_form.find('input[name=quantity]').val();

            $('.ajaxerrors').remove();
            var item = {},
                check = true;
            var variations = $variation_form.find('select[name^=attribute]');
            if (!variations.length) {
                variations = $variation_form.find('[name^=attribute]:checked');
            }
            if (!variations.length) {
                variations = $variation_form.find('input[name^=attribute]');
            }
            variations.each(function () {
                var $this = $(this),
                    attributeName = $this.attr('name'),
                    attributevalue = $this.val(),
                    index,
                    attributeTaxName;
                $this.removeClass('error');
                if (attributevalue.length === 0) {
                    index = attributeName.lastIndexOf('_');
                    attributeTaxName = attributeName.substring(index + 1);
                    $this
                        .addClass('required error')
                        .before('Please select ' + attributeTaxName + '')
                    check = false;
                } else {
                    item[attributeName] = attributevalue;
                }
            });

            if (!check) {
                return false;
            }

            var $thisbutton = $(this);
            
            if ($thisbutton.is('.single_add_to_cart_button')) {
                $thisbutton.removeClass('added');
                $thisbutton.addClass('loading');
                // if ($thisbutton.parents(".variations_form")[0]) {
                //     var product_id = $variation_form.find('input[name=product_id]').val();
                //     var quantity = $variation_form.find('input[name=quantity]').val();
                //     var data = {
                //         action: 'ohio_ajax_add_to_cart_woo',
                //         product_id: product_id,
                //         quantity: quantity,
                //         variation_id: var_id,
                //         variation: item
                //     };
                // } else {
                //     if ($thisbutton.closest('.woocommerce-add-to-cart').length > 0) {
                //         var product_id = $thisbutton.closest('.woocommerce-add-to-cart').find("input[name=product_id]").val();
                //         var quantity = $thisbutton.closest('.woocommerce-add-to-cart').find("input[name=quantity]").val();
                //         var data = {
                //             action: 'ohio_ajax_add_to_cart_woo_single',
                //             product_id: product_id,
                //             quantity: quantity
                //         };
                //     } else {
                //         var product_id = $thisbutton.siblings("input[name=product_id]").val();
                //         var data = {
                //             action: 'ohio_ajax_add_to_cart_woo_single',
                //             product_id: product_id,
                //             quantity: 1
                //         };
                //     }
                // }

                if ( $('form.cart').hasClass('woo_c-cart-form') ) {
                    var serializeFormFields = $('form.cart:not(.sticky-cart-form)').serializeArray();

                    var data = {};
                    $(serializeFormFields ).each(function(index, obj){
                        data[obj.name] = obj.value;
                    });
    
                    data.action = 'ohio_ajax_add_to_cart_woo';
                } else if ( $thisbutton.parents('.product-buttons-item').length ) {
                    var product_id = $thisbutton.siblings("input[name=product_id]").val();
                    var data = {
                        action: 'ohio_ajax_add_to_cart_woo_single',
                        product_id: product_id,
                        quantity: 1
                    };
                } else {
                    var serializeFormFields = $('form.cart:not(.sticky-cart-form)').serializeArray();

                    var data = {};
                    $(serializeFormFields ).each(function(index, obj){
                        data[obj.name] = obj.value;
                    });
                    
                    if ( data['product_id'] == undefined) {
                        data['product_id'] = data['add-to-cart'];
                    }

                    delete data['add-to-cart'];

                    data.action = 'ohio_ajax_add_to_cart_woo';
                }

                


                $('body').trigger('adding_to_cart', [$thisbutton, data]);
                $.post(wc_add_to_cart_params.ajax_url, data, function (response) {
                    if (!response)
                        return;

                    var this_page = window.location.toString();
                    this_page = this_page.replace('add-to-cart', 'added-to-cart');
                    if (response.error && response.product_url) {

                        window.location = response.product_url;
                        return;
                    }
                    if (wc_add_to_cart_params.cart_redirect_after_add === 'yes') {
                        window.location = wc_add_to_cart_params.cart_url;
                        return;
                    } else {
                        $thisbutton.removeClass('loading');
                        var fragments = response.fragments;
                        var cart_hash = response.cart_hash;
                        if (fragments) {
                            $.each(fragments, function (key) {
                                $(key).addClass('updating');
                            });
                        }
                        $('.shop_table.cart, .updating, .cart_totals').fadeTo('400', '0.6').block({
                            message: null,
                            overlayCSS: {
                                opacity: 0.6
                            }
                        });
                        $thisbutton.addClass('added');
                        $thisbutton.text('Product Added');

                        var $classes = '';
                        if (($('body').hasClass('single-product') || $thisbutton.parents('.clb-popup').length) && !$thisbutton.hasClass('sticky-product-cart')) {
                            $classes = ' btn btn-small view-cart';
                        } else if ($thisbutton.hasClass('sticky-product-cart')) {
                            $classes = $classes + ' btn-link view-cart';
                        } else {
                            $classes = $classes + ' btn btn-small view-cart';
                        }

                        $thisbutton.after('<a href="' + ohioVariables.cart_page + '" class="' + $classes + '">' + ohioVariables.view_cart + '</a>');
                        $thisbutton.css('display', 'none');

                        if (fragments) {
                            $.each(fragments, function (key, value) {
                                $(key).replaceWith(value);
                            });
                        }

                        $('.widget_shopping_cart, .updating').stop(true).css('opacity', '1').unblock();
                        $('.shop_table.cart').on('load', this_page + ' .shop_table.cart:eq(0) > *', function () {
                            $('.shop_table.cart').stop(true).css('opacity', '1').unblock();
                            $(document.body).trigger('cart_page_refreshed');
                        });
                        $('.cart_totals').on('load', this_page + ' .cart_totals:eq(0) > *', function () {
                            $('.cart_totals').stop(true).css('opacity', '1').unblock();
                        });

                        var productName = '';
                        if ($thisbutton.closest('.product').find('h1').length > 0) {
                            productName = $thisbutton.closest('.product').find('h1').text();
                        } else {
                            productName = $thisbutton.closest('.product').find('.product-item-title').text();
                        }
                        if (productName == '') {
                            productName = $thisbutton.closest('.clb-popup-product').find('h1').text();
                        }
                        $('footer').before('<div class="woo_c-message-group"><div class="ajax-cart-response message-box success">' + productName + ' ' + ohioVariables.add_to_cart_message + '<a class="view_cart_button" href="' + ohioVariables.cart_page + '">' + ohioVariables.view_cart + '</a><div class="btn-round btn-round-small btn-round-light clb-close dark-mode-reset" tabindex="0"><i class="ion ion-md-close"></i></div></div></div>');
                    }
                });
                return false;
            } else {
                return true;
            }
        });
    });

    /* # Lazy load */

    function lazyLoad(elem) {
        if ( elem.data( 'lazy-load-loading' ) ) {
            return;
        }

        elem.data( 'lazy-load-loading', 'true' ).addClass( 'active' );

        let currentPage = elem.data( 'lazy-page' ) ? parseInt( elem.data( 'lazy-page' ) ) : 1;
        currentPage += 1;

        elem.data( 'lazy-page', currentPage );

        let urlPattern = elem.data( 'lazy-load-url-pattern' );
        if (urlPattern) {
            urlPattern = urlPattern.replace( '{{page}}', currentPage );
        } else {
            urlPattern = 'page/' + currentPage;
        }

        let scopeSlug = elem.data('lazy-load-scope');

        // Get page content
        $.ajax({
            url: urlPattern,
            success: function (content) {
                var dom = $(new DOMParser().parseFromString(content, 'text/html')),
                    items = dom.find('[data-lazy-item][data-lazy-scope="' + scopeSlug + '"]');

                var container = elem.parent().find('[data-lazy-container="' + scopeSlug + '"]');
                if (container.length == 0) {
                    container = $('[data-lazy-container="' + scopeSlug + '"]')
                }
                items.parent().find('[data-aos]').attr('data-aos-offset', '20000000');
                items.addClass('hidden');

                container.append(items);
                $(document.body).append(dom.find('[data-lazy-to-footer]'));

                // Check images is loaded
                var metroImages = [];
                items.find('[data-ohio-bg-image]').each(function () {
                    var img = document.createElement('img');
                    img.src = $(this).attr('data-ohio-bg-image');
                    metroImages.push(img);
                });
                var checkImages = function () {
                    var result = true, result2 = true;

                    items.find('img').each(function () {
                        if (!this.complete) {
                            result = false;
                            $(this).on('load', checkImages);
                            return false;
                        }
                    });

                    if (result) {
                        for (var i = 0; i < metroImages.length; i++) {
                            if (!metroImages[i].complete) {
                                result2 = false;
                                metroImages[i].onload = checkImages;
                                return false;
                            }
                        }
                    }

                    if (result && result2) {
                        items.removeClass('hidden');
                        handlePortfolioPopup();
                        handlePortfolio();
                        handleQuickviewPopup(items);

                        var portfolio_data_grid = container.hasClass('portfolio-grid') && container.isotope;
                        var woo_data_grid = container.attr('data-shop-masonry') && container.isotope;

                        if (portfolio_data_grid || woo_data_grid) {
                            container.isotope()
                                .isotope('appended', items)
                                .isotope('layout');
                        }

                        if (container.hasClass('ohio-masonry')) {
                            container.masonry('appended', items, false);
                        }

                        items.parent().find('[data-aos]').attr('data-aos-offset', '');

                        if (typeof(AOS) != 'undefined') {
                            // For mobile phones
                            AOS.init();

                            AOS.refresh();
                        }

                        handleOhioBgImages();

                        if (currentPage >= parseInt(elem.attr('data-lazy-pages-count'))) {
                            elem.remove();
                            $('body').trigger('ohio:cursor_mouseleave');
                        } else {
                            // Wait height animation
                            elem.removeClass('active');
                            if (elem.attr('data-lazy-load') == 'scroll') {
                                setTimeout(function () {
                                    elem.removeData('lazy-load-loading');
                                    handleLazyLoadScroll();
                                }, 500);
                            } else {
                                elem.removeData('lazy-load-loading');
                            }
                        }

                    }
                };
                checkImages();

                handleInteractiveLinksGrid();
                handleMasonry();

                
            }
        });
    }

    function handleLazyLoadScroll() {
        $('[data-lazy-load="scroll"]').each(function () {
            if ($(document).scrollTop() + $(window).height() > $(this).offset().top) {
                lazyLoad($(this));
            }
        });
    }

    function handleLazyLoadClick() {
        $('[data-lazy-load="click"]').on('click', function () {
            lazyLoad($(this));
        });
    }

    function handleAOS() {
        if (typeof(AOS) != 'undefined') {
            setTimeout(function () {
                AOS.init();
            }, 600);
        }
    }

    function handleStretchContent() {
        if ( !$('.page-sidebar').length ) {

            $('[data-vc-stretch-content="true"], [data-vc-full-width="true"], [data-ohio-stretch-content="true"], .alignfull').each(function () {
                if (Clb.isRtl) {
                    $(this).css('right', '0');
                    
                    $(this).css({
                        'width': $('#page').width() + 'px',
                        'right': ($('#page').offset().left - $(this).offset().left) + 'px'
                    });
                } else {
                    $(this).css('left', '0');
                    
                    $(this).css({
                        'width': $('#page').width() + 'px',
                        'left': ($('#page').offset().left - $(this).offset().left) + 'px'
                    }); 
                }

            });

            $('[data-vc-full-width="true"]').not('[data-vc-stretch-content="true"]').each(function () {
                var padding = ($('#page').outerWidth() - $(this).closest('.page-container').outerWidth()) / 2;
                if ( !Clb.isMobile ) {
                    padding = padding + 10;
                }

                if ( Clb.header.hasClass('header-6') ) {
                    if ( $(this).parents('.single-product-tabs').length ) {
                        $(this).css({
                            'padding-left': padding + 'px',
                            'padding-right': padding + 90 + 'px',
                        });
                    } 
                } else {
                    if ( $(this).parents('.single-product-tabs').length ) {
                        $(this).css({
                            'padding-left': padding + 'px',
                            'padding-right': padding + 'px',
                        });
                    }
                }

            });

            $('.rev_slider_wrapper.fullwidthbanner-container, .rev_slider_wrapper.fullscreen-container').each(function () {
                $(this).css('padding-left', $('#page').offset().left + 'px');
            });

            setTimeout(function () {
                var revSliders = $('.rev_slider');
                if (revSliders.revredraw) {
                    revSliders.revredraw();
                }
            }, 30);
        }
    }

    window.ohioRowRefresh = handleStretchContent;

    function handleScrollEffects() {
        $('[data-ohio-scroll-anim]').each(function () {
            var anim = $(this).attr('data-ohio-scroll-anim');

            if ($(this).offset().top < ($(window).scrollTop() + $(window).height() - 50)) {
                $(this).removeClass(anim).removeAttr('data-ohio-scroll-anim');
            }
        });
    }

    function handleOhioHeight() {
        var windowHeight = $(window).height();
        var footerHeight = $('.site-footer').outerHeight();
        var headerCapHeight = ($('.header-cap').length) ? $('.header-cap').outerHeight() : 0;
        var wpAdminHeight = ($('#wpadminbar').length) ? $('#wpadminbar').outerHeight() : 0;
        var headerTitleHeight = ($('.clb-page-headline').length) ? $('.clb-page-headline').outerHeight() : 0;

        $('[data-ohio-full-height]').each(function () {
            var height = windowHeight - footerHeight - headerCapHeight - wpAdminHeight - headerTitleHeight;

            $(this).css('height', (height) + 'px');
        });
    }

    function handleAlignContentInStretchRow(){
        var containerWidth = $('#content').outerWidth();
        var containerOffset = $('#content').offset().left;
        var halfContainer = containerWidth/2 - $('#content .page-container').width()/2;

        // Align content column in wrapper container
        var align = function( self, isSplitbox, isParallax, isRight, innerSection ){
            if (innerSection) {
                var column = self.find( '> .wpb_column > .vc_column-inner, > .elementor-container > .elementor-row > .elementor-column > .elementor-column-wrap .elementor-widget-wrap' );
            } else {
                var column = self.find( '> .wpb_column, > .elementor-container > .elementor-row > .elementor-column > .elementor-column-wrap .elementor-widget-wrap' );
            }

            if( isSplitbox ){

                column = self.find( '> .split-box-container' );
            }
            if( isParallax ){

                column = self.find( '> .parallax-content' );
            }
            column = ( isRight ) ? column.last() : column.eq(0);


            if( !Clb.isMobile ){
                column.css( 'padding-' + ( isRight ? 'right' : 'left' ), ( halfContainer ) + 'px' );
            } 
        };

        // Stretch column
        var stretch = function( self, isSplitbox, isRight, innerSection ){

            if (innerSection) {
                var column = self.find( isSplitbox ? '> .split-box-container' : '> .wpb_column > .vc_column-inner, > .elementor-container > .elementor-row > .elementor-column > .elementor-column-wrap' );
            } else {
                var column = self.find( isSplitbox ? '> .split-box-container' : '> .wpb_column > .vc_column-inner > .wpb_wrapper, > .elementor-container > .elementor-row > .elementor-column > .elementor-column-wrap' );
            }
            column.css('min-width', '');

            column = ( isRight ) ? column.last() : column.eq(0);
            column.css({ 'position': '', 'left': '', 'width': '' }).addClass('stretch-content');

            if( column.length ){
                if( isRight ){
                    column.css( 'min-width', (containerWidth - column.offset().left ) + 'px');
                } else {
                    column.css({
                        'position': 'relative',
                        'left': -( column.offset().left) + 'px',
                        'min-width': ( column.offset().left + column.outerWidth() ) + 'px'
                    });
                }
                if( Clb.isMobile ){
                    column.css({
                        'min-width': '',
                        'left': ''
                    });
                }
            }
        };

        $('.clb-column-padding-left').each(function(){
            align( $(this), $(this).hasClass('split-box'), $(this).hasClass('parallax'), false, $(this).hasClass('inner') );
        });

        $('.clb-column-padding-right').each(function(){
            align( $(this), $(this).hasClass('split-box'), $(this).hasClass('parallax'), true, $(this).hasClass('inner') );
        });

        $('.clb-stretch-column-left').each(function(){
            stretch( $(this), $(this).hasClass('split-box'), false, $(this).hasClass('inner') );
        });

        $('.clb-stretch-column-right').each(function(){
            stretch( $(this), $(this).hasClass('split-box'), true, $(this).hasClass('inner') );
        });

    }

    function instagramFeedCustomCursor() {
        var instaFeed = $('#sb_instagram .sbi_item .sbi_photo_wrap');

        instaFeed.each(function(){
            $(this).attr('data-cursor-class', 'cursor-link');
        });
    }

    function handleMutationObserver() {
        var target = $('#sb_instagram #sbi_images, #order_review');
        if (target != undefined) {
            target.each(function () {
                var target = this;
                var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                var observer = new MutationObserver(function (mutations) {
                    mutations.forEach(function (mutation) {
                        if ( $(target).attr('id') == 'sbi_images') {
                            if ( mutation.addedNodes.length ) {
                                instagramFeedCustomCursor();
                                observer.disconnect(); //Can disconect whole function 'handleMutationObserver'
                            }
                        }

                        if ( $(target).attr('id') == 'order_review') {
                            if ( mutation.addedNodes.length ) {
                                btnPreloader();
                                observer.disconnect(); //Can disconect whole function 'handleMutationObserver'
                            }
                        }
                    });
                });


                // Settings observer
                var config = {
                    attributes: true,
                    characterData: true,
                    childList: true,
                    subtree: true,
                    attributeOldValue: true,
                    characterDataOldValue: true,
                }

                // Start observer

                observer.observe(this, config);

            });
        }
    }

    $(document).on('click', '.search_results_btn', function(){
       $('.woocommerce-product-search').trigger('submit');
    });

    // Search action to keyup
    $('.woocommerce-product-search input[name=s]').on("keyup", function (event) {
        if (!$('.woocommerce-product-search .search-submit').hasClass('btn-loading')) {
            $('.woocommerce-product-search .search-submit').addClass('btn-loading');
        }

        var form = $(this).closest('form');
        var data = {
            'action': 'ohio_ajax_search',
            'search_query': $(this).val(),
            'search_term': $('select[name="search_term"]').val()
        };

        $.post(ohioVariables.url, data, function (response) {
            $('.search_results').empty();
            $('.woocommerce-product-search .search-submit').removeClass('btn-loading');
            $('.search_results').append(response);
            form.attr('action', $('#search_form_action').attr('data-href'));
            btnPreloader();
        });
    });

    // Search action to focus
    $('.woocommerce-product-search input[name=s]').on("focus", function (event) {

        if ($('.search_results').children().length == 0) {
            if (!$('.woocommerce-product-search .search-submit').hasClass('btn-loading')) {
                $('.woocommerce-product-search .search-submit').addClass('btn-loading');
            }

            var form = $(this).closest('form');
            var data = {
                'action': 'ohio_ajax_search',
                'search_query': $(this).val(),
                'search_term': $('select[name="search_term"]').val()
            };

            $.post(ohioVariables.url, data, function (response) {
                $('.search_results').empty();
                $('.woocommerce-product-search .search-submit').removeClass('btn-loading');
                $('.search_results').append(response);
                form.attr('action', $('#search_form_action').attr('data-href'));
                btnPreloader();
            });
        }
    });

    // Search action to select category
    $(document).on('change', '.woocommerce-product-search select', function(){
        if (!$('.woocommerce-product-search .search-submit').hasClass('btn-loading')) {
            $('.woocommerce-product-search .search-submit').addClass('btn-loading');
        }

        var form = $(this).closest('form');
        var data = {
            'action': 'ohio_ajax_search',
            'search_query': $('input[name=s]').val(),
            'search_term': $('select[name="search_term"]').val()
        };

        $.post(ohioVariables.url, data, function (response) {
            $('.search_results').empty();
            $('.woocommerce-product-search .search-submit').removeClass('btn-loading');
            $('.search_results').append(response);
            form.attr('action', $('#search_form_action').attr('data-href'));
        });
    });

    //Btn preloader
    function btnPreloader() {
        var buttons = $('.btn-loading-disabled');
        btnLoading(buttons);

        function btnLoading(btn) {
            btn.each(function () {
                $(this).on('click', function () {
                    if (!($(this).hasClass('disabled'))) {
                        $(this).toggleClass('btn-loading');
                        $(this).find('i').hide();
                    }
                });
            });
        }
    }

    /*Single product*/

    function handleSingleProductGallery(scrollContainer, product) {

        if (scrollContainer === undefined) {
            var scrollContainer = $('body, html');
        }

        if (product === undefined) {
            var product = $('.woo_c-product.single-product');
        }

        var productImages = product.find('.woo_c-product-image .image-wrap img');

        if ( productImages.length > 1 && !product.find('.product-image-dots').length) {
            
            if ( !product.parents('.clb-popup-product').length ) {
                var data = 'data-ohio-content-scroll="#scroll-product"';
            }

            var productContainer = product.find('.woo_c-product-image').addClass('with-gallery');

            var imageDots = $('<div class="product-image-dots" ' + data + '></div>');

            imageDots.prependTo(productContainer);

            productImages.each(function(i){
                var clonedImg = $(this).clone();
                var dotImage = $('<div class="product-image-dot" ></div>');

                clonedImg.appendTo(dotImage);
                dotImage.appendTo(imageDots);
                if (i == 0) {
                    dotImage.addClass('active');
                }
            });

            if (!product.parents('.clb-popup').length) {
                imageDots.css('height', imageDots.height());
            }
            

            var productOffset = product.offset().top;
            var productImageSlider = product.find('.woo_c-product-image-slider');

            productImageSlider.css({
                'width': productImageSlider.outerWidth()
            });

            var productImageDots = $('.product-image-dot');

            var imagesOffset = [];

            if (product.parents('.clb-popup-product').length) {
                var sumHeight = 0;
                productImages.each(function(){
                    var imgHeight = $(this).height();
                    imagesOffset.push(sumHeight);
                    sumHeight += imgHeight;
                });
            } else {
                productImages.each(function(){
                    imagesOffset.push($(this).offset().top);
                });
            }

            //Slider
            var iteration = 0;

            productImageDots.on('click', function(){
                $('.product-image-dot').removeClass('active');
                $(this).addClass('active');
                var index = $('.product-image-dot').index(this);
                iteration = index;
                var curentImage = $(productImages[index]);
                scrollContainer.animate({
                    scrollTop: imagesOffset[iteration]
                }, 500)
            });

            scrollContainer.on('scroll wheel', function(e){
                var y = e.originalEvent.deltaY;

                if (($(this).scrollTop() >= imagesOffset[iteration]) && y > 0) {
                    productImageDots.removeClass('active');
                    $(productImageDots[iteration]).addClass('active');
                    iteration++;
                }
                else if (y < 0 && ($(this).scrollTop() >= imagesOffset[iteration - 1] && $(this).scrollTop() < imagesOffset[iteration])) {
                    iteration--;
                    productImageDots.removeClass('active');
                    $(productImageDots[iteration]).addClass('active');
                }

                if (iteration > productImages.length - 1 && y < 0) {
                    iteration--;
                }
            });
        }
        var singleProductGallery = $('.woocommerce-product-gallery');

        if (Clb.isPad) {
            singleProductGallery.clbSlider({
                dots: false,
                drag: true,
                navBtn: false
            });
        } else {
            setTimeout(function(){
                singleProductGallery.clbSlider('destroy');
            }, 400);
        }
    }

    //Sticky product

    function handleStickyProduct() {
        var productImg = $('.woo_c-product-image');
        var stickyProduct = $('.sticky-product');
        var stickyProductImg = stickyProduct.find('.sticky-product-img');
        var stickyProductNav = $('.sticky-nav-product');

        $(window).scroll(function () {
            if ($(window).scrollTop() > productImg.height()) {
                stickyProduct.addClass('visible');
                stickyProductNav.addClass('invisible');
            } else {
                stickyProduct.removeClass('visible');
                stickyProductNav.removeClass('invisible');
            }
        });

        if (Clb.isMobile) {
            var contentWidth = $('#content').height();
            var contentOffset = $('#content').offset().top;
            var contentEnd = contentWidth + contentOffset - $(window).height();

            $(window).scroll(function () {
                if ($(window).scrollTop() > contentEnd) {
                    stickyProduct.removeClass('visible');
                }
            });
        }

        stickyProductImg.on("click", function () {
            $('body, html').animate({scrollTop: 0}, 500);
        });

        stickyProduct.find('.clb-close').on('click', function(){
            stickyProduct.removeClass('visible');
            setTimeout(function(){
                stickyProduct.css('display', 'none');
            }, 300);
        });
    }
    /*language dropdown*/

    //*Hide empty language container*
    $(function () {
        var language = $('.header-wrap .right .languages');

        if (language.find('.sub-nav.languages').children().length == 0) {
            language.hide();
        }
    });

    function centeredLogo() {
        /*header-4 centered logo*/
        var header = $('.header-4');
        var headerNav = header.find('.main-nav');
        var headerContainer = header.find('.page-container').length > 0;
        var topPart = header.find('.top-part');

        //Menu-others have to be equal width
        header.find('.left-part, .right-part').css('width', menuOtherEqualWidth(header));

        var nav = $('.site-branding');
        var navMenu = $('#mega-menu-wrap').find('> ul:not(.mobile-menu) > li');
        var logoWidth = nav.width() - ($(window).width() * 0.0135);
        var centerLi = findCenterLi(navMenu);
        var firstElems = navMenu.slice(0, centerLi + 1);
        var lastElems = navMenu.slice(centerLi + 1);
        var navResidual = headerContainer ? 0 : 25;
        var offsetNav = headerContainer ? nav.position().left : nav.offset().left;

        $(navMenu[centerLi]).css('margin-right', logoWidth + "px");

        if (navMenu.length > 0) {
            var firstElemsW = widthElements(firstElems),
                lastElemsW = widthElements(lastElems);

            if (firstElemsW < lastElemsW) {
                var widthElems = (lastElemsW - firstElemsW) / 2;
                var centerMenu = (headerNav.width() / 2) - widthElems - logoWidth / 2 + navResidual;
                headerNav.css("transform", "translateX(-" + centerMenu + "px)");
            } else {
                var widthElems = (firstElemsW - lastElemsW) / 2;
                var centerMenu = (headerNav.width() / 2) + widthElems - logoWidth / 2 + navResidual;
                headerNav.css("transform", "translateX(-" + centerMenu + "px)");
            }
        } else {
            headerNav.css({
                "left": "auto",
                "right": "170px"
            });
        }

        headerNav.css({
            "left": offsetNav + "px",
            //"width": topPart.width() - menuOtherEqualWidth(header) * 2 + 'px'
        });
        $(".header-4").css('opacity', '1');
        
    }

    //Calculate width first and last elements
    function widthElements(elements) {
        var elemsWidth = 0;

        $.each(elements, function (i, li) {
            var w_li = $(li).width();
            elemsWidth = elemsWidth + w_li;
        });

        return elemsWidth;
    }

    //Find center Li element
    function findCenterLi(menu) {
        if (menu.length % 2 == 0) {
            return Math.round((menu.length / 2) - 1);
        }
        else {
            return Math.round((menu.length / 2) - 2);
        }
    }

    //Menu other equal width
    function menuOtherEqualWidth(header) {
        var menuOther = header.find('.left-part, .right-part');
        var menuOtherWidth = 0;

        menuOther.each(function(){
            if (menuOtherWidth < $(this).width() ) {
                menuOtherWidth = $(this).width();
            }
        });

        return menuOtherWidth + 1;
    }

    /*Header 6*/

    $.each($('header.header-5'), function () {
        $(".menu-depth-1").removeClass('sub-menu-wide');
    });

    /*Curency switcher*/
    $('.currency_switcher').css('opacity', '1');

    /*Products grid*/
    function handleProductsGridGallery() {
        var productSlider = $('.product-item-grid .slider');

        productSlider.each(function(){
            var slider = $(this);

            if (Clb.isElementorPage) {
                slider.width(slider.width());
            }

            if (slider.find('img').length > 1) {
                slider.clbSlider({
                    dots: false,
                    loop: true,
                    //verticalScroll: true,
                    navBtnClasses: 'btn-round-light btn-round-small'
                });
            }
        });

        setTimeout(function(){
            handleShopMasonry();
        }, 1000);
    } 

    // Logo overlay style

    function logoOverlay() {
        var logoItems = $('.client-logo .client-logo-overlay');

        logoItems.each(function () {
            var logoDetails = $(this).find('.client-logo-details');
            var logoDetailWidth = logoDetails.outerHeight();

            logoDetails.css({
                'height': logoDetailWidth,
                'bottom': '-' + logoDetailWidth + 'px',
            })
        });
    }

    // Product grid filter
    function handleMobileFilter() {
        var btn = $('.btn-filter a.btn');
        var filter = $('.filter-holder .mbl-overlay');
        var close = $('.clb-close, .mbl-overlay-bg');

        btn.on('click', function () {
            event.preventDefault();
            handlePopup('.filter-holder .mbl-overlay');
        });
        close.on('click', function () {
            closePopup(filter)
        });

        $(document).on('keydown', function (e) {
            if (e.keyCode == 27) {
                closePopup(filter);
            }
        });  
    }

    // Subscribe popup

    function SubscribeModal() {

        var data = {
            action: 'ohio_subscribe_modal'
        };

        jQuery.post(ohioVariables.url, data, function (data) {
            handlePopup('.clb-popup.custom-popup');
            var popupInner = $('.clb-popup-holder');
            popupInner.append(data);

            var wpcf7_form = $('.wpcf7-form');
            [].forEach.call(wpcf7_form, function (form) {
                wpcf7.initForm(form);
                handleSubscribeContactForm();
            });
        });
    }

    function handleSubscribeModal() {
        switch (ohioVariables.subscribe_popup_type) {
            case 'time':
                setTimeout(function () {
                    SubscribeModal();
                }, +ohioVariables.subscribe_popup_var * 1000);
                break;
            case 'scroll':
                var ckeck = true;
                $(window).on('scroll', function (e) {
                    var scrollTop = $(window).scrollTop();
                    var docHeight = $(document).height();
                    var winHeight = $(window).height();
                    var scrollPercent = (scrollTop) / (docHeight - winHeight);
                    var scrollPercentRounded = Math.round(scrollPercent * 100);
                    if (ckeck && scrollPercentRounded > ohioVariables.subscribe_popup_var) {
                        SubscribeModal();
                        ckeck = false;
                    }
                });
                break;
            case 'exit':
                var ckeck = true;
                $(document).on('mouseleave', function () {
                    if (ckeck) {
                        SubscribeModal();
                        ckeck = false;
                    }
                });
                break;
        }
    }

    $('[href=#subscribe-init]').on('click', function(e){
        e.preventDefault();
        handlePopup('.clb-popup.custom-popup');
        SubscribeModal();
    });

    if (ohioVariables.subscribe_popup_enable && !getCookie('subscribeCookie')) {
        handleSubscribeModal();
    }


    //Portfolio
    function handlePortfolioOnepageSlider() {
        var slider = $('[data-portfolio-grid-slider]');
        var portfolio = $('.portfolio-item-fullscreen');

        var loopSetting          = Boolean(slider.attr('data-slider-loop')),
            navSetting           = Boolean(slider.attr('data-slider-navigation')),
            bulletsSetting       = Boolean(slider.attr('data-slider-dots')),
            paginationSetting    = Boolean(slider.attr('data-slider-pagination')),
            mousescrollSetting   = Boolean(slider.attr('data-slider-mousescroll')),
            autoplaySetting      = Boolean(slider.attr('data-slider-autoplay')),
            autoplayPauseSetting = Boolean(slider.attr('data-slider-autoplay-pause')),
            autoplayTimeSetting  = slider.attr('data-slider-autoplay-time');

        slider.each(function(){
            var slider = $(this);

            if (slider.hasClass('grid_3') || slider.hasClass('grid_7') || slider.hasClass('project-fullscreen-slider')) {

                slider.clbSlider({
                    items: 1,
                    loop: loopSetting,
                    mousewheel: mousescrollSetting,
                    navBtn: navSetting,
                    drag: true,
                    dots: bulletsSetting,
                    pagination: paginationSetting,
                    scrollToSlider: true,
                    autoplay: autoplaySetting,
                    autoplayTimeout: autoplayTimeSetting,
                    autoplayHoverPause: true
                });

                fadeoutSliderItemAnimation(slider);
                removePerspectiveWhileScrolling(slider);
            } else if (slider.hasClass('grid_4')) {
                slider.clbSlider({
                    items: 1,
                    loop: loopSetting,
                    mousewheel: mousescrollSetting,
                    navBtn: navSetting,
                    drag: true,
                    dots: false,
                    pagination: paginationSetting,
                    scrollToSlider: true,
                    verticalScroll: true,
                    autoplay: autoplaySetting,
                    autoplayTimeout: autoplayTimeSetting,
                    autoplayHoverPause: true
                });

                fadeoutSliderItemAnimation(slider);
                removePerspectiveWhileScrolling(slider);
            } else if (slider.hasClass('grid_6')) {
                const columns = slider.attr( 'data-slider-columns' ).split( '-' );

                slider.clbSlider({
                    items: +columns[0] || 3,
                    loop: loopSetting,
                    mousewheel: mousescrollSetting,
                    navBtn: navSetting,
                    drag: true,
                    dots: false,
                    pagination: paginationSetting,
                    scrollToSlider: true,
                    autoplay: autoplaySetting,
                    autoplayTimeout: autoplayTimeSetting,
                    autoplayHoverPause: true,
                    responsive: {
                        768: {
                            items: +columns[2] || 1,
                        },
                        1024: {
                            items: +columns[1] || 2
                        }
                    }
                });

                fadeoutSliderItemAnimation(slider);
                removePerspectiveWhileScrolling(slider);
            } else if (slider.hasClass('grid_5') || slider.hasClass('grid_9') || slider.hasClass('grid_10') ) {
                handleSmoothSlider();
            } 

            if ( slider.hasClass('grid_9') ) {
                var nextProjectImg = $('.next-project-img-box');

                nextProjectImg.on('click', function(){
                    $(this).trigger('prev-slide');
                });
            }

            //Portfolio grid 3 overlay height
            if (!Clb.isMobile && (portfolio.hasClass('portfolio-grid-type-3') || portfolio.hasClass('portfolio-grid-type-6'))) {
                calcHeightForOnepageItemsOverlay(slider);
            }
        }); 
    }

    /*Onepage slider help functions*/
    function calcHeightForOnepageItemsOverlay(slider) {

        if (slider === undefined) {
            var slider = $('[data-portfolio-grid-slider]');
        }

        var overlay = slider.find('.portfolio-item-overlay');
        var overlayHeight = 0;
        var height = 0;

        overlay.each(function(){
            height = $(this).height()
            if (overlayHeight < height) {
                overlayHeight = height;
            }
        });
        if (!Clb.isMobile) {
            overlay.css('height', overlayHeight);
        } else {
            overlay.removeAttr('style');
        }
    }

    function removePerspectiveWhileScrolling(slider) {
        slider.on('clb-slider.change', function(){
            $(this).addClass('perspective-remove');
        });
        setTimeout(function(){
            slider.on('clb-slider.changed', function(){
                $(this).removeClass('perspective-remove');
            });
        }, 500);
    }

    function fadeoutSliderItemAnimation(slider) {
        slider.on('clb-slider.next-change', function(){
            
            var activeItems = slider.find('.clb-slider-item.active');
            activeItems.eq(0).addClass('last-active');

            setTimeout(function(){
                activeItems.eq(0).removeClass('last-active');
            }, 1000);

        }).on('clb-slider.prev-change', function(){

            var activeItems = slider.find('.clb-slider-item.active');
            activeItems.eq(activeItems.length - 1).addClass('last-active');

            setTimeout(function(){
                activeItems.eq(activeItems.length - 1).removeClass('last-active');
            }, 1000);

        });
    }

    /* End onepage slider help functions*/

    function handleSmoothSlider(onePage) {

        //Init
        if (onePage === undefined) {
            var onePage = $('.portfolio-onepage-slider');
        }

        onePage.addClass('clb-smooth-slider');

        var currentItem = 0;
        var onePageItems = onePage.children().addClass('clb-smooth-slider-item');
        var onePageItemsCount = onePageItems.length;

        //Settings
        var loopSetting          = Boolean(onePage.attr('data-slider-loop')),
            navSetting           = Boolean(onePage.attr('data-slider-navigation')),
            bulletsSetting       = Boolean(onePage.attr('data-slider-dots')),
            paginationSetting    = Boolean(onePage.attr('data-slider-pagination')),
            mousescrollSetting   = Boolean(onePage.attr('data-slider-mousescroll')),
            autoplaySetting      = Boolean(onePage.attr('data-slider-autoplay')),
            autoplayTimeSetting  = onePage.attr('data-slider-autoplay-time');

        onePage.css({
            'height': onePageItems.height()
        });

        $(window).on('resize', function(){
            onePage.css({
                'height': onePageItems.height()
            });  
        });

        onePageItems.css({
            'position': 'absolute',
        });

        /*Events*/
        onePage.on('next-slide', function(e){
            nextSlide();
        });

        onePage.on('prev-slide', function(e){
            prevSlide();
        });

        /*Create elements*/

        //Nav btn
        if (navSetting === true) {
            var createNavBtn = '<div class="clb-slider-nav-btn"><div class="prev-btn btn-round btn-round-light" tabindex="0"><i class="ion"><svg class="arrow-icon arrow-icon-back" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5" stroke-width="2" stroke-linejoin="round"/></svg></i></div><div class="next-btn btn-round btn-round-light" tabindex="0"><i class="ion"><svg class="arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5" stroke-width="2" stroke-linejoin="round"/></svg></i></div></div>';
            onePage.append($(createNavBtn));
        }
        //Pagination
        if (paginationSetting === true || bulletsSetting === true) {
            var createPagination = $('<div></div>');
            var page = $('<div class="clb-slider-page"></div>');

            if (paginationSetting === true) {
                createPagination.addClass('clb-slider-pagination');
                for (var i = 1; i <= onePageItemsCount; i++) {
                    if ( i < 10 ) {
                        page.clone().append('<span class="clb-slider-pagination-index"> 0'+ i +'</span>').appendTo(createPagination);
                    } else {
                        page.clone().append('<span class="clb-slider-pagination-index">'+ i +'</span>').appendTo(createPagination);
                    }
                }
            } else {
                createPagination.addClass('clb-slider-nav-dots');
                page.addClass('clb-slider-dot');
                for (var i = 1; i <= onePageItemsCount; i++) {
                    page.clone().appendTo(createPagination);
                }
            }

            createPagination.find('.clb-slider-page:first-child').addClass('active');
            onePage.append(createPagination);

            $(onePageItems).removeClass('prev-slide next-slide active');
            $(onePageItems.slice(0, currentItem)).addClass('prev-slide');
            $(onePageItems.slice(currentItem + 1 )).addClass('next-slide');
            $(onePageItems[currentItem]).addClass('active');

            //pagination
            var paginationNumbers = onePage.find('.clb-slider-page');
            var navBtnId = 0;
            paginationNumbers.on('click', function() {
                paginationNumbers.removeClass('active');
                $(this).addClass('active');
                navBtnId = $(this).index();

                //navBtnId + 1 because navBtnId start from 0 and slideNow start from 1
                if (navBtnId != currentItem) {
                    if ( navBtnId + 1 > onePageItemsCount ) {
                        navBtnId = navBtnId - settings.items + 1;
                    }

                    var lastSlide = currentItem
                    currentItem = navBtnId;

                    toSlide(lastSlide);
                }
            });

        } else {
            $(onePageItems[currentItem]).addClass('active');
            $(onePageItems[onePageItemsCount - 1]).addClass('prev-slide');
            $(onePageItems[currentItem + 1]).addClass('next-slide');
        }

        /*Script work place*/

        //Nav btn
        onePage.find('.next-btn').on('click', function() {
            nextSlide();
        });

        onePage.find('.prev-btn').on('click', function() {
            prevSlide();
        });

        //Key controll
        $(window).on('keydown', function (e) {
            var key = e.which || e.keyCode;

            if (key == 37) {
                prevSlide();
            }
            if (key == 39) {
                nextSlide();
            }
        });

        //Mouse scroll
        if (mousescrollSetting === true) {
            if (navigator.userAgent.indexOf('Mac OS X') != -1) {
                var timeoutDelay = 1300;
            } else {
                var timeoutDelay = 1000;
            }
            var wheel = true;
            var top = onePage.offset().top - ( $(window).height() - onePage.outerHeight() ) / 2;
            onePage.on('wheel mousewheel', function(e){

                var y = e.originalEvent.deltaY;
                if ((currentItem == 0 && y > 0) || (currentItem == onePageItemsCount && y < 0)) {
                    $("html, body").animate({ scrollTop: onePage.offset().top + 'px' });
                    e.preventDefault();
                }

                if (wheel) {
                    if( y > 0 && currentItem <= onePageItemsCount - 1) {

                        nextSlide();
                        wheel = false;

                        if (loopSetting) {
                            e.preventDefault();
                        } else {
                            if ( !(currentItem == onePageItemsCount) ) {
                                e.preventDefault();
                            } else {
                                $('html, body').stop(true, true).finish();
                            } 
                        }
                    } else if (y < 0 && currentItem >= 0) {

                        if (loopSetting) {
                            e.preventDefault();
                        } else {
                            if ( !(currentItem == 0) ) {
                                e.preventDefault();
                            } else {
                                $('html, body').stop(true, true).finish();
                            }
                        }
                        prevSlide();
                        wheel = false;
                    } 
                } else {
                    return false;
                }

                setTimeout(function(){
                    wheel = true;
                }, timeoutDelay);
            });
        }

        //Touch events

        onePage.on('touchstart', function(e){
            
            var cursorPosition = e.originalEvent.touches[0].pageX;

            onePage.on('touchmove', function(e){

                var position = e.originalEvent.touches[0].pageX;

                if ( position + 50 < cursorPosition ) {
                    nextSlide();
                    cursorPosition = e.clientX;
                } else if (position - 50 > cursorPosition) {
                    prevSlide();
                    cursorPosition = e.clientX;
                } 
            })


            onePage[0].ondragstart = function() {
              return false;
            };
        });

        //Autoplay
        if (autoplaySetting === true) {
            var autoSlideInterval = setInterval(function(){
                if (!onePage.hasClass('stop-slide')){
                    nextSlide();
                }
            }, autoplayTimeSetting);

            onePage.hover(function() {
                $(this).addClass('stop-slide');
            }, function() {
                $(this).removeClass('stop-slide');
            });
        }

        //ScrollBar
        function portfolioScrollBar() {
            if (onePage.hasClass('portfolio-onepage-slider')) {
                let percentage = (100 / onePageItemsCount ) * (currentItem + 1);
                if (percentage > 100) percentage = 100;

                $('.scroll-track').css( 'width', percentage + '%');
            }
        }

        function nextSlide() {
            
            if (loopSetting) {
                if (currentItem + 1 == onePageItemsCount) {
                    currentItem = 0;
                    $(onePageItems).removeClass('active prev-slide last-slide');
                    $(onePageItems[onePageItemsCount - 1]).addClass('prev-slide last-slide');
                } else if(currentItem + 2 == onePageItemsCount) {
                    $(onePageItems[0]).addClass('next-slide');
                    currentItem++;
                } else if (currentItem == 0) {
                    $(onePageItems[onePageItemsCount - 1]).removeClass('prev-slide');
                    currentItem++;
                } else {
                    currentItem++;
                }
            } else {
                currentItem++;
            }

            if (paginationSetting) {
                paginationNumbers.removeClass('active');
                $(paginationNumbers[currentItem]).addClass('active');
            }

            if (!(currentItem == onePageItemsCount)) {
                $(onePageItems[currentItem - 1]).addClass('last-slide').removeClass('active'); //prev slide
                $(onePageItems[currentItem - 2]).removeClass('prev-slide'); //other sldies
                $(onePageItems[currentItem]).removeClass('next-slide').addClass('active'); //active slide

                $(onePageItems[currentItem - 1]).addClass('prev-slide'); //prev slide
                $(onePageItems[currentItem + 1]).addClass('next-slide'); //next slide
                setTimeout(function(){
                    $(onePageItems).removeClass('last-slide');
                }, 800);

            }

            portfolioScrollBar();
        }

        function prevSlide() {
            if (loopSetting) {
                if (currentItem <= 0) {
                    currentItem = onePageItemsCount - 1;
                    $(onePageItems).removeClass('active next-slide last-slide');
                    $(onePageItems[0]).addClass('next-slide last-slide');
                } else if(currentItem == 1) {
                    $(onePageItems[onePageItemsCount - 1]).addClass('prev-slide');
                    currentItem--;
                } else if(currentItem == onePageItemsCount - 1) {
                    $(onePageItems[0]).removeClass('next-slide');
                    currentItem--;
                } else {
                    currentItem--;
                }
            } else {
                if (!(currentItem == 0)) {
                    currentItem--;
                }
            }

            if (paginationSetting) {
                paginationNumbers.removeClass('active');
                $(paginationNumbers[currentItem]).addClass('active');
            }
            
            if (!(currentItem < 0)) {
                $(onePageItems[currentItem]).addClass('active').removeClass('prev-slide'); //active slide
                $(onePageItems[currentItem + 1]).removeClass('active').addClass('last-slide'); //next slide
                $(onePageItems[currentItem + 2]).removeClass('next-slide').removeClass('last-slide'); //prev slide

                $(onePageItems[currentItem - 1]).addClass('prev-slide'); //prev-slide
                $(onePageItems[currentItem + 1]).addClass('next-slide'); //next-slide

                setTimeout(function(){
                    $(onePageItems).removeClass('last-slide');
                }, 800);
            }

            portfolioScrollBar()
        }

        function toSlide(lastSlide) {
            $(onePageItems[lastSlide]).addClass('last-slide');
            $(onePageItems).removeClass('prev-slide next-slide active');

            $(onePageItems.slice(0, currentItem)).addClass('prev-slide');

            $(onePageItems.slice(currentItem)).addClass('next-slide');

            $(onePageItems[currentItem]).addClass('active');
            $(onePageItems[currentItem - 1]).addClass('prev-slide'); //prev slide
            $(onePageItems[currentItem + 1]).addClass('next-slide'); //next slide

            setTimeout(function(){
                $(onePageItems).removeClass('last-slide');
            }, 800);
        }

        portfolioScrollBar()
    }

    
    // Background image parallax effect
     function handleBgParallaxEffect() {
        if (jQuery.browser.safari == undefined) {
            var container = document.querySelectorAll(".parallax-holder");

            $(container).each(function(i){
                var inner = $(this).find(".parallax")[0];
                let container = $(this)[0];
                var mouse = {
                    _x: 0,
                    _y: 0,
                    x: 0,
                    y: 0,
                    item: '',
                    updatePosition: function(event) {
                        var e = event || window.event;
                        if (isSliderItem($(container))) {
                            this.x = e.pageX - (Math.floor($(container).width()/ 2) + $(container).offset().left);
                            this.y = (e.pageY - (Math.floor($(container).height()/ 2) + $(container).offset().top)) * -1;
                        } else {
                            this.x = e.pageX - this._x;
                            this.y = (e.pageY - this._y) * -1;
                        }

                    },
                    setOrigin: function(e) {
                        this._x = Math.floor($(e).width()/ 2) + $(container).offset().left;
                        this._y = Math.floor($(e).height()/ 2) + $(container).offset().top;
                    },
                    show: function() {
                        return "(" + this.x + ", " + this.y + ")";
                    }
                };

                // Track the mouse position relative to the center of the container.
                mouse.setOrigin(container);

                var counter = 0;
                var refreshRate = 10;
                var isTimeToUpdate = function() {
                    return counter++ % refreshRate === 0;
                };

                var onMouseEnterHandler = function(event) {
                    update(event);
                };

                var onMouseLeaveHandler = function() {
                    // inner.style = "";
                    inner.style.transform = "";
                    inner.style.webkitTransform = "";
                    inner.style.mozTranform = "";
                    inner.style.msTransform = "";
                    inner.style.oTransform = "";
                };

                var onMouseMoveHandler = function(event) {
                    if (isTimeToUpdate()) {
                        update(event);
                    }
                };

                var update = function(event) {
                    mouse.updatePosition(event);
                    updateTransformStyle(
                        (mouse.y / inner.offsetHeight / 2).toFixed(2),
                        (mouse.x / inner.offsetWidth / 2).toFixed(2)
                    );
                };

                var updateTransformStyle = function(x, y) {
                    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
                    inner.style.transform = style;
                    inner.style.webkitTransform = style;
                    inner.style.mozTranform = style;
                    inner.style.msTransform = style;
                    inner.style.oTransform = style;
                };

                container.onmousemove = onMouseMoveHandler;
                container.onmouseleave = onMouseLeaveHandler;
                container.onmouseenter = onMouseEnterHandler;

                function isSliderItem(item) {
                    if (item.hasClass('clb-slider-item') || item.parents('.clb-slider-item').length ) {
                        return true;
                    }
                }
            });
        }

    }
    
    function handleCircleProgressBar() {

        var circleProgressBar = $('.circle-progress-bar');
        circleProgressBar.each(function(i){
            var _this = $(this);

            var progressValue = $(this).find('.progress__value')[0];
            var value = $(_this).data('percent-value');

            const radius = progressValue.r.animVal.value;
            const circumference = 2 * Math.PI * radius;

            function progress(value) {
                var progress = value / 100;
                var dashoffset = circumference * (1 - progress);
                progressValue.style.strokeDashoffset = dashoffset;
            }

            progressValue.style.strokeDasharray = circumference;
            if (value < 0) value = 0;
            if (value > 100) value = 100;
            progress(value);

            var counters = _this.find(".percent-wrap .percent")[0];
            var counter = parseInt(counters.innerHTML);

            var count = function(start, value, i) {
                var localStart = start;

                setInterval(function() {
                    if (localStart < value) {
                        localStart++;
                        counters.innerHTML = localStart;
                    }
                }, 1000 / value);
            }

            count(0, value, i);

        });
    }
    $(window).on('ohio:handle_circle_progress_bar', handleCircleProgressBar);

    function handleScrollMeter() {
        const bHeight = $('body').height();
        const scrolled = $(window).innerHeight() + $(window).scrollTop();

        let percentage = ((scrolled / bHeight) * 100);

        if (percentage > 100) percentage = 100;

        $('.clb-scroll-top:not(.clb-slider-scroll-top) .scroll-track').css( 'width', percentage + '%');
    }
    
    function handleTeamMemberInner() {
        var teamMember = $('.team-member.inner');

        teamMember.each(function(){
            var self = $(this);
            var teamMemberWrap       = self.find('.team-member_wrap');
            var teamMemberDescWrap   = self.find('.team-member_description_wrap');
            var teamMemberImage      = self.find('.team-member_image');

            teamMemberDescWrap.show();

            teamMemberWrap.css({
                'transform': 'translateY('+teamMemberDescWrap.outerHeight()+'px)'
            });

            teamMemberImage.hover(function(){
                teamMemberWrap.css({
                    'transform': 'none'
                });
            }, function(){
                teamMemberWrap.css({
                    'transform': 'translateY('+teamMemberDescWrap.outerHeight()+'px)'
                });
            })

        });
    }

    function handleHorizontalAccordion(){
        var accordion = $('.horizontal_accordion');
        if (!Clb.isMobile) {

        }
        accordion.each(function(){
            var selfAccordion = $(this);
            var items = selfAccordion.find('.horizontal_accordionItem');
            var percent = Clb.isMobile ? 90 : 100 - (100 / (items.length - 1));
            var i = items.length, 
                z = 1,
                t = items.length - 1;
            var currentItem;
            var currentItemIndex;

            if (Clb.isMobile) {
                items.removeAttr('style');
            } else {
                items.eq(0).addClass('active');

                //z-index for each items by descending
                for (; i > 0; i--) {
                    items.eq(i-1).css({
                        'z-index': z
                    });

                    if (i > 1) {
                        items.eq(i-1).css({
                            'transform': 'translateX(-'+ percent * t + '%)'
                        });
                        t--;
                    }
                    z++;
                }

                items.on('click', function(i){
                    currentItem = $(this);
                    currentItemIndex = items.index(currentItem);
                    openItem(items, currentItemIndex, currentItem, selfAccordion, percent);
                });
            }
        });

        function openItem(items, currentItemIndex, currentItem, selfAccordion, percent) {
            var movedItems;
            var movingItems;
            var movingItemsIndex = currentItemIndex;

            if (currentItem.hasClass('moved')) {
                movedItems = selfAccordion.find('.horizontal_accordionItem.moved');
                movingItems = movedItems.slice(currentItemIndex, movedItems.length);

                movedItems.each(function(i){
                    if (i >= movingItemsIndex) {
                        setTimeout(function(){
                            movedItems.eq(movingItemsIndex).css('transform', 'translateX(-'+ percent * (movingItemsIndex) +'%)');
                            movingItemsIndex++;
                        }, 50 * i);
                    }
                    
                });
                movingItems.removeClass('moved');
                items.removeClass('active');
                currentItem.addClass('active');
            } else {
                movingItems = items.slice(0, currentItemIndex).addClass('moved');

                movingItems.each(function(i){
                    setTimeout(function(){
                        items.eq(i).css('transform', 'translateX(-'+ percent * (i + 1) +'%)');
                    }, 50 * i);
                });

                items.removeClass('active');
                currentItem.addClass('active');
            }
        }
    }
    $(window).on('ohio:handle_accordion_horizontal_box', handleHorizontalAccordion);

    function handleBackLinkPosition() {
        var backLink = document.querySelectorAll('.clb-back-link');
        var backLinkOffset = 0;

        if ($("#wpadminbar").length) {
            backLinkOffset = backLinkOffset + $("#wpadminbar").height();
        }
        
        if (backLink.length ) {
            if (!Clb.header.hasClass('header-6')) {
                backLink[0].style.top = backLinkOffset + Clb.header.height() + 'px';
            }
            backLink[0].classList.add('showed');
        }
    }

    function handleMasonry() {
        // Masonry && AOS

        if ($('.ohio-masonry').length) {
            setTimeout(function () {
                $('.ohio-masonry').each(function () {
                    var columnWidth = '.grid-item';
                    if ($(this).find('.grid-item').length == 0) {
                        columnWidth = '.masonry-block';
                    }
                    
                    $(this).masonry({
                        itemSelector: '.masonry-block',
                        columnWidth: columnWidth,
                        horizontalOrder: true,
                        isAnimated: false,
                        hiddenStyle: {
                            opacity: 0,
                            transform: ''
                        }
                    });
                });

                setTimeout(function () {
                    handleAOS();
                }, 50);
            }, 50);
        } else {
            handleAOS();
        }
    }

    function handleScrollShareBar() {
        var mediaHolder = $('[data-scroll-share-bar]');
        if (mediaHolder.length) {
            var windowHeigth        = $(window).height()
            var mediaHolderHeight   = mediaHolder.height();
            var mediaHolderOffset   = mediaHolder.offset().top;

            $(window).on('scroll', function(){
                if ($(this).scrollTop() >= (mediaHolderHeight - windowHeigth) + mediaHolderOffset ) {
                    mediaHolder.addClass('scroll-end');
                } else {
                    mediaHolder.removeClass('scroll-end');
                }
            });
        }
    }

    function handleCustomSelect() {
        var select = $('select:not(.select2-hidden-accessible)');

        select.each(function(){
            if (!$(this).parent().hasClass('select-holder')) {
                select.each(function(){
                    $(this).wrapAll('<div class="select-holder"/>');
                });
            } 
        })
    }

    function handleLanguageSelect() {
        var select = $('select.lang-dropdown-select');

        select.on('change', function(){
            window.location.href = this.value
        });
    }

    function handleDarkSectionColors() {
        var section = $('.clb__dark_section, .clb__light_section');
        var sectionClass;

        if (section.length) {
            var scrollTop = $('.clb-scroll-top');
            var socialLinks = $('.clb-social');
            var fixedSearch = $('.search-global.fixed .ion');
            var self_window;

            $(window).on('scroll', function(){
                self_window = $(this);
                activeSection(self_window);
            });

            function activeSection(self_window) {
                var st = self_window.scrollTop() + self_window.height() / 2;
                section.each(function(){

                    var sectionOffset = $(this).offset().top ;
                    var currentSection = $(this);
                    if (currentSection.hasClass('clb__dark_section')) {
                        sectionClass = 'light-typo';
                    } else if(currentSection.hasClass('clb__light_section')) {
                        sectionClass = 'dark-typo';
                    }

                    if (sectionOffset + currentSection.height() > st && st > sectionOffset) {
                        scrollTop.addClass(sectionClass);
                        socialLinks.addClass(sectionClass);
                        fixedSearch.addClass(sectionClass);
                        return false;
                    } else {
                        scrollTop.removeClass(sectionClass);
                        socialLinks.removeClass(sectionClass);
                        fixedSearch.removeClass(sectionClass);
                    }
                });
            }
        }
    }

    function handleRemoveSliderBulletsClass() {
        var slider = $('.project-fullscreen-slider.clb-slider, .portfolio-onepage-slider.clb-slider, .fullscreen-slider.clb-slider');

        if (slider.length && slider.find('.clb-slider-pagination').length) {
            if (slider.length && slider.offset().top <= $(window).scrollTop() + 50) {
                $('body').addClass('slider-with-bullets');
            }

            var body = $('body');
            var sliderOffsetTop = slider.offset().top - 150;
            var sliderOffsetBottom = sliderOffsetTop + slider.height();

            $(window).on('scroll', function(){
                var scroll = $(window).scrollTop();
                if ( scroll < sliderOffsetTop || scroll > sliderOffsetBottom ) {
                    body.removeClass('slider-with-bullets');
                } else {
                    body.addClass('slider-with-bullets');
                }
            });
        }
    }

    function handlePageColorSwitcher() {
        var switcher = $('.clb-mode-switcher');
        var switcherItems = switcher.find('.clb-mode-switcher-item, .clb-mode-switcher-toddler');
        
        equalSize(switcherItems, 'width');
        
        if (Clb.body.hasClass('dark-scheme')) {
            switcher.addClass('dark');
        }

        switcher.on('click', function(){
            $(Clb.body).toggleClass('dark-scheme');
            $(this).toggleClass('dark');
        });
    }

    function equalSize(items, attr) {
        var maxSize = 0;
        var value = 0;

        items.each(function(){
            value = $(this).css(attr).replace(/(^\d+)(.+$)/i,'$1');
            
            if (value > maxSize) {
                maxSize = +($(this).css(attr).replace(/(^\d+)(.+$)/i,'$1'));
            }
        });

        var css = {};
        css[attr] = maxSize;

        items.css(css);
    }
    

    function percentagePreloader() {
        setTimeout(function(){
            var counter = 0;
            var count = 0;
            var isLoad = false;
            var breakPoint = Math.floor(Math.random() * 29) + 70;

            $(window).on('load', function(){
                isLoad = true;
            });

            var i = setInterval(function(){
                $(".sk-percentage .sk-percentage-percent").html(count + "%");
                $(".sk-percentage").css("width", count + "%");
                if(counter == 100){
                    clearInterval(i);
                    setTimeout(function(){
                        $("#page-preloader").addClass('hidden');
                    }, 10)
                    
                } else if (counter == breakPoint) {

                    if (isLoad) {
                        counter++;
                        count++;
                    } else {
                        counter = breakPoint;
                        count = breakPoint;
                    }

                } else {
                    counter++;
                    count++;
                }
            }, 12);
        }); 
    }

    function handleInteractiveLinksGrid() {
        var grid = $('[data-interactive-links-grid]');
        var gridItems = grid.find('.portfolio-item-wrap ');
        createImagesForInteractiveLinksGrid(grid.find('[data-lazy-container]'));
        var gridImages = $('.portfolio-grid-images .portfolio-metro-image')

        gridItems.each(function(){
            var self = $(this);

            self.mouseenter( function(){
                self.find('.portfolio-item').addClass('visible');
                gridItems.find('.portfolio-item').not('.visible').addClass('invisible');
                gridImages.eq(self.index()).addClass('scale');

            }).mouseleave( function(){
                gridItems.find('.portfolio-item').removeClass('invisible visible');
                gridImages.removeClass('scale');
            });
        });
    }

    function createImagesForInteractiveLinksGrid(grid) {
        var gridItem = grid.find('[data-featured-image]');
        var gridImages = $('.interactive-links-grid-images');
        gridImages.empty();

        gridItem.each(function(){
            var bgImage = $('<div class="portfolio-metro-image interactive-links-grid-image"></div>');
            bgImage.css('background-image', 'url(' + $(this).data('featured-image') + ')');
            gridImages.append(bgImage);
        }); 
    }

    function handlePortfolioMovingDetailsGrid() {
        var grid = $(".grid_11");
        if (grid.length) {
            var portfolioItem = grid.find('.portfolio-grid-type-11');

            portfolioItem.on('mouseover mousemove', function(event){
                $(this).find('.portfolio-item-details')[0].style.transform = 'translate('+ event.clientX + 'px, ' + event.clientY + 'px' +')';
            });

            portfolioItem.on('mouseleave', function(event){
                $(this).find('.portfolio-item-details')[0].style.transform = 'translate(0px, 0px' +')';
            });
        }
    }

    function handleProjectScrollScale() {
        var project = $('.scroll-scale-image');
        if ( project.length ) {
            var projectImage = project.find('.project-page-media-holder .project-image')
            var scale = 1.0;
            var lastScrollTop = 0;
            var projectImageOffset = projectImage.offset().top;
            var projectImageHeight = projectImage.height();
            var wndHeight = $(window).height();
            var projectImageHeight = projectImage.height();
            var modifier = 0;

            //(-parallaxTop + contentScroll + wndHeight) / (parallaxHeight + wndHeight)
    
            $(window).on('scroll', function(){
                var st = $(this).scrollTop();
                modifier = ((st) / (projectImageHeight + wndHeight) / 5);

                if ( st < projectImageOffset + projectImageHeight ) {
                    if (st > lastScrollTop){
                        //Down
                        setTimeout(function(){
                            projectImage.css('transform', 'scale('+scale+')');
                            scale = 1 + modifier;
                        }, 50);
                    }
                    else {
                        //Up
                        projectImage.css('transform', 'scale('+scale+')');
                        if (scale > 1.005) {
                            scale = 1 + modifier;
                        } 
                    }
                }
                lastScrollTop=st;  
            });
        }
    }

    function handleGlobalPageAnimation() {
        var isGLobalAnim = $('.global-page-animation');
        
        if ( isGLobalAnim.length ) {
           
            $('a').on('click', function(e) {
                var link = $(this).attr('href');
                if ( link && link.charAt(0) != '#' && $(this).attr('target') != '_blank') {
                    e.preventDefault();
                    isGLobalAnim.removeClass('global-page-animation-active');
                    isGLobalAnim.addClass('global-page-animation-fade-out')
                    setTimeout(function(){
                        $('.page-preloader').removeClass('hidden');
                    }, 800);

                    setTimeout(function(){
                        document.location.href = link;
                    }, 850);
                }
            });
        }
    }

    function handleStickySection() {
        var sticky = $('.sticky-section');

        if ( sticky.length ) {

            sticky.each(function(){

                var secondImage = $(this).find('.sticky-section-item-second-image'); //projectImage
                var lastScrollTop = 0;
                var stickyItemHeight = $('.sticky-section-item').height();
                var stickyItemOffset = $('.sticky-section-item').offset().top; //projectImageOffset
                var secondImageHeight = secondImage.height(); //projectImageHeight
                var wndHeight = $(window).height();
                var modifier = 0;
                var inset = secondImageHeight;

                $(window).on('scroll', function(){
                    var st = $(this).scrollTop();
                    modifier = ((st) / (secondImageHeight + wndHeight)) * 20; //((st) / (secondImageHeight + wndHeight) / 5)
                    if ( st > stickyItemOffset + ((stickyItemHeight / 2) - secondImageHeight) ) {
                        if (st > lastScrollTop){
                            //Down
                            if ( inset > 0) {
                                secondImage.css('clip-path', 'inset('+inset+'px 0px 0px)');
                                inset = inset - modifier;
                            }
                        }
                        else {
                            //Up
                            if (inset < secondImageHeight) {
                                secondImage.css('clip-path', 'inset('+inset+'px 0px 0px)');
                                inset = inset + modifier;
                            }
                        }
                    }
                    lastScrollTop=st;  
                });

            });

        }
    }

    function handleZoomProductImage() {
        $('.woo_c-product-image.with-zoom .product_images .image-wrap')
        .on('mouseover', function(){
          $(this).find('img').css({'transform': 'scale(1.5)'});
        })
        .on('mouseout', function(){
          $(this).find('img').css({'transform': 'scale(1)'});
        })
        .on('mousemove', function(e){
          $(this).find('img').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
        })
    }

    function asymmetricParallaxGrid() {
        // var asymmetricGrid = $('[data-asymmetric-parallax-grid]');

        // if (asymmetricGrid.data('asymmetric-parallax-grid')) {
        //     var gridItems = $('[data-asymmetric-parallax-grid]').children();
        //     var loopCount = 1;
        //     var gridTop = asymmetricGrid.offset().top;
        //     var gridHeight = asymmetricGrid.height();
        //     var speed = asymmetricGrid.data('asymmetric-parallax-speed') / 100;
        //     var grid = asymmetricGrid.data('grid-number').split('-');
        //     var gridNumber = getGridNumber(grid);

        //     //Establish modifier for each element
        //     if (asymmetricGrid.hasClass('ohio-masonry') || asymmetricGrid.data('isotope-grid') ) {
        //         setTimeout(function(){
        //             var itemLeftOffset = 0;
        //             var countOffsets = [];

        //             //Get offset for each column
        //             for (var i = 0; i < gridNumber; i++ ) {
        //                 let itemLeftOffset = gridItems[i].style.left.replace(/(^\d+)(.+$)/i,'$1');
        //                 countOffsets.push(itemLeftOffset);
        //             }

        //             gridItems.each(function(i){
        //                 itemLeftOffset = this.style.left.replace(/(^\d+)(.+$)/i,'$1');
        //                 //Set data order equal 
        //                 for (var i = 0; i < countOffsets.length; i++ ) {
        //                     if (itemLeftOffset == countOffsets[i]) {
        //                         $(this).data('data-order', i + 1);
        //                         $(this).data('position', 0);
        //                     }
        //                 }
        //             });
        //         }, 101);
        //     } else {
        //         gridItems.each(function(i){
        //             $(this).data('data-order', loopCount);
        //             $(this).data('position', 0);
        //             loopCount++;

        //             if (loopCount > gridNumber) {
        //                 loopCount = 1;
        //             }
        //         });
        //     }

        //     var params = {
        //         'gridTop': gridTop,
        //         'gridHeight': gridHeight,
        //         'speed': speed
        //     };
            
        //     asymmetricGrid.addClass('clb-asymmetric-parallax-grid');

        //     $(window).on('scroll mousewheel', function (e) {
        //         handleAsymmetricParallaxGrid(params, e);
        //     });

        //     function getGridNumber(grid) {
        //         if (Clb.isMobile) {

        //             if (grid[2] == 'i') {
        //                 return 1;
        //             }

        //             return grid[2];
        //         } else if (Clb.isPad) {

        //             if (grid[1] == 'i') {
        //                 return 2;
        //             }

        //             return grid[1];
        //         } else {

        //             if (grid[0] == 'i') {
        //                 return 3;
        //             }

        //             return grid[0];
        //         }
        //     }
        // }
    }

    function handleAsymmetricParallaxGrid(params, e) {
        // var contentScroll = $(document).scrollTop();
        // var wndHeight = $(window).height();

        // var isnotStartOrEndDocument = (contentScroll != 0) && ($(document).height() != contentScroll + $(window).height());
        // var isGridOnScreen = (params['gridTop'] <= contentScroll + wndHeight) && (params['gridTop'] + params['gridHeight'] >= contentScroll);

        // if (isGridOnScreen && isnotStartOrEndDocument) {
        //     $('[data-asymmetric-parallax-grid] > *').each(function(){

        //         if (e.originalEvent.wheelDelta > 0) {
        //             var newPosition = ($(this).data('position') + (params['speed'] * ($(this).data('data-order') * 2)));
        //         } else {
        //             var newPosition = ($(this).data('position') - (params['speed'] * $(this).data('data-order')));
        //         }
                
        //         $(this).data('position', newPosition);
        //         $(this).css('transform', 'translate3d(0, ' + newPosition + 'px, 0)');
        //     });
        // } else if (!isGridOnScreen) {
        //     $('[data-asymmetric-parallax-grid] > *').each(function(){
        //         $(this).css('transform', 'translate3d(0, 0, 0)');
        //         $(this).data('position', 0);
        //     });
        // }
    }

    function handleOhioBgImages() {
        $('[data-ohio-bg-image]').each(function () {
            $(this).css('background-image', 'url(' + $(this).attr('data-ohio-bg-image') + ')');
        });
    }
    $(window).on('ohio:handle_bg_images', handleOhioBgImages);

    percentagePreloader();

    window.ohioRefreshFrontEnd = function () {
        handleAccordionBox();
        handleBannerBox();
        handleBannerBoxSize();
        handleCounterBox();
        handleCountdownBox();
        handleSubscribeContactForm();
        handleCoverBox();
        handleCoverBoxSize();
        handleGallery();
        // handleSocialBar();
        handleSplitboxParallax();
        handleProgressBar();
        handleProgressBarSize();
        initParallax();
        handleParallax();
        handlePriceTable();
        handleTabBox();
        handleVideoBackground();
        handleVideoPopup();
        handleScrollEffects();
        handleSliders();
    };

    handleMobileHeader();
    $(window).on('load', function () {

        Clb.init();
        handleOhioHeight();

        // Navigation
        handleNavigations();
        //countMenuItems();

        // Header
        handleHeaders();
        handleHeaderTitle();

        if ( !Clb.isMobileMenu && Clb.headerIsFifth ) {
            centeredLogo();
        }
        handleCustomSelect();
        handleLanguageSelect();
        
        // Footer
        handleFooter();
        handleFooterSize();
        handleStretchContent();
        handleAlignContentInStretchRow();
        // Shortcodes
        handleAccordionBox();
        handleAccordionBoxSize();
        handleBannerBox();
        handleBannerBoxSize();
        handleCounterBox();
        handleCountdownBox();
        handleSubscribeContactForm();
        handleCoverBox();
        handleCoverBoxSize();
        handleGallery();
        handleFullscreenSlider();
        handleCircleProgressBar();
        handleTeamMemberInner();
        handleHorizontalAccordion();
        handleSliders();
        handleStickySection();
        // handleSocialBar();
        handleSplitboxParallax();
        handleProgressBar();
        handleProgressBarSize();
        initParallax();
        handleParallax();
        handlePriceTable();
        handleTabBox();
        handleVideoBackground();
        handleVideoPopup();

        // Shop
        handleShopMasonry();
        handleStickyProduct();
        handleMobileFilter();
        handleQuickviewPopup();
        handleSingleProductGallery();
        handleProductsGridGallery();
        handleZoomProductImage();

        // Portfolio
        handlePortfolio();
        if ( !Clb.isPad ) {
            handleScrollContent();
        }
        handleScrollShareBar();
        handleScrollEffects();
        handleLazyLoadClick();
        handleLazyLoadScroll();
        handlePortfolioOnepageSlider();
        handlePortfolioPopup();
        handleScrollMeter();
        handleMutationObserver();
        if (!Clb.isPad) {
            handleBgParallaxEffect();
        }
        handleBackLinkPosition();
        handleRemoveSliderBulletsClass();
        handleInteractiveLinksGrid();
        handlePortfolioMovingDetailsGrid();
        handleProjectScrollScale();

        handleMasonry();
        asymmetricParallaxGrid();
        //Custom cursor
        if (!Clb.isPad) {
            handleCustomCursor();
        }

        handleDarkSectionColors();

        handlePageColorSwitcher();
        handleGlobalPageAnimation();
        // SlideUp animated elements
        $('.clb-slider-item').each(function(){
            if($(this).hasClass('active')) {
                $(this).find('.animated-holder').addClass('visible');
            }   
        })

        //Buttons

        btnPreloader();

        //logo SC
        logoOverlay();
        
        //Important for mobile menu
        Clb.body.addClass('page-is-loaded');

        // Scroll top button
        $('#clb-scroll-top').on("click", function () {
            $('html, body').animate({scrollTop: 0}, 800);
            return false;
        });

        // Tooltips
        $('.tooltip').each(function () {
            if ($(this).find('.tooltip-top, .tooltip-bottom').length) {
                var content = $(this).find('.tooltip-text');
                content.css('left', ($(this).outerWidth() / 2 - content.outerWidth() / 2) + 'px');
            }
        });

        // Message boxes
        $('body').on('click', '.message-box .clb-close', function () {
            $(this).parent().slideUp({duration: 300, queue: false}).fadeOut(300);
            var self = $(this);
            setTimeout(function () {
                self.remove();
            }, 350);
        });

        $('body').on('click', '.notification-bar .clb-close, .notification-bar .notification-btn a', function (e) {
            e.preventDefault();

            setCookie('notification', 'enabled', +ohioVariables.notification_expires);
            $(this).parents('.notification-bar').removeClass('active');
        });

        // Ohio attrs
        handleOhioBgImages();

        // Fixed google maps equal height in percent
        $('.wpb_wrapper').each(function () {
            var divs = $(this).find('> div');

            if (divs.length == 1 && divs.eq(0).hasClass('google-maps')) {
                $(this).css('height', '100%');
            }
        });

        $('div[data-dynamic-text="true"]').each(function () {
            var options = JSON.parse($(this).attr('data-dynamic-text-options'));
            var typed = new Typed('#' + $(this).attr('id') + ' .dynamic', options);
        });

        // Refresh composter waypoints after magic
        if (window.vc_waypoints) {
            setTimeout(function () {
                window.vc_waypoints();
            }, 600);
        }

        // Mobile share button
        $('.mobile-social').on('click', function (e) {
            e.stopPropagation();

            if ($(this).hasClass('active')) {
                $(this).find('.social').css('height', '0px');
                $(this).removeClass('active');
            } else {
                var social = $(this).find('.social');
                var self = $(this);

                social.css('height', '');

                social.addClass('no-transition');

                $(this).addClass('active');
                var height = social.outerHeight();
                $(this).removeClass('active');

                setTimeout(function () {
                    social.css('height', height + 'px');
                    social.removeClass('no-transition');
                    self.addClass('active');
                }, 50);

            }
        });

        $(window).on('scroll', function () {
            var handleAnim = function () {
                handleMobileHeader();
                handleFixedHeader();
                handleHeaderTitle();
                handleBarScroll();
                handleCounterBox();
                handleProgressBar();
                handleParallax();
                handleScrollEffects();
                handleLazyLoadScroll();
                handleScrollMeter();
            };

            if (window.requestAnimationFrame) {
                window.requestAnimationFrame(function () {
                    handleAnim();
                });
            } else {
                handleAnim();
            }

            // Scroll top

            if ($(window).scrollTop() > 250) {
                $('#clb-scroll-top').addClass('visible');
            } else {
                $('#clb-scroll-top').removeClass('visible');
            }
        });

        //For disebling resize trigger on mobile scroll
        var mobileResizeWidth = $(window).width(), mobileResizeHeight = $(window).height();

        $(window).on('resize', function () {
            Clb.resize();
            handleOhioHeight();
            handleHeaderSize();
            handleHeaderTitle();
            handleFooterSize();
            handleStretchContent();
            handleAccordionBoxSize();
            handleBannerBoxSize();
            handleCounterBox();
            handleCoverBoxSize();
            handleParallax();
            handleProgressBarSize();
            handlePriceTable();
            handleTabBoxSize();
            handleProgressBar();
            handleScrollEffects();
            handleLazyLoadScroll();
            handleSliders();
            handleShopMasonry();
            handleScrollShareBar();
            handleHorizontalAccordion();
            handleMobileHeader();
            handleTabBox();
            
            setTimeout(function(){
                handleAlignContentInStretchRow();
                handleMasonry();
            }, 400);

            if ( !Clb.isMobileMenu && Clb.headerIsFifth ) {
                if ( Clb.header.hasClass('header-4') ) {
                    setTimeout(function(){
                        Clb.header.find('.main-nav').removeAttr('style');
                        centeredLogo();
                    }, 100);
                }
            }

            //For disebling resize trigger on mobile scroll
            if($(window).width() != mobileResizeWidth || $(window).height() != mobileResizeHeight){
                handleSingleProductGallery();
                handleProductsGridGallery();
            }
            
            if ( !Clb.isPad ) {
                handleScrollContent();
            }

            if ( Clb.isMobileMenu ) {
                if ( Clb.headerIsFifth ) {
                    $('#site-navigation, .left-part, .right-part, .nav-item').removeAttr('style');
                }
            }

            if (typeof(AOS) != 'undefined') {
                setTimeout(function () {
                    AOS.refresh();
                }, 10);
                // Isotope animation
                setTimeout(function () {
                    AOS.refresh();

                    if (window.vc_waypoints) {
                        window.vc_waypoints();
                    }
                }, 600);
            }

            if ( $('[data-portfolio-grid-slider]').hasClass('grid_6') ) {
                calcHeightForOnepageItemsOverlay();
            }

            //Custom cursor
            if (!Clb.isPad) {
                handleCustomCursor();
            }
        });

        $('#page-preloader:not(.percentage-preloader), .container-loading').addClass('hidden');
		
		if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
			window.onpageshow = function(event) {
				if (event.persisted) {
					window.location.reload();
				}
			};
		}
		
        if (Clb.body.hasClass('global-page-animation')) {
            Clb.body.addClass('global-page-animation-active');
        }
        
        $('.gimg').css('opacity', '1');

        handleCompareShortcodes();
    });

    // Compare SC
    function handleCompareShortcodes() {
        $('.compare-shortcode').each(function() {
            var $this = $(this);

            $this.twentytwenty({
                no_overlay:   $this.attr('data-compare-without-overlay'),
                before_label: $this.attr('data-compare-before-label'),
                after_label:  $this.attr('data-compare-after-label'),
                orientation:  $this.attr('data-compare-orientation'),
                default_offset_pct: parseFloat($this.attr('data-compare-position')),
            });

            var twentyHandle = $this.find('.twentytwenty-handle');
            twentyHandle.find('.twentytwenty-left-arrow, .twentytwenty-right-arrow').remove();
            twentyHandle.each(function(){
                $(this).append('<div class="twentytwenty-arrows"><i class="ion ion-ios-code"></i></div>');
            });
        });
    }
    $(window).on('ohio:handle_compare_shortcodes', handleCompareShortcodes);

    // Custom cursor
    function handleCustomCursor() {
        if ( $('body').hasClass( 'custom-cursor' ) ) {
            const cursorInnerEl = document.querySelector('.circle-cursor--inner');
            const cursorOuterEl = document.querySelector('.circle-cursor--outer');
            let lastY, lastX = 0;
            let magneticFlag = false;

            // move
            window.onmousemove = function (event) {
                if (!magneticFlag) {
                    cursorOuterEl.style.transform = 'translate('+ event.clientX + 'px, ' + event.clientY + 'px' +')';

                    /*Old code*/
                    // cursorOuterEl.style.top = event.clientY + 'px';
                    // cursorOuterEl.style.left = event.clientX + 'px';
                }
                cursorInnerEl.style.transform = 'translate('+ event.clientX + 'px, ' + event.clientY + 'px' +')';

                /*Old code*/
                // cursorInnerEl.style.top = event.clientY + 'px';
                // cursorInnerEl.style.left = event.clientX + 'px';
                lastY = event.clientY;
                lastX = event.clientX;
            }

            // links hover
            $('body').on('mouseenter', 'a, .cursor-as-pointer', function() {
                cursorInnerEl.classList.add('cursor-link-hover');
                cursorOuterEl.classList.add('cursor-link-hover');
            });
            $('body').on('mouseleave', 'a, .cursor-as-pointer', function() {
                if ( $(this).is('a') && $(this).closest('.cursor-as-pointer').length ) {
                    return;
                }
                cursorInnerEl.classList.remove('cursor-link-hover');
                cursorOuterEl.classList.remove('cursor-link-hover');
            });

            // additional hover cursor class
            $('body').on('mouseenter', '[data-cursor-class]', function() {
                const cursorClass = $(this).attr('data-cursor-class');
                // cursorInnerEl.classList.add(cursorClass);
                // cursorOuterEl.classList.add(cursorClass);

                if (cursorClass.indexOf('dark-color') != -1) {
                    cursorInnerEl.classList.add('dark-color');
                    cursorOuterEl.classList.add('dark-color');
                }

                if (cursorClass.indexOf('cursor-link') != -1) {
                    cursorInnerEl.classList.add('cursor-link');
                    cursorOuterEl.classList.add('cursor-link');
                }
            });
            $('body').on('mouseleave', '[data-cursor-class]', function() {
                const cursorClass = $(this).attr('data-cursor-class');
                if (cursorClass.indexOf('dark-color') != -1) {
                    cursorInnerEl.classList.remove('dark-color');
                    cursorOuterEl.classList.remove('dark-color');
                }

                if (cursorClass.indexOf('cursor-link') != -1) {
                    cursorInnerEl.classList.remove('cursor-link');
                    cursorOuterEl.classList.remove('cursor-link');
                }
            });

            // magnet elements
            $('body').on('mouseenter', '.cursor-magnet, .btn-round', function() {
                const $elem = $(this);
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                cursorOuterEl.style.transition = 'all .2s ease-out';
                cursorOuterEl.style.transform = 'translate('+ $elem.offset().left + 'px, ' + ($elem.offset().top - scrollTop) + 'px' +')';

                /*Old code*/
                // cursorOuterEl.style.top = ($elem.offset().top - scrollTop) + 'px';
                // cursorOuterEl.style.left = $elem.offset().left + 'px';
                cursorOuterEl.style.width = $elem.width() + 'px';
                cursorOuterEl.style.height = $elem.height() + 'px';
                cursorOuterEl.style.marginLeft = 0;
                cursorOuterEl.style.marginTop = 0;

                magneticFlag = true;
            });

            $('body').on('mouseleave', '.cursor-magnet, .btn-round', ohioRemoveMagneticFromCursor);

            function ohioRemoveMagneticFromCursor() {
                cursorOuterEl.style.transition = null;
                cursorOuterEl.style.width = null;
                cursorOuterEl.style.height = null;
                cursorOuterEl.style.marginLeft = null;
                cursorOuterEl.style.marginTop = null;

                /*Old code*/
                // cursorOuterEl.style.top = lastY + 'px';
                // cursorOuterEl.style.left = lastX + 'px';

                magneticFlag = false;
            }

            // Custom leave trigger
            $('body').on('ohio:cursor_mouseleave', function() {
                ohioRemoveMagneticFromCursor();

                cursorOuterEl.style.transform = cursorInnerEl.style.transform;

                cursorInnerEl.classList.remove('cursor-link-hover');
                cursorOuterEl.classList.remove('cursor-link-hover');

            });

            //iframe fix
            $('body').on('mouseenter', 'iframe', function() {
                cursorOuterEl.style.visibility = 'hidden';
                cursorInnerEl.style.visibility = 'hidden';
            });
            $('body').on('mouseleave', 'iframe', function() {
                cursorOuterEl.style.visibility = 'visible';
                cursorInnerEl.style.visibility = 'visible';
            });
            
            cursorInnerEl.style.visibility = 'visible';
            cursorOuterEl.style.visibility = 'visible';
        }
    }

    if ($('body').hasClass('ohio-anchor-onepage')) {
        $('body #masthead a:not(.clb-hamburger-holder)').on('click', function(event) {

            if ($(this).attr('href').includes('#') ) {
                event.preventDefault();
                var href = '#' + $(this).attr('href').split('#')[1];
    
                if ($(href).length) {
                    $('html, body').animate({
                        scrollTop: $(href).offset().top
                    }, 500, function() {
                        window.location.hash = href;
                    });
                }
    
                return false;
            }
        });

        if (window.location.hash.substring(0, 1) == '#') {
            if ($(window.location.hash).length) {
                $('html, body').animate({
                    scrollTop: $(window.location.hash).offset().top
                }, 500);
            }
        }
    }

    /* Breadcrumbs filters handler */
    $('.filter .select-inline select').change(function() {
        let $selected = $(this).find('option:selected');
        if ($selected.attr('data-select-href')) {
            window.location.assign($selected.attr('data-select-href'));
        }
    });

});