'use strict';

class LoginService {
  constructor($http) {
    this.http = $http;
  }

  login(user) {
    return this.http.post('api/sessions/create', {user: user}).
      then(result => result.data);
  }
}

export { LoginService };
