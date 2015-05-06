'use strict';

import { UserService } from './user';

var moduleName='services';

angular.module(moduleName, [])
  .service('userService', UserService);

export { moduleName }

