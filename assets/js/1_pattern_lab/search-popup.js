import jQuery from 'jquery';
import './vendor/modernizr-custom.js';

((($, Modernizr) => {

  $(document).ready(() => {
    const $popup = $('.search-popup');
    const $btn_open = $('.js-search-popup__open');
    const $btn_close = $('.search-popup__close');
    const $input = $('.search-popup__input');

    // Show the label if the browser cannot use a placeholder
    if (!Modernizr.placeholder) {
      $popup.addClass('search-popup--show-label');
    }

    // Toggle submenu when clicked
    $btn_open.on('click', e => {
      $popup.addClass('is-open');
      $input.focus();
      e.preventDefault();
      e.stopPropagation();
    });

    // Toggle submenu when clicked
    $btn_close.on('click', e => {
      $popup.removeClass('is-open');
      e.preventDefault();
      e.stopPropagation();
    });

  });

}))(jQuery, Modernizr); // end jquery enclosure
