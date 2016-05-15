/* global moment:false */
(function () {
  'use strict';

  angular
    .module('ng15Starter')
    .constant('moment', moment)
    .constant('API_URL', 'https://api.github.com');
})();
