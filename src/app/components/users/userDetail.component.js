(function () {
  "use strict";
  angular
    .module("ng15Starter")
    .component("userDetail", {
      templateUrl: 'app/components/users/userDetail.component.html',
      $canActivate: function () {
        return true;
      },
      controllerAs: 'vm',
      controller: ["GithubService", userDetail]
    });

  function userDetail(GithubService) {
    var vm = this;
    vm.user = false;

    vm.$routerOnActivate = function (next) {
      GithubService.getByUsername(next.params.username)
        .then(function (resp) {
          vm.user = resp.data;
        });
    };
  }
})();
