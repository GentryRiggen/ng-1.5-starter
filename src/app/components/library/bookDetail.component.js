(function () {
  "use strict";
  angular
    .module("ng15Starter")
    .component("bookDetail", {
      templateUrl: 'app/components/library/bookDetail.component.html',
      controllerAs: 'vm',
      controller: ["LibraryService", userDetail]
    });

  function userDetail(LibraryService) {
    var vm = this;
    vm.book = false;

    vm.$routerOnActivate = function (next) {
      LibraryService.getById(next.params.id)
        .then(function (resp) {
          vm.book = resp.data;
          var rating = vm.book.rating
            ? parseInt(vm.book.rating)
            : 0;
          vm.ratedStars = new Array(rating);
          vm.emptyStars = new Array(5 - rating);
          console.log(vm.ratedStars);
          console.log(vm.emptyStars);
        });
    };
  }
})();
