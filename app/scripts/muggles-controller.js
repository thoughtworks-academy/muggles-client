'use strict';

import home_controller from './controllers/home-controller';

var moduleName = 'muggles_controller';

angular.module(moduleName, [])
  .controller('home-controller', home_controller);

export default  moduleName;

