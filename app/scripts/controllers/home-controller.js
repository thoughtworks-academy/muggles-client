'use strict';
class HomeController {

  constructor(homeService, $location, $timeout) {
    this.types = ['日', '周', '月', '季'];
    this.levels = ['A', 'B', 'C', 'D', 'X'];
    this.homeService = homeService;
    this.date = new Date();
    this.location = $location;
    this.timeout = $timeout;
    this.add_error = '';
    this.add_success = '';
    homeService.get_trainee().then((trainees => {
      this.trainees = trainees.data.trainees;
    }));
  }

  add_date_appraise(appraise, trainee, date) {
    appraise.appraised_date = date;
    appraise.type = '日';
    this.homeService.add_appraise(appraise, trainee).then(result => {
      console.log(result);
      //show_message(result.data.message, 1000);
      this.add_success = result.data.message;
      this.is_add_success = true;
      this.timeout(() => {
        this.add_success = "";
        this.is_add_success = false;
      }, 1000);
    }, error => {
      show_message(result.data.message, 10);
    });
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

  add_week_appraises(trainees, date) {
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

  add_month_appraises(trainees, date) {
    var appraise = {};
    appraise.appraised_date = date;
    appraise.type = '月';
    this.homeService.add_appraises(trainees, appraise);
  }


  add_season_appraise(appraise, trainee, date) {
    appraise.appraised_date = date;
    appraise.type = '季';
    this.homeService.add_appraise(appraise, trainee);
  }

  add_season_appraises(trainees, date) {
    var appraise = {};
    appraise.appraised_date = date;
    appraise.type = '季';
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
  //}TIMEOUT.get(this)(() => {
//    this.addFailed = false;
//}, 2500);
  show_message(message, time) {
    this.timeout(() => {
      this.add_success = message;
      this.is_add_success = true;
    }, time);
    console.log('添加' + type + '评价成功');
  }
}

HomeController.$inject = ['homeService', '$location', '$timeout'];
export { HomeController };
