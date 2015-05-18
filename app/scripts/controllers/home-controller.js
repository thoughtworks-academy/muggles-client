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
    if(appraise) {
      appraise.appraised_date = date;
      appraise.type = '日';
      this.homeService.add_appraise(appraise, trainee).then(result => {
        this.show_message(result);
      });
    }else {
      var result = {data: {message: "添加评价失败，请输入完整评价信息"}};
      this.show_message(result);
    }
  }

  add_date_appraises(trainees, date) {
    var appraise = {};
    appraise.appraised_date = date;
    appraise.type = '日';

    var checked_number = 0;
    var self = this;
    for(var i = 0; i < trainees.length; i++) {
      if(!trainees[i].appraise) {
        var result = {data: {message: "批量添加评价失败，请输入完整评价信息"}};
        self.show_message(result);
        return;
      }
      if(trainees[i].checked){
        checked_number++;
      }
    }
    if(!checked_number) {
      var result = {data: {message: "批量添加评价失败，请输入勾选要评价的学生"}};
      self.show_message(result);
      return;
    }

    this.homeService.add_appraises(trainees, appraise).then(result => {
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

        if(result.data.data) {
          trainee.tip = result.data.message;
          trainee.disable = true;
          trainee.checked = false;
        }else{
          trainee.checked = check_all;
          trainee.tip = '';
          trainee.disable = false;
        }
        console.log(trainee);
      });
    });
    console.log(this.trainees);
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

  date_change(check_all) {
    this.select_all(false);
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
