jQuery( window ).on('elementor/frontend/init', () => {
    elementorFrontend.hooks.addAction('frontend/element_ready/ohio_accordion.default', ( $element ) => {
        jQuery(window).trigger('ohio:handle_accordion_box');
        jQuery(window).trigger('ohio:handle_accordion_box_size');
    });
});