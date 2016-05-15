(function () {
  "use strict";
  angular
    .module('ng15Starter')
    .component("app", {
      templateUrl: 'app/components/app/app.component.html',
      $routeConfig: [
        {
          path: '/users',
          component: 'userList',
          name: 'Users'
        },
        {
          path: '/users/:username',
          component: 'userDetail',
          name: 'UserDetail'
        },
        {
          path: '/**',
          redirectTo: ['Users']
        }
      ]
    });
})();
