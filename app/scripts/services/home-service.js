'use strict';

class HomeService {

  constructor($http) {

    this.$http = $http
  }

  getStudents(){
    return this.$http.get('api/groups/trainees').then(result => result)
  }
}

HomeService.$inject = ['$http'];

export default HomeService
