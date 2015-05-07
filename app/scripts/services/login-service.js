'use strict';

class LoginService {
  constructor($http, $location) {
    this.http = $http;
    this.location = $location;
  }

  login(user) {
    return this.http.post('api/trainers/login', {user: user}).
      then(result => result.data);
  }
}

export { LoginService };
