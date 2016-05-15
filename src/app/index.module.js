(function() {
  'use strict';

  var module = angular
    .module('ng15Starter', [
      'ngComponentRouter',
      'toastr'
    ]);

  module.value('$routerRootComponent', 'app');
})();
