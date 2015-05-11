'use strict';

import { HomeService } from './home-service';
import { LoginService} from './login-service'
import { RegisterService } from './register-service'
import { InvitationService } from './invitation-service'
import { TraineeService } from './trainee-service';
import { IndexService } from './index-service'

var moduleName = 'services';

angular.module(moduleName, [])
  .service('homeService', HomeService)
  .service('loginService', LoginService)
  .service('registerService', RegisterService)
  .service('invitationService', InvitationService)
  .service('traineeService', TraineeService)
  .service('indexService',IndexService);

export { moduleName }

