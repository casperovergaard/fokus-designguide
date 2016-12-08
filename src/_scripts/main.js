// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

// Dependencies
import $ from 'jquery';
import jQuery from 'jquery';
import foundationPlugins from './components/foundationPlugins';
import velocity from 'velocity-animate';

// App
import smoothscroll from './components/smoothscroll'

// Init
$(() => {
  $('.menu').velocity({ translateX: 0 });
  new smoothscroll();
  $(document).foundation();
});
