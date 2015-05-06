'use strict';

import moment from 'moment'
const CODE_LENGTH = 4;

class UserService {

  constructor($http) {

    this.$http = $http
  }

  verify_name(name) {

    let result = true;
    let name_regular =  /^[\u4e00-\u9fa5]+$/i;

    if(!name_regular.exec(name)){

      result = false
    }

    return result;
  }

  verify_email(email) {

    let result = true;
    let email_regular = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;

    if(!email_regular.exec(email)){

      result = false
    }

    return result;
  }

  find_user_by_email(email) {
    return this.$http.get('/api/trainees/' + email)
      .then(result => result.data)
  }

  verify_password(password) {

    let result = true;
    let password_regular = /^(\w){6,20}$/;

    if(!password_regular.exec(password)){

      result = false
    }

    return result;
  }

  verify_repeat_password(password, repeat_password) {

    let result = true;

    if(repeat_password !== password){

      result = false
    }

    return result;
  }

  verify_phone_number(phone_number) {

    let result = true;
    let phone_number_reg = /^1[3|4|5|8][0-9]\d{4,8}$/;

    if(!phone_number_reg.exec(phone_number)){

      result = false
    }

    return result;
  }

  create_verification_code() {

    let code = '';
    let randomCode = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
      'S','T','U','V','W','X','Y','Z');

    for(var i = 0; i < CODE_LENGTH; i++) {

      var index = Math.floor(Math.random()*36);
      code += randomCode[index];
    }
    return code;
  }

  find_invitation_code(code) {

    return this.$http.get('/api/invitation/' + code).then(result => result.data)
  }

  create_user(user) {

    let create_date = moment().format('YYYY-MM-DD HH:mm:ss');

    return this.$http.post('/api/trainees', {
      name: user.name,
      email: user.email,
      gender: user.gender,
      password: user.password,
      create_date: create_date,
      phone_number: user.phone_number,
      current_group: '554983027cb6030c4268d059'
    }).then(result => result.data)
  }
}

UserService.$inject = ['$http'];

export { UserService }
