'use strict';

import { RegisterController } from './register';
import { AppraiseController } from './appraise';

var moduleName='controllers';

angular.module(moduleName, [])
  .controller('registerController', RegisterController)
  .controller('appraiseController', AppraiseController);

export { moduleName }
