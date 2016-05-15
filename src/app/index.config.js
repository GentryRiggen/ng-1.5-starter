(function() {
  'use strict';

  angular
    .module('ng15Starter')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
