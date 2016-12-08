'use strict';

export default class FullscreenVideo {
  constructor() {
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var target = $(this).attr('href');
        $(target).velocity('scroll', {
            duration: 500,
            offset: -79,
            easing: 'ease-in-out'
        });
    });
  }
}
