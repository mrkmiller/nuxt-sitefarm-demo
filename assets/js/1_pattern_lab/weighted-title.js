import jQuery from 'jquery';

(($ => {

  $(document).ready(() => {

    const weightedClass = 'panel__title--weighted';
    const $title = $('.panel--weighted-underline .panel__title');

    // Wrap the first word of each weighted title with a span
    $title.each(function () {
      const $this = $(this);
      let text = $this.html();
      const pattern = /^((\S{3,})|(\S{1,2}\s\S+))/;
      const matches = text.match(pattern);

      if (matches) {
        text = text.replace(pattern, `<span class="${weightedClass}">${matches[0]}</span>`);
      }
      else {
        text = `<span class="${weightedClass}">${text}</span>`;
      }
      $this.html(text);
    });

  });

}))(jQuery); // end jquery enclosure
