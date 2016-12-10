'use strict';

export default class smoothscroll {
  constructor() {
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var target = $(this).attr('href');
        $(target).velocity('scroll', {
            duration: 500,
            offset: 0,
            easing: 'ease-in-out'
        });
    });
  }
}
