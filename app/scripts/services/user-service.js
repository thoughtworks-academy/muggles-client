'use strict';


class UserService {

  constructor($http) {

    this.$http = $http
  }

  verify_email(email) {

    let result = true;
    let email_regular = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;

    if(!email_regular.exec(email)){

      result = false
    }

    return result;
  }

  verify_password(password) {

    let result = true;
    let password_regular = /^(\w){6,20}$/;

    if(!password_regular.exec(password)){

      result = false
    }

    return result;
  }
}

UserService.$inject = ['$http'];

export { UserService }
