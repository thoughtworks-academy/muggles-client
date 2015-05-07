'use strict';

import { HomeService } from './home-service';
import { LoginService} from './login'
import { RegisterService } from './register'
import { InvitationService } from './invitation'
import { TraineeService } from './trainee-service';

var moduleName = 'services';

angular.module(moduleName, [])
  .service('homeService', HomeService)
  .service('loginService', LoginService)
  .service('registerService', RegisterService)
  .service('invitationService', InvitationService)
  .service('traineeService', TraineeService);

export { moduleName }

