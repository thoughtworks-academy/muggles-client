'use strict';

import { RegisterController } from './register-controller';
import { LoginController } from './login-controller';
import { AppraiseController } from './appraise-controller';
import { HomeController } from './home-controller';
import { IndexController } from './index-controller';

var moduleName = 'controllers';

angular.module(moduleName, [])
  .controller('registerController', RegisterController)
  .controller('loginController', LoginController)
  .controller('homeController', HomeController)
  .controller('appraiseController', AppraiseController)
  .controller('indexController',IndexController);

export { moduleName }
