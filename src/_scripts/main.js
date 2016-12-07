// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

// Dependencies
import $ from 'jquery';
import jQuery from 'jquery';
import foundationPlugins from './components/foundationPlugins';

// import videojs from 'video.js'

// App
// import FullscreenVideo from './components/fullscreenvideo'

// Init
$(() => {
  // new FullscreenVideo();
  $(document).foundation();
});
