'use strict';

class HomeController {

  constructor(homeService,$location) {
    this.types = ['日', '周', '月', '季'];
    this.levels = ['A', 'B', 'C', 'D', 'X'];
    this.homeService = homeService;

    this.location = $location;
    homeService.get_trainee().then((trainees => {
      console.log(trainees.data);

      this.trainees = trainees.data.trainees;
      this.userName = trainees.data.currentUserName;
    }));
  }

  add_appraise(apparice, trainee) {
    console.log(apparice);
    this.homeService.add_appraise(apparice, trainee);
  }

  type_change(type) {
    switch (type) {
      case '日':
        console.log('日');
        break;
      case '周':
        console.log('周');
        break;
      case '月':
        console.log('月');
        break;
      case '季':
        console.log('季');
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
