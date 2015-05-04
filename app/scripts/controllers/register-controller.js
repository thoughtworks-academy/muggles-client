'use strict';

const NAME_REQUIRED_TIP = '姓名不能为空';
const EMAIL_REQUIRED_TIP = '邮箱不能为空';
const EMAIL_ERROR_TIP = '请输入正确的邮箱格式';
const PASSWORD_REQUIRED_TIP = '密码不能为空';
const PASSWORD_ERROR_TIP = '密码至少为6-20位字节';
const REPEAT_PASSWORD_ERROR_SIGNAL = '重复密码需与密码一致';
class RegisterController {

  constructor(userService) {

    this.userService = userService;

    this.email_required_signal = false;
    this.email_required_tip = EMAIL_REQUIRED_TIP;
    this.email_error_signal = false;
    this.email_error_tip = EMAIL_ERROR_TIP;

  }

    change_user_email(email) {

    if(email === '') {

      this.email_required_signal = true;
      this.email_error_signal = false;
    } else if(!this.userService.verify_email(email)) {

      this.email_required_signal = false;
      this.email_error_signal = true;
    } else {

      this.email_required_signal = false;
      this.email_error_signal = false;
    }
  }

  change_user_password(password) {

    if(password === ''){

      this.password_error_signal = false;
    } else if(!this.userService.verify_password(password)) {

      this.password_error_tip = PASSWORD_ERROR_TIP;
      this.password_error_signal = true;
    } else {

      this.password_error_signal = false;
    }
  }

  change_user_repeat_password(password, repeat_password) {

    if(!this.userService.verify_repeat_password(password, repeat_password)) {

      this.repeat_password_error_tip = REPEAT_PASSWORD_ERROR_SIGNAL;
      this.repeat_password_error_signal = true;
    } else {

      this.repeat_password_error_signal = false;
    }
  }


  submit_register_information(user) {
    console.log(user)
  }
}


RegisterController.$inject = ['userService'];

export { RegisterController }
