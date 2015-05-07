'use strict';

class AppraiseController {

  constructor($routeParams, traineeService) {

    this.traineeService = traineeService;

    traineeService.find_trainee_by_id($routeParams.trainee_id)
      .then(resp => {
        this.trainee_name = resp.data.name;
      })

  }
}

AppraiseController.$inject = ['$routeParams', 'traineeService'];
export { AppraiseController }
