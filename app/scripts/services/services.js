'use strict';

import { RegisterService } from './register'
import { InvitationService } from './invitation'
import { TraineeService } from './trainee';

var moduleName='services';

angular.module(moduleName, [])
  .service('registerService', RegisterService)
  .service('invitationService', InvitationService)
  .service('traineeService', TraineeService);

export { moduleName }

