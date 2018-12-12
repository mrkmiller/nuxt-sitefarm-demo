import jQuery from 'jquery';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';

(($ => {

  $(document).ready(() => {
    const $gallery_item = $('.gallery a');
    const $dialog = $('.pswp')[0];
    const items = [];

    // Create an array of all the slides
    $gallery_item.each(function () {
      const $size = $(this).data('size').split('x');

      const item = {
        src: $(this).attr('href'),
        w: $size[0],
        h: $size[1],
        title: $(this).attr('title'),
        msrc: $(this).find('img').attr('src')
      };

      items.push(item);
    });

    // Open Photoswipe when clicking a thumbnail
    $gallery_item.on('click', function (event) {
      event.preventDefault();

      // First unbind the click event that PatternLab adds
      $(this).removeAttr('onclick');

      const index = $gallery_item.index(this);
      const thumbnail = $(this).find('img')[0];
      const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
      const rect = thumbnail.getBoundingClientRect();

      const options = {
        index,
        bgOpacity: 0.95,
        showHideOpacity: true,
        shareEl: false,
        getThumbBoundsFn(index) {
          return {x: rect.left, y: rect.top + pageYScroll, w: rect.width};
        }
      };

      // Initialize PhotoSwipe
      const lightBox = new PhotoSwipe($dialog, PhotoSwipeUI_Default, items, options);
      lightBox.init();
    });

  });

}))(jQuery);
