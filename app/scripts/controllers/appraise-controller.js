'use strict';

class AppraiseController {

  constructor($routeParams, traineeService) {

    this.traineeService = traineeService;

    this.day_appraises_signal = true;
    this.week_appraises_signal = false;
    this.month_appraises_signal = false;
    this.season_appraises_signal = false;

    traineeService.find_trainee_by_id($routeParams.trainee_id)
      .then(resp => {

        this.trainee_name = resp.data.username;
        let appraises = resp.data.appraises;

        this.day_appraises = appraises.filter(appraise => appraise.type === '日');
        this.week_appraises = appraises.filter(appraise => appraise.type === '周');
        this.month_appraises = appraises.filter(appraise => appraise.type === '月');
        this.season_appraises = appraises.filter(appraise => appraise.type === '季');
      })
  }

  click_day_appraises() {

    this.day_appraises_signal = true;
    this.week_appraises_signal = false;
    this.month_appraises_signal = false;
    this.season_appraises_signal = false;
  }

  click_week_appraises() {

    this.day_appraises_signal = false;
    this.week_appraises_signal = true;
    this.month_appraises_signal = false;
    this.season_appraises_signal = false;
  }

  click_month_appraises() {

    this.day_appraises_signal = false;
    this.week_appraises_signal = false;
    this.month_appraises_signal = true;
    this.season_appraises_signal = false;
  }

  click_season_appraises() {

    this.day_appraises_signal = false;
    this.week_appraises_signal = false;
    this.month_appraises_signal = false;
    this.season_appraises_signal = true;
  }
}

AppraiseController.$inject = ['$routeParams', 'traineeService'];
export { AppraiseController }
