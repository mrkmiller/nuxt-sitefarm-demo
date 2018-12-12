import jQuery from 'jquery';

(($ => {

  // This is assuming a Youtube or Vimeo iframe embed is present
  $('.hero-banner__video-play').on('click', e => {
    e.preventDefault();
    e.stopPropagation();

    const $videoContainer = $('.hero-banner__video-popup');
    const $video = $videoContainer.find('iframe');
    const src = $video.attr('src');
    let queryCharacter = '?';

    // Append the autoplay tag as a new parameter or appended to existing params
    if (src.includes('?')) {
      queryCharacter = '&';
    }
    $video.attr('src', `${src + queryCharacter}autoplay=1`);

    // Show the Video
    $videoContainer.removeClass('u-hidden');

    // Hide Everything else
    $('.hero-banner__body, .hero-banner__image').addClass('u-hidden');
  });

}))(jQuery); // end jquery enclosure
