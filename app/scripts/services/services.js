'use strict';

import { RegisterService } from './register'
import { InvitationService } from './invitation'
import { UserService } from './user';

var moduleName='services';

angular.module(moduleName, [])
  .service('registerService', RegisterService)
  .service('invitationService', InvitationService)
  .service('userService', UserService);

export { moduleName }

