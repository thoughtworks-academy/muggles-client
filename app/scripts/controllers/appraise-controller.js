'use strict';

import moment from 'moment'

const DAY = '日';
const WEEK = '周';
const MONTH = '月';
const SEASON = '季';
const SEASON_TYPE = '夏季';

class AppraiseController {

  constructor($routeParams, traineeService, dateService) {

    this.trainee_id = $routeParams.trainee_id;
    this.traineeService = traineeService;
    this.dateService = dateService;

    this.types = [DAY, WEEK, MONTH, SEASON];
    this.levels = ['A', 'B', 'C', 'D', 'X'];

    this.day_appraises_signal = true;
    this.week_appraises_signal = false;
    this.month_appraises_signal = false;
    this.season_appraises_signal = false;

    this.get_all_appraises();
  }

  get_all_appraises() {

    this.rewrite_appraise_signal = false;
    this.add_appraise_success_signal = false;
    let appraises;
    this.traineeService.find_trainee_by_id(this.trainee_id)
      .then(resp => {

        this.trainee_name = resp.data.username;
        this.groups = resp.data.groups;
        this.appraise = {
          group: this.groups[0],
          level: 'C',
          type: DAY,
          appraised_date: new Date()
        };

        appraises = resp.data.appraises;
        this.day_appraises = appraises.filter(appraise => appraise.type === DAY);

        this.dateService.format_date(this.day_appraises, 'YYYY-MM-DD');
        return appraises.filter(appraise => appraise.type === WEEK);
      })
      .then(week_appraises => {

        this.dateService.format_date(week_appraises, 'W');
        this.week_appraises = week_appraises;
        return appraises.filter(appraise => appraise.type === MONTH)
      })
      .then(month_appraises => {

        this.dateService.format_date(month_appraises, 'YYYY-MM');
        this.month_appraises = month_appraises;
        return appraises.filter(appraise => appraise.type === SEASON)
      })
      .then(season_appraises => {

        season_appraises.forEach(season_appraise => {
          season_appraise.appraised_date = SEASON_TYPE
        });
        this.season_appraises = season_appraises;
      })
  }

  submit_appraise_information(appraise) {
    let current_appraise = {
      level: appraise.level,
      type: appraise.type,
      comment: appraise.comment,
      group: appraise.group._id,
      appraiser: appraise.appraiser,
      appraised_date: appraise.appraised_date,
      create_date: new Date()
    };

    this.traineeService.create_appraise(current_appraise, this.trainee_id)
      .then(resp => {

        if(!resp.data) {

          this.rewrite_appraise_signal = true;
          this.add_appraise_success_signal = false;

        } else {
          this.add_appraise_success_signal = true;
          this.rewrite_appraise_signal = false;
          this.get_all_appraises();
        }
      })
  }

  confirm_rewrite_appraise(appraise) {
    let current_appraise = {
      level: appraise.level,
      type: appraise.type,
      comment: appraise.comment,
      group: appraise.group._id,
      appraiser: appraise.appraiser,
      appraised_date: appraise.appraised_date,
      create_date: new Date()
    };
    this.traineeService.update_appraise(current_appraise, this.trainee_id)
      .then(resp => {
        if(resp.state === 200) {

          this.rewrite_appraise_signal = false;
          this.add_appraise_success_signal = true;
          this.get_all_appraises();
        }
      })
  }

  cancel_rewrite_appraise() {
    this.rewrite_appraise_signal = false;
    this.add_appraise_success_signal = false;
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

AppraiseController.$inject = ['$routeParams', 'traineeService', 'dateService'];
export { AppraiseController }
