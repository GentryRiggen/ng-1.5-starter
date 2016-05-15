(function() {
  'use strict';

  angular
    .module('ng15Starter')
    .service('LibraryService', LibraryService);

  /** @ngInject */
  function LibraryService(API_URL, $http) {
    var url = API_URL + '/books'
    function getAll(page, pageSize) {
      page = page ? page : 1;
      pageSize = pageSize ? pageSize : 100;
      return $http.get(url + '?page=' + page + '&pageSize=' + pageSize);
    }

    function getById(id) {
      return $http.get(url + '/' + id);
    }

    function search(search) {
      return $http.get(url + '?q=' + search);
    }

    return {
      getAll: getAll,
      getById: getById,
      search: search
    };
  }
})();
