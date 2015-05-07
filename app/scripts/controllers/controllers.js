'use strict';

import { RegisterController } from './register';
import { AppraiseController } from './appraise';
import { LoginController } from './login-controller';
import { HomeController } from './home-controller';
var moduleName = 'controllers';

angular.module(moduleName, [])
  .controller('registerController', RegisterController)
  .controller('loginController', LoginController)
  .controller('homeController', HomeController)
  .controller('appraiseController', AppraiseController);

export { moduleName }
