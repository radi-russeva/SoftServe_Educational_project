// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js
// Feel free with using ES6 here.
import $ from 'jquery';

import onOpenMenu from './modules/elements-for-menu';
import scrollToTop from './modules/scroll-to-top';
// When DOM is ready
$(() => {
    onOpenMenu();
    scrollToTop();
});

