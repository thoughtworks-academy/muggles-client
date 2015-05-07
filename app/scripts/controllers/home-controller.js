'use strict';

class HomeController {
  constructor(homeService) {
    this.types = [{name:'日', value: 'date'}, {name: '周', value: 'week'}, {name: '月', value: 'month'}, {name: '季', value: 'season'}];
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

  type_change(type){
    switch (type) {
      case 'date':
            console.log('date');
            break;
      case 'week':
            console.log('week');
            break;
      case 'month':
            console.log('month');
            break;
      case 'season':
            console.log('season');
            break;
      default :
            console.log('nothing');
    }
  }
}

HomeController.$inject = ['homeService'];
export { HomeController };
