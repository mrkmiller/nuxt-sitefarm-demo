import jQuery from 'jquery';
import './vendor/modernizr-custom.js';
window.jQuery = jQuery;
require('jquery-hoverintent');
require('superfish');

((($, Modernizr, window) => {

  $(document).ready(() => {
    const $menu = $('.primary-nav');
    const $menuMega = $('.primary-nav--mega');
    const $menuSuperfish = $('.primary-nav--superfish > .menu');
    const $menu_sub = $('.primary-nav .menu .menu');
    const $menu_sub_lower = $('.primary-nav .menu .menu .menu');
    const $menu_link = $('.primary-nav a');
    const bp_medium_up = '(min-width: 992px)';
    const $submenuToggle = $('.primary-nav .submenu-toggle');
    let hoverTimer = false;
    const hoverDelay = 300;
    const maxDepth = 2; // How deep Superfish dropdowns should go

    const megaDropDown = () => {
      $menuMega.hoverIntent(() => {
        clearTimeout(hoverTimer);
        $menuMega.addClass('is-hover');
      }, () => {
        hoverTimer = setTimeout(() => {
          $menuMega.removeClass('is-hover');
        }, hoverDelay);
      });

      // Add focus events for accessibility
      $menu_link.on('focus', e => {
        clearTimeout(hoverTimer);
        $menuMega.addClass('is-hover');
      });
      $menu_link.on('focusout', e => {
        hoverTimer = setTimeout(() => {
          $menuMega.removeClass('is-hover');
        }, hoverDelay);
      });
    };

    const menuSwitch = (mql, legacy) => {
      // Desktop
      if (mql.matches || legacy) {
        // Initialize the Mega Menu
        if ($menuMega.length) {
          // Show submenus
          $menu_sub.show();
          // Hide Lower submenus
          $menu_sub_lower.hide();

          // Enable the megamenu dropdown
          megaDropDown();
        }

        // Initialize the Superfish dropdowns
        if ($menuSuperfish.length) {
          $menuSuperfish.superfish({
            hoverClass: 'sf--hover',
            delay: hoverDelay,
            onBeforeShow() {
              const depth = this.parents('.menu').length;
              // If the maximum depth has already been reached, remove the
              // classes signifying there are children
              if (depth === maxDepth) {
                $(this).find('a').removeClass('sf-with-ul');
              }

              // Don't show submenus lower than the maximum depth
              if (depth > maxDepth) {
                $(this).addClass('u-hidden--visually');
              }
            }
          });
        }

      }

      // Mobile
      else {
        // Disable the Mega Menu
        if ($menuMega.length) {
          // Remove hover bind
          $menu.off('mouseenter mouseleave');
        }

        // Disable the Superfish dropdowns
        if ($menuSuperfish.length) {
          $menuSuperfish.superfish('destroy');
          $menuSuperfish.find('.u-hidden--visually').removeClass('u-hidden--visually');
        }

        // Hide submenus
        $menu_sub.hide();
        // Remove the mobile submenu toggle class
        $submenuToggle.removeClass('submenu-toggle--open');
      }
    };

    // Watch for changes to the browser size
    if (Modernizr.matchmedia) {
      // get MediaQueryList Interface
      const mql = window.matchMedia(bp_medium_up);

      mql.addListener(menuSwitch);
      // On Load
      menuSwitch(mql);
    }
    // Legacy without the ability to detect media queries. Render desktop
    else {
      menuSwitch(false, true);
    }

    // Toggle submenu when clicked
    $submenuToggle.click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(this).toggleClass('submenu-toggle--open')
        .parent().next('.menu').slideToggle('fast');
    });

    // If this is using a Mega Menu, ensure that we inform the rest of the site.
    if ($menuMega.length) {
      $('body').addClass('has-mega');
    }

  });

}))(jQuery, Modernizr, window); // end jquery enclosure
