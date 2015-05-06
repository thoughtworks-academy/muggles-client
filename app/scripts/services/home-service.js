'use strict';

class HomeService {

  constructor($http) {

    this.$http = $http
  }

  getTrainee(){
    return this.$http.get('api/groups/trainees').then(result => result)
  }
}

HomeService.$inject = ['$http'];

export default HomeService
