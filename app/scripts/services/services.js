'use strict';

import { UserService } from './user';
import {HomeService} from 'home-service';
import { LoginService} from './login'

var moduleName = 'services';

angular.module(moduleName, [])
  .service('userService', UserService)
  .service('homeService', HomeService)
  .service('loginService', LoginService);

export { moduleName }

