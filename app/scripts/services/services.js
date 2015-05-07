'use strict';

import { RegisterService } from './register'
import { UserService } from './user';

var moduleName='services';

angular.module(moduleName, [])
  .service('registerService', RegisterService)
  .service('userService', UserService);

export { moduleName }

