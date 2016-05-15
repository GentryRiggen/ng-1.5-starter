(function () {
  "use strict";
  angular
    .module('ng15Starter')
    .component("app", {
      templateUrl: 'app/components/app/app.component.html',
      $routeConfig: [
        {
          path: '/books',
          component: 'bookList',
          name: 'Books'
        },
        {
          path: '/books/:id',
          component: 'bookDetail',
          name: 'BookDetail'
        },
        {
          path: '/**',
          redirectTo: ['Books']
        }
      ]
    });
})();
