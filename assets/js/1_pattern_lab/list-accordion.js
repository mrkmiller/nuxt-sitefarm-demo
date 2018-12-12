import jQuery from 'jquery';

(($ => {

  $(document).ready(() => {

    const content = $('.list--accordion li:odd');
    const button = $('.list--accordion li:even');

    // Hide all content
    content.hide();

    // Slide toggle on button click
    button.on('click', function () {
      const $this = $(this);
      $this.toggleClass('active');
      $this.next().slideToggle();
    });

  });

}))(jQuery); // end jquery enclosure
