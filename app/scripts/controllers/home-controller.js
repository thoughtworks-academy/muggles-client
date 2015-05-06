'use strict';

class home_controller {
  constructor(muggles_service) {
    muggles_service.get_students();
    console.log('hello angularJS');
  }

;
}

home_controller.$inject = ['muggles_service'];
export default home_controller;
