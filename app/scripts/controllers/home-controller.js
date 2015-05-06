'use strict';

class HomeController {
  constructor(homeService) {
    console.log('hello angularJS');
    homeService.getTrainee().then((trainees => {
      console.log(trainees.data);
      this.trainees = trainees.data;
    }));
  }

;
}

HomeController.$inject = ['homeService'];
export default HomeController;
