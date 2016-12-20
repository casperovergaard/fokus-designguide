// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

// Dependencies
import $ from 'jquery';
import jQuery from 'jquery';
import foundationPlugins from './components/foundationPlugins';
import velocity from 'velocity-animate';
import validation from 'jquery-validation';

// App
import smoothscroll from './components/smoothscroll'

// Init
$(() => {

  // $("#validate").focus();
  // $("#validate").val('Johnson.dk');

  $('.menu').velocity({ translateX: 0 });
  // new smoothscroll();
  new validation();
  $(document).foundation();
});
