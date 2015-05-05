'use strict';

const EMAIL_IS_REQUIRED = '邮箱不能为空';
const PASSWORD_IS_REQUIRED = '密码不能为空';

class loginController {

    constructor() {
        this.email_required_signal = false;
        this.email_is_required = EMAIL_IS_REQUIRED;

        this.password_required_signal = false;
        this.password_is_required = PASSWORD_IS_REQUIRED;
    }

    check_email(email) {
        this.email_required_signal = false;

        if (email === '') {
            this.email_required_signal = true;
        }
    }

    check_password(password) {
        this.password_required_signal = false;

        if (password === '') {
            this.password_required_signal = true;
        }
    }

    login(user) {
        console.log(this.user.role);
        console.log('login...');
    }
}

export { loginController };
