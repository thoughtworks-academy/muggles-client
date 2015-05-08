'use strict';

class AppraiseController {

  constructor($routeParams, traineeService) {

    this.traineeService = traineeService;
    this.types = ['日', '周', '月', '季'];
    this.levels = ['A', 'B', 'C', 'D', 'X'];
    this.appraise = {
      appraised_date: new Date(2015, 4, 15)
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
        this.day_appraises = appraises.filter(appraise => appraise.type === '日');
        this.week_appraises = appraises.filter(appraise => appraise.type === '周');
        this.month_appraises = appraises.filter(appraise => appraise.type === '月');
        this.season_appraises = appraises.filter(appraise => appraise.type === '季');
      })
  }

  submit_appraise_information(appraise) {

    //页面下拉菜单添加Group
    //利用moment处理appraised_date时间格式
    //利用mment生成create_date
    //后台的session中获取trainer的id
    //发送post请求创建新的评论
    //然后利用appraise的id将其push到trainee的appraises中
    console.log(appraise)
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
