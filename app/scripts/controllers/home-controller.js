'use strict';
class HomeController {

  constructor(homeService,$location) {
    this.types = ['日', '周', '月', '季'];
    this.levels = ['A', 'B', 'C', 'D', 'X'];
    this.homeService = homeService;

    this.date_type = 'date';
    this.location = $location;
    homeService.get_trainee().then((trainees => {
      this.trainees = trainees.data.trainees;
      this.userName = trainees.data.currentUserName;
    }));
  }

  add_appraise(apparice, trainee) {
    this.homeService.add_appraise(apparice, trainee);
  }

  add_appraises(trainees) {
    this.homeService.add_appraises(trainees);
  }

  type_change(type) {
    switch (type) {
      case '日':
        console.log('日');
        this.date_type = 'date';
        break;
      case '周':
        console.log('周');
        this.date_type = 'week';
        break;
      case '月':
        console.log('月');
        this.date_type = 'month';
        break;
      case '季':
        console.log('季');
        this.date_type = 'text';
        break;
      default :
        console.log('nothing');
    }
  }

  logout(){
    this.homeService.logout().then(() => this.location.path('/login'))
  }
}

HomeController.$inject = ['homeService','$location'];
export { HomeController };
