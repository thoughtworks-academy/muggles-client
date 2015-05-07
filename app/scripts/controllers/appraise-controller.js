'use strict';

class AppraiseController {

  constructor($routeParams, traineeService) {

    this.traineeService = traineeService;

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
