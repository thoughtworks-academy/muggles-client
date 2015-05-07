'use strict';

class HomeController {
  constructor(homeService) {
    this.types = ['日', '周', '月', '季'];
    this.levels = ['A', 'B', 'C', 'D', 'X'];
    this.homeService = homeService;
    homeService.get_trainee().then((trainees => {
      console.log(trainees.data);
      
      this.trainees = trainees.data.trainees;
      this.userName = trainees.data.currentUserName;
    }));
  }

  add_appraise(apparice, trainee) {
    this.homeService.add_appraise(apparice, trainee);
  }
}

HomeController.$inject = ['homeService'];
export { HomeController };
