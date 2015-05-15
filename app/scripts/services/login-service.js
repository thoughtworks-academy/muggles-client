'use strict';

class LoginService {
  constructor($http) {
    this.http = $http;
  }

  login(user) {
    return this.http.post('api/sessions/login', {user: user}).
      then(result => result.data);
  }
}

export { LoginService };
