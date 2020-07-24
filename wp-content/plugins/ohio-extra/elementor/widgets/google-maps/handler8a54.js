jQuery( window ).on('elementor/frontend/init', () => {
    elementorFrontend.hooks.addAction('frontend/element_ready/ohio_google_maps.default', ( $element ) => {
        jQuery(window).trigger('ohio:handle_google_maps');
    });
});