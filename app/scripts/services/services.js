'use strict';

import { UserService } from './user';
import { LoginService} from './login'

var moduleName='services';

angular.module(moduleName, [])
  .service('userService', UserService)
  .service('loginService',LoginService);

export { moduleName }

