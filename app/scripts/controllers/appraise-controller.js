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
      //appraised_date: moment(appraise.appraised_date).format('YYYY-MM-DD HH:mm:ss'),
      create_date: moment().format('YYYY-MM-DD HH:mm:ss')
    };

    if(current_appraise.type === DAY) {

      current_appraise.appraised_date = moment(appraise.appraised_date).format('YYYY-MM-DD HH:mm:ss');
    } else if(current_appraise.type === WEEK) {

      current_appraise.appraised_date = moment(appraise.appraised_date).format('W');
    } else if(current_appraise.type === MONTH) {

      current_appraise.appraised_date = moment(appraise.appraised_date).format('YYYY-MM');
    } else {
      current_appraise.appraised_date = moment(appraise.appraised_date).format('YYYY-MM');
    }

    this.traineeService.has_appraised(current_appraise, this.trainee_id)
      .then(resp => {

        console.log(resp.data);
      });
    console.log(current_appraise);
    this.traineeService.add_appraise(current_appraise, this.trainee_id)
      .then(resp => {

        let appraises = resp.data.appraises;
        appraises.forEach(appraise => {
          appraises.appraised_date = moment(appraise.appraised_date).format('YYYY-MM-DD');
        });
        return appraises;
      })
      .then(appraises => {

        this.day_appraises = appraises.filter(appraise => appraise.type === '日');
        this.week_appraises = appraises.filter(appraise => appraise.type === '周');
        this.month_appraises = appraises.filter(appraise => appraise.type === '月');
        this.season_appraises = appraises.filter(appraise => appraise.type === '季');
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

AppraiseController.$inject = ['$routeParams', 'traineeService', 'dateService'];
export { AppraiseController }
