import jQuery from 'jquery';

(($ => {

  $(document).ready(() => {

    const $title = $('.collapse__title');

    // Accessibility: First remove any visually hidden classes and hide content
    $('.collapse__content').hide().removeClass('u-hidden--visually');

    $title.on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(this)
        .toggleClass('collapse__title--open collapse__title--closed')
        .next()
        .slideToggle(300);
    });

    // FAQ List toggle
    const $faqTitle = $('.list--faq > li:even');

    $faqTitle.on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(this).next().slideToggle(300);
    });

  });

}))(jQuery); // end jquery enclosure
