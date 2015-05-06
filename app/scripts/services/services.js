'use strict';

import { UserService } from './user';
import {HomeService} from 'home-service';
var moduleName='services';

angular.module(moduleName, [])
  .service('userService', UserService)
  .service('homeService', HomeService);

export { moduleName }

