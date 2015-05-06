'use strict';

import { RegisterController } from './register';
import { AppraiseController } from './appraise';
import { LoginController } from './login';

var moduleName = 'controllers';

angular.module(moduleName, [])
  .controller('registerController', RegisterController)
  .controller('appraiseController', AppraiseController)
  .controller('loginController', LoginController);
export { moduleName }
