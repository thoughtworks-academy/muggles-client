'use strict';

const NAME_REQUIRED_TIP = '姓名不能为空';
const NAME_ERROR_TIP = '姓名必须为中文';

const EMAIL_REQUIRED_TIP = '邮箱不能为空';
const EMAIL_ERROR_TIP = '请输入正确的邮箱格式';

const PASSWORD_REQUIRED_TIP = '密码不能为空';
const PASSWORD_ERROR_TIP = '密码至少为6位字节';

const REPEAT_PASSWORD_REQUIRED_TIP = '重复密码不能为空';
const REPEAT_PASSWORD_ERROR_TIP = '重复密码需与密码一致';

const PHONE_NUMBER_REQUIRED_TIP = '手机号不能为空';

class RegisterController {

  constructor(userService) {

    this.userService = userService;

    this.name_required_signal = false;
    this.name_required_tip = NAME_REQUIRED_TIP;
    this.name_error_signal = false;
    this.name_error_tip = NAME_ERROR_TIP;
    this.name_correct_signal = false;

    this.email_required_signal = false;
    this.email_required_tip = EMAIL_REQUIRED_TIP;
    this.email_error_signal = false;
    this.email_error_tip = EMAIL_ERROR_TIP;
    this.email_correct_signal = false;

    this.password_required_signal = false;
    this.password_required_tip = PASSWORD_REQUIRED_TIP;
    this.passsword_error_signal = false;
    this.password_error_tip = PASSWORD_ERROR_TIP;
    this.password_correct_signal = false;

    this.repeat_password_required_signal = false;
    this.repeat_password_required_tip = REPEAT_PASSWORD_REQUIRED_TIP;
    this.repeat_passsword_error_signal = false;
    this.repeat_password_error_tip = REPEAT_PASSWORD_ERROR_TIP;
    this.repeat_password_correct_signal = false;

    this.phone_number_required_signal = false;
    this.phone_number_required_tip = PHONE_NUMBER_REQUIRED_TIP;
  }

    change_user_name(name) {

      if(name === '') {

        this.name_required_signal = true;
        this.name_error_signal = false;
        this.name_correct_signal = false;
      } else if(!this.userService.verify_name(name)) {

        this.name_required_signal = false;
        this.name_error_signal = true;
        this.name_correct_signal = false;
      } else {

        this.name_required_signal = false;
        this.name_error_signal = false;
        this.name_correct_signal = true;
      }
    }

    change_user_email(email) {

    if(email === '') {

      this.email_required_signal = true;
      this.email_error_signal = false;
      this.email_correct_signal = false;
    } else if(!this.userService.verify_email(email)) {

      this.email_required_signal = false;
      this.email_error_signal = true;
      this.email_correct_signal = false;
    } else {

      this.email_required_signal = false;
      this.email_error_signal = false;
      this.email_correct_signal = true;
    }
  }

  change_user_password(password) {

    if(password === ''){

      this.password_required_signal = true;
      this.password_error_signal = false;
      this.password_correct_signal = false;
    } else if(!this.userService.verify_password(password)) {

      this.password_required_signal = false;
      this.password_error_signal = true;
      this.password_correct_signal = false;
    } else {

      this.password_required_signal = false;
      this.password_error_signal = false;
      this.password_correct_signal = true;

    }
  }

  change_user_repeat_password(password, repeat_password) {

    if(repeat_password === ''){

      this.repeat_password_required_signal = true;
      this.repeat_password_error_signal = false;
      this.repeat_password_correct_signal = false;
    } else if(!this.userService.verify_repeat_password(password, repeat_password)) {

      this.repeat_password_required_signal = false;
      this.repeat_password_error_signal = true;
      this.repeat_password_correct_signal = false;
    } else {

      this.repeat_password_required_signal = false;
      this.repeat_password_error_signal = false;
      this.repeat_password_correct_signal = true;
    }
  }

  create_verification_code() {

    this.verification_code = this.userService.create_verification_code();
  }

  submit_register_information(user) {
    console.log(user);
    if(!user) {
      this.name_required_signal = true;
      this.email_required_signal = true;
      this.password_required_signal = true;
      this.repeat_password_required_signal = true;
      this.phone_number_required_signal = true;
    }

    if(!user.name) {
      this.name_required_signal = true;
    }

    if(!user.email) {
      this.name_required_signal = true;
    }

    if(!user.gender) {
      this.name_required_signal = true;
    }
  }
}


RegisterController.$inject = ['userService'];

export { RegisterController }
