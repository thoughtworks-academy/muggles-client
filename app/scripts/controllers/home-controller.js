'use strict';
class HomeController {

  constructor(homeService, $location, $timeout) {
    this.types = ['日', '周', '月', '季'];
    this.levels = [{name: 'A', value: "A"}, {name: 'B', value: 'B'}, {name: 'C', value: 'default' },{name: 'D', value: 'D'}, {name: 'X', value: 'X'}];
    //this.levels = ['A', 'B', 'C', 'D', 'X'];
    this.homeService = homeService;
    this.date = new Date();
    this.location = $location;
    this.timeout = $timeout;
    this.add_error = '';
    this.is_add_success = false;
    this.add_success = '';
    this.check_all = false;

    homeService.get_trainee().then((trainees => {
      this.trainees = trainees.data.trainees;
      this.trainees.forEach(function (trainee) {
        trainee.checked = false;
        trainee.disable = false;
      });
    }));
  }

  add_date_appraise(appraise, trainee, date) {
    appraise.appraised_date = date;
    appraise.type = '日';
    this.homeService.add_appraise(appraise, trainee).then(result => {
      this.show_message(result);
    });
  }

  add_date_appraises(trainees, date) {
    var appraise = {};
    appraise.appraised_date = date;
    appraise.type = '日';
    this.homeService.add_appraises(trainees, appraise).then(result => {
      console.log(result);
      this.show_message(result);
    });
  }

  add_week_appraise(appraise, trainee, date) {
    appraise.appraised_date = date;
    appraise.type = '周';
    this.homeService.add_appraise(appraise, trainee).then(result => {
      this.show_message(result);
    });
  }

  add_week_appraises(trainees, date) {
    var appraise = {};
    appraise.appraised_date = date;
    appraise.type = '周';
    this.homeService.add_appraises(trainees, appraise).then(result => {
      this.add_success = result.data.message;
      this.is_add_success = true;
      this.timeout(() => {
        this.add_success = "";
        this.is_add_success = false;
      }, 1000);
    }, error => {
      this.add_error = result.data.message;
      this.is_add_error = true;
      this.timeout(() => {
        this.add_error = "";
        this.is_add_error = false;
      }, 1000);
    });
  }

  add_month_appraise(appraise, trainee, date) {
    appraise.appraised_date = date;
    appraise.type = '月';
    this.homeService.add_appraise(appraise, trainee).then(result => {
      this.show_message(result);
    });
  }

  add_month_appraises(trainees, date) {
    var appraise = {};
    appraise.appraised_date = date;
    appraise.type = '月';
    this.homeService.add_appraises(trainees, appraise).then(result => {
      this.add_success = result.data.message;
      this.is_add_success = true;
      this.timeout(() => {
        this.add_success = "";
        this.is_add_success = false;
      }, 1000);
    }, error => {
      this.add_error = result.data.message;
      this.is_add_error = true;
      this.timeout(() => {
        this.add_error = "";
        this.is_add_error = false;
      }, 1000);
    });
  }


  add_season_appraise(appraise, trainee, date) {
    appraise.appraised_date = date;
    appraise.type = '季';
    this.homeService.add_appraise(appraise, trainee).then(result => {
      this.show_message(result);
    });
  }

  add_season_appraises(trainees, date) {
    var appraise = {};
    appraise.appraised_date = date;
    appraise.type = '季';
    this.homeService.add_appraises(trainees, appraise).then(result => {
      this.add_success = result.data.message;
      this.is_add_success = true;
      this.timeout(() => {
        this.add_success = "";
        this.is_add_success = false;
      }, 1000);
    }, error => {
      this.add_error = result.data.message;
      this.is_add_error = true;
      this.timeout(() => {
        this.add_error = "";
        this.is_add_error = false;
      }, 1000);
    });
  }
  select_all(check_all) {
    var appraise = {appraised_date: this.date, type: '日'};
    var self = this;
    this.trainees.forEach(function (trainee) {
      self.homeService.is_appraised(trainee, appraise).then(result => {
        console.log(result);
        if(result.data) {
          trainee.tip = result.message;
          trainee.disable = true;
        }
        trainee.disable = true;

        trainee.checked = check_all;
      });
    });
  }

  select_trainee(check) {
    if(!check) {
      this.check_all = check;
    }else if (check) {
      var is_all_checked = true;
      this.trainees.forEach(function (trainee) {
        if(!trainee.checked) {
          is_all_checked = false;
        }
      });
      this.check_all = is_all_checked;
    }
  }

  show_message(result) {
    if(result.data.data) {

      this.add_success = result.data.message;
      this.is_add_success = true;
      this.timeout(() => {
        this.add_success = "";
        this.is_add_success = false;
      }, 1000);
    }else {

      this.add_error = result.data.message;
      this.is_add_error = true;
      this.timeout(() => {
        this.add_error = "";
        this.is_add_error = false;
      }, 1000);
    }
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
}

HomeController.$inject = ['homeService', '$location', '$timeout'];
export { HomeController };
