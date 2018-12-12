import jQuery from 'jquery';
import './vendor/modernizr-custom.js';

((($, Modernizr, window) => {

  $(document).ready(() => {
    const $fixed = $('.l-header--fixed');
    const $headerBranding = $('.header__branding');
    const $navbar = $('.l-navbar');
    let headerHeight = $headerBranding.outerHeight();
    const bp_medium_up = '(min-width: 992px)';

    // Exit if the site is not using a fixed header
    if (!$fixed.length) {
      return;
    }

    $(window).scroll(function () {
      const position = $(this).scrollTop();

      if (position > headerHeight) {
        $fixed.addClass('is-fixed');
        $navbar.addClass('is-fixed');
      }
      else {
        $fixed.removeClass('is-fixed');
        $navbar.removeClass('is-fixed');
      }
    });

    // Watch for changes to the browser size
    if (Modernizr.matchmedia) {
      // get MediaQueryList Interface
      const mql = window.matchMedia(bp_medium_up);

      mql.addListener(mql => {
        headerHeight = $headerBranding.outerHeight();
      });
    }

    // Due to the header hanging over text, using hashtag anchor links is a
    // problem. We need to offset the page scroll to compensate.
    $(window).on('hashchange', () => {
      window.scrollTo(window.scrollX, window.scrollY - 120);
    });

  });

}))(jQuery, Modernizr, window); // end jquery enclosure
