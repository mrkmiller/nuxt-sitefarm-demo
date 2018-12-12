import jQuery from 'jquery';
import './vendor/modernizr-custom.js';

((($, Modernizr) => {

  $(document).ready(() => {
    const $menu = $('.quick-links');
    const $menu_title = $('.quick-links__title');
    const $menu_toggle = $('.quick-links__title .submenu-toggle');
    const $menu_link = $('.quick-links a');
    const submenu_open_class = 'submenu-toggle--open';
    const bp_medium_up = '(min-width: 992px)';
    let hoverTimer = false;
    let lastClick = null;

    // Hide the submenu when clicking off of it
    $('body').on('touchstart click', e => {
      if (!$(e.target).closest('.quick-links').length) {
        if (Modernizr.mq(bp_medium_up)) {
          $menu.hide();
          $menu_toggle.removeClass(submenu_open_class);
          $menu_title.attr('aria-expanded', 'false');
        }
      }
    });

    // Toggle the submenu on either focus or click but not both
    $menu_title.on('focus', e => {
      lastClick = e.currentTarget;
      $menu.slideDown('fast');
      $menu_toggle.addClass(submenu_open_class);
      $menu_title.attr('aria-expanded', 'true');
    }).on('click', e => {
      e.preventDefault();
      e.stopPropagation();
      if (e.currentTarget !== lastClick) {
        $menu.slideToggle('fast');
        $menu_toggle.toggleClass(submenu_open_class);
        $menu_title.blur();
        toggle_aria_expanded();
      }
      lastClick = null;
    });

    // Add focus events for accessibility to close the tray when leaving
    $menu_link.on('focus', () => {
      clearTimeout(hoverTimer);
    }).on('focusout', () => {
      hoverTimer = setTimeout(() => {
        $menu.hide();
        $menu_toggle.removeClass(submenu_open_class);
        $menu_title.attr('aria-expanded', 'false');
      }, 100);
    });

    $(window).resize(() => {
      $menu.hide();
      $menu_toggle.removeClass(submenu_open_class);
      $menu_title.attr('aria-expanded', 'false');
    });
    $menu.hide().removeClass('u-hidden--visually');

    var toggle_aria_expanded = () => {
      $menu_title.attr('aria-expanded', (index, attr) => attr === 'true' ? 'false' : 'true');
    };

  });

}))(jQuery, Modernizr); // end jquery enclosure
