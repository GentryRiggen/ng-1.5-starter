(function () {
  "use strict";
  angular
    .module("ng15Starter")
    .component("userList", {
      templateUrl: 'app/components/users/userList.component.html',
      controllerAs: 'vm',
      controller: ["GithubService", userList]
    });

  function userList(GithubService) {
    var vm = this;
    vm.users = [];

    vm.$onInit = function () {
      getAllUsers();
    };

    function getAllUsers() {
      GithubService.getAll()
        .then(function (resp) {
          vm.users = resp.data;
        });
    }

    vm.search = function (search) {
      if (search.length === 0) {
        getAllUsers();
      } else {
        GithubService.searchUsers(search)
          .then(function (resp) {
            vm.users = resp.data.items;
          });
      }
    };
  }
})();
