/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import * as bootstrap from 'bootstrap';
import $ from 'jquery';

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

$('.navbar-toggler').on('click',function() {
  if($('.navbar-toggler').hasClass('collapsed')){
    $('.navbar-toggler').removeClass('collapsed');
    $('.navbar-collapse').addClass('show');
  } else {
    $('.navbar-toggler').addClass('collapsed');
    $('.navbar-collapse').removeClass('show');
  }
});


