import jQuery from 'jquery';
import './vendor/modernizr-custom.js';

// Panel Mobile Collapse
((($, Modernizr, window) => {

  $(document).ready(() => {

    const bp_medium_up = '(min-width: 992px)';
    const $panel_title = $('.panel--mobile-collapse .panel__title');
    const $panel_content = $('.panel--mobile-collapse .panel__content');

    const mobileSwitch = (mql, legacy) => {
      // Desktop
      if (mql.matches || legacy) {
        // Remove click bind from title
        $panel_title.off('click');
        $panel_content.show();
      }

      // Mobile
      else {
        // First: hide content
        $panel_content.hide();

        $panel_title.on('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          $(this).siblings('.panel__content').slideToggle(300);
        });
      }
    };

    // Watch for changes to the browser size
    if (Modernizr.matchmedia) {
      // get MediaQueryList Interface
      const mql = window.matchMedia(bp_medium_up);

      mql.addListener(mobileSwitch);
      // On Load
      mobileSwitch(mql);
    }
    // Legacy without the ability to detect media queries. Render desktop
    else {
      mobileSwitch(false, true);
    }

  });

}))(jQuery, Modernizr, window); // end jquery enclosure
