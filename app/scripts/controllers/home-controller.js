'use strict';

class HomeController {
  constructor(homeService) {
    this.types = ['日', '周', '月', '季'];
    this.levels = ['A', 'B', 'C', 'D'];
    console.log('hello angularJS');
    homeService.getTrainee().then((trainees => {
      console.log(trainees.data);
      this.trainees = trainees.data;
    }));
  }

  add_appraise(type, level){
    console.log('run add appraise');
    console.log(type)
  }

;
}

HomeController.$inject = ['homeService'];
export default HomeController;
