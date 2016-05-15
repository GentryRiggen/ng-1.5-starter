(function () {
  "use strict";
  angular
    .module("ng15Starter")
    .component("bookList", {
      templateUrl: 'app/components/library/bookList.component.html',
      controllerAs: 'vm',
      controller: ["LibraryService", bookList],
      bindings: {
        "$router": "<"
      }
    });

  function bookList(LibraryService) {
    var vm = this;
    vm.books = [];

    vm.$onInit = function () {
      getAllBooks();
    };

    function getAllBooks() {
      LibraryService.getAll()
        .then(function (resp) {
          vm.books = resp.data.books;
          console.log(vm.books);
        });
    }

    vm.search = function (search) {
      if (search.length === 0) {
        getAllBooks();
      } else {
        LibraryService.search(search)
          .then(function (resp) {
            vm.books = resp.data.books;
          });
      }
    };

    vm.goTo = function (id) {
      vm.$router.navigate(['BookDetail', {id: id}]);
    };
  }
})();
