'use strict';

class HomeController {
  constructor(homeService) {
    console.log('hello angularJS');
    homeService.getStudents().then((students => console.log(students)));
  }

;
}

HomeController.$inject = ['homeService'];
export default HomeController;
