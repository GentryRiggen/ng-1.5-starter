(function() {
  'use strict';

  angular
    .module('ng15Starter')
    .service('GithubService', GithubService);

  /** @ngInject */
  function GithubService(API_URL, $http) {
    function getAll() {
      return $http.get(API_URL + '/users');
    }
    
    function getById(id) {
      return $http.get(API_URL + '/users/' + id);
    }
    
    function searchUsers(search) {
      return $http.get(API_URL + '/search/users?q=' + search);
    }

    function getByUsername(username) {
      return $http.get(API_URL + '/users/' + username);
    }
    
    return {
      getAll: getAll,
      getById: getById,
      searchUsers: searchUsers,
      getByUsername: getByUsername
    };
  }
})();
