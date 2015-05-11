'use strict';
class HomeController {

  constructor(homeService,$location) {
    this.types = ['日', '周', '月', '季'];
    this.levels = ['A', 'B', 'C', 'D', 'X'];
    this.homeService = homeService;
    this.date = new Date();
    this.location = $location;
    homeService.get_trainee().then((trainees => {
      this.trainees = trainees.data.trainees;
    }));
  }

  add_date_appraise(appraise, trainee, date) {
    appraise.appraised_date = date;
    appraise.type = '日';
    this.homeService.add_appraise(appraise, trainee);
  }

  add_date_appraises(trainees, date) {
    var appraise = {};
    appraise.appraised_date = date;
    appraise.type = '日';
    this.homeService.add_appraises(trainees, appraise);
  }

  add_week_appraise(appraise, trainee, date) {
    appraise.appraised_date = date;
    appraise.type = '周';
    this.homeService.add_appraise(appraise, trainee);
  }

  add_week_appraises(trainees, date){
    var appraise = {};
    appraise.appraised_date = date;
    appraise.type = '周';
    this.homeService.add_appraises(trainees, appraise);
  }

  add_month_appraise(appraise, trainee, date) {
    appraise.appraised_date = date;
    appraise.type = '月';
    this.homeService.add_appraise(appraise, trainee);
  }

  add_month_appraises(trainees, date){
    var appraise = {};
    appraise.appraised_date = date;
    appraise.type = '月';
    this.homeService.add_appraises(trainees, appraise);
  }

  type_change(type) {
    switch (type) {
      case '日':
        this.date_type = 'date';
        break;
      case '周':
        this.date_type = 'week';
        break;
      case '月':
        this.date_type = 'month';
        break;
      case '季':
        this.date_type = 'text';
        break;
      default :
        console.log('nothing');
    }
  }

  //show_modal() {
  //  this.show();
  //}
}

HomeController.$inject = ['homeService','$location'];
export { HomeController };
