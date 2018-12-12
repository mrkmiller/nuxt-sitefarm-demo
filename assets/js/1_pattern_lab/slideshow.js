import jQuery from 'jquery';
window.jQuery = jQuery;
import 'slick-carousel';

(($ => {

  // Exit if the Slick library has not been loaded
  if (!$.isFunction($.fn.slick)) {
    return;
  }

  $(document).ready(() => {
    let $nav = $('.slider-nav');

    let mainOptions = {
      lazyLoad: 'progressive',
      slidesToShow: 1,
      slidesToScroll: 1,
      // arrows: false,
      fade: true
    };

    // Only set an "asNavFor" setting if there is actually a navigation element.
    if ($nav.length > 0) {
      mainOptions.asNavFor = '.slider-nav';
    }

    $('.slideshow').slick(mainOptions);
    $nav.slick({
      lazyLoad: 'progressive',
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slideshow',
      dots: false,
      centerMode: true,
      centerPadding: '70px',
      focusOnSelect: true
    });
  });

}))(jQuery); // end jquery enclosure
