'use strict';

class RegisterController {

  constructor(userService) {

    this.userService = userService;
  }

  change_user_name(user_name) {

    console.log(user_name)
  }

  change_user_email(user_email) {

    if(!this.userService.verify_email(user_email)) {

      console.log('jaaaaaaaaaaaaaa')
    } else {
      console.log('success')
    }
  }

  change_user_password(user_password) {

    if(!this.userService.verify_password(user_password)) {

      console.log('failed');
    } else {

    console.log('success')
    }
  }
}

RegisterController.$inject = ['userService'];

export { RegisterController }
