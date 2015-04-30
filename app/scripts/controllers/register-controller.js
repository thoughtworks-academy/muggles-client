'use strict';

const EMAIL_REQUIRED_TIP = '邮箱不能为空';
const EMAIL_ERROR_TIP = '请输入正确的邮箱格式';

class RegisterController {

  constructor(userService) {

    this.userService = userService;
    this.email_required_signal = false;
    this.email_error_signal = false;
  }

  change_user_email(email) {

    if(email === '') {

      this.email_error_signal = false;
    } else if(!this.userService.verify_email(email)) {

      this.email_error_tip = EMAIL_ERROR_TIP;
      this.email_error_signal = true;
    } else {

      this.email_error_signal = false;
    }
  }

  change_user_password(password) {

    if(!this.userService.verify_password(password)) {

      console.log(EMAIL_ERROR_TIP);
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
