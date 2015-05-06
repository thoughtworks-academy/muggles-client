'use strict';

class loginService {
    constructor($http, $location) {
        this.http = $http;
        this.location = $location;
    }

    login(user) {
        return this.http.post('api/trainers', {user: user}).
            then(result => result.data);
    }
}

export { loginService };