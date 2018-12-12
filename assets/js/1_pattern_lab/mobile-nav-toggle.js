import jQuery from 'jquery';
import './vendor/modernizr-custom.js';

((($, Modernizr) => {

  $(document).ready(() => {
    const $menu_toggle = $('.js-nav-toggle');
    const $menu_navbar = $('.l-navbar');
    const bp_medium_up = '(min-width: 992px)';
    let prev_menu_focus = false;

    // Toggle open and close the off-canvas menu
    $menu_toggle.click(e => {
      e.preventDefault();
      e.stopPropagation();
      $menu_toggle.toggleClass('nav-toggle--active');
      $menu_navbar.toggleClass('menu--closed menu--open');
      toggle_aria_expanded();
    });

    // Hide the off-canvas menu when leaving focus
    $('body').on('focus', 'a', function (e) {
      // Check that this is mobile so that it uses the off-canvas menu
      if (!Modernizr.mq(bp_medium_up)) {
        // Check that the focus is off the menu
        if ($(e.target).closest('.l-navbar').length) {
          prev_menu_focus = true;
          $menu_toggle.addClass('nav-toggle--active');
          $menu_toggle.attr('aria-expanded', 'true');
          $menu_navbar.addClass('menu--open').removeClass('menu--closed');
        }
        else {
          // Close the off-canvas menu if the previous focus was in the menu and
          // The menu toggle is not being clicked again.
          if (prev_menu_focus && !this.className.includes('js-nav-toggle')) {
            $menu_navbar.removeClass('menu--open').addClass('menu--closed');
            $menu_toggle.attr('aria-expanded', 'false');
            $menu_toggle.removeClass('nav-toggle--active');
          }
          prev_menu_focus = false;
        }
      }
    });

    var toggle_aria_expanded = () => {
      $menu_toggle.attr('aria-expanded', (index, attr) => attr === 'true' ? 'false' : 'true');
    };

  });

}))(jQuery, Modernizr); // end jquery enclosure
