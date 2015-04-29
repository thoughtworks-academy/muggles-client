'use strict';

class RegisterService {
  constructor($http){
    this.$http = $http
  }

  getUsers(){
    return this.$http.get('https://api.github.com/users').then(result => result.data)
  }

}

RegisterService.$inject = ['$http'];

export { RegisterService }
