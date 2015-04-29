'use strict';

import RegisterService from '../services/register-service'

class RegisterController {
  constructor(RegisterService) {
    this.RegisterService = RegisterService;
    this.init();
  }

  init(){
    this.RegisterService.getUsers().then(users => {
      this.users = users;
      console.log(users);
    });
  }
}

RegisterController.$inject = ['RegisterService'];

export { RegisterController }
