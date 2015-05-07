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

        console.log(resp.data.appraises);
        this.trainee_name = resp.data.username;
        this.appraises = resp.data.appraises;
      })

  }
}

AppraiseController.$inject = ['$routeParams', 'traineeService'];
export { AppraiseController }
