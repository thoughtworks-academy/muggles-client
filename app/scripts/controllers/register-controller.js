'use strict';

class RegisterController {

  constructor(userService) {

    this.userService = userService;
  }

  change_user_name(name) {

    console.log(name)
  }

  change_user_email(email) {

    if(!this.userService.verify_email(email)) {

      console.log('jaaaaaaaaaaaaaa')
    } else {
      console.log('success')
    }
  }

  change_user_password(password) {

    if(!this.userService.verify_password(password)) {

      console.log('failed');
    } else {

    console.log('success')
    }
  }

  change_user_repeat_password(password, repeat_password) {

    if(!this.userService.verify_repeat_password(password, repeat_password)) {

      console.log('not equal')
    } else {
      console.log('equal');
    }
  }

}

RegisterController.$inject = ['userService'];

export { RegisterController }
