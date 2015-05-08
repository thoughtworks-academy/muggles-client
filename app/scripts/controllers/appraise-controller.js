'use strict';

import moment from 'moment'

let self;
class AppraiseController {

  constructor($routeParams, traineeService) {

    self = this;
    this.trainee_id = $routeParams.trainee_id;
    this.traineeService = traineeService;

    this.types = ['日', '周', '月', '季'];
    this.levels = ['A', 'B', 'C', 'D', 'X'];
    this.appraise = {
      appraised_date: new Date()
    };

    this.day_appraises_signal = true;
    this.week_appraises_signal = false;
    this.month_appraises_signal = false;
    this.season_appraises_signal = false;

    traineeService.find_trainee_by_id($routeParams.trainee_id)
      .then(resp => {

        this.trainee_name = resp.data.username;
        this.groups = resp.data.groups;

        let appraises = resp.data.appraises;
        appraises.forEach(appraise => {
          appraise.appraised_date = moment(appraise.appraised_date).format('YYYY-MM-DD');
        });

        this.day_appraises = appraises.filter(appraise => appraise.type === '日');
        this.week_appraises = appraises.filter(appraise => appraise.type === '周');
        this.month_appraises = appraises.filter(appraise => appraise.type === '月');
        this.season_appraises = appraises.filter(appraise => appraise.type === '季');
      })
  }

  submit_appraise_information(appraise) {

    let current_appraise = {
      level: appraise.level,
      type: appraise.type,
      comment: appraise.comment,
      group: appraise.group._id,
      appraiser: appraise.appraiser,
      appraised_date: moment(appraise.appraised_date).format('YYYY-MM-DD'),
      create_date: moment().format('YYYY-MM-DD HH:mm:ss')
    };

    self.traineeService.has_appraised(self.trainee_id, current_appraise.appraised_date)
      .then(resp => {

        return resp.data;
      })
      .then(has_appraised => {

        if (!has_appraised) {

          self.traineeService.add_appraise(current_appraise, self.trainee_id)
            .then(resp => {

              let appraises = resp.data.appraises;
              appraises.forEach(appraise => {
                appraises.appraised_date = moment(appraise.appraised_date).format('YYYY-MM-DD');
              });
              return appraises;
            })
            .then(appraises => {

              self.day_appraises = appraises.filter(appraise => appraise.type === '日');
              self.week_appraises = appraises.filter(appraise => appraise.type === '周');
              self.month_appraises = appraises.filter(appraise => appraise.type === '月');
              self.season_appraises = appraises.filter(appraise => appraise.type === '季');
            });
        }
      });
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
