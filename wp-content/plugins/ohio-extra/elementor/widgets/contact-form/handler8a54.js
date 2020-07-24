jQuery( window ).on('elementor/frontend/init', () => {
    elementorFrontend.hooks.addAction('frontend/element_ready/ohio_contact_form.default', ( $element ) => {
        jQuery(window).trigger('ohio:handle_contact_forms');
    });
});