'use strict';

class HomeController {
  constructor(homeService) {
    this.types = ['日', '周', '月', '季'];
    this.levels = ['A', 'B', 'C', 'D', 'X'];
    this.homeService = homeService;
    this.trainee = {};
    homeService.get_trainee().then((trainees => {
      console.log(trainees.data);
      this.trainees = trainees.data;
    }));
  }

  add_appraise(apparice, trainee) {
    console.log(apparice);
    this.homeService.add_appraise(apparice, trainee);
  }
}

HomeController.$inject = ['homeService'];
export { HomeController };
