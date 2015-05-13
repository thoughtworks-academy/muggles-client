'use strict';

import moment from 'moment'

const DAY = '日';
const WEEK = '周';
const MONTH = '月';
const SEASON = '夏';
const SEASON_TYPE = '夏季';

let self;
class AppraiseController {

  constructor($routeParams, traineeService, dateService) {

    self = this;
    this.trainee_id = $routeParams.trainee_id;
    this.traineeService = traineeService;

    this.types = ['日', '周', '月', '季'];
    this.levels = ['A', 'B', 'C', 'D', 'X'];
    this.appraise = {
      appraised_date: new Date()
    };
    this.rewrite_appraise_signal = false;
    this.day_appraises_signal = true;
    this.week_appraises_signal = false;
    this.month_appraises_signal = false;
    this.season_appraises_signal = false;

    let appraises;
    traineeService.find_trainee_by_id($routeParams.trainee_id)
      .then(resp => {

        this.trainee_name = resp.data.username;
        this.groups = resp.data.groups;

        appraises = resp.data.appraises;
        this.day_appraises = appraises.filter(appraise => appraise.type === DAY);

        dateService.format_date(this.day_appraises, 'YYYY-MM-DD');
        return appraises.filter(appraise => appraise.type === WEEK);
      })
      .then(week_appraises => {

        dateService.format_date(week_appraises, 'W');
        this.week_appraises = week_appraises;
        return appraises.filter(appraise => appraise.type === MONTH)
      })
      .then(month_appraises => {

        dateService.format_date(month_appraises, 'YYYY-MM');
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
      appraised_date: moment(appraise.appraised_date).format('YYYY-MM-DD HH:mm:ss'),
      create_date: moment().format('YYYY-MM-DD HH:mm:ss')
    };

    this.traineeService.create_appraise(current_appraise, this.trainee_id)
      .then(resp => {
        console.log(resp.data);

        if(resp.data) {
          this.rewrite_appraise_signal = true;
        }
      });
  }

  submit_rewrite_appraise(appraise) {

    let current_appraise = {
      level: appraise.level,
      type: appraise.type,
      comment: appraise.comment,
      group: appraise.group._id,
      appraiser: appraise.appraiser,
      appraised_date: moment(appraise.appraised_date).format('YYYY-MM-DD HH:mm:ss'),
      create_date: moment().format('YYYY-MM-DD HH:mm:ss')
    };
    //发送post请求覆盖之前的评论
    this.traineeService.update_appraise(current_appraise, this.trainee_id)
      .then(resp => {
        console.log(resp.data);
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

AppraiseController.$inject = ['$routeParams', 'traineeService', 'dateService'];
export { AppraiseController }
