'use strict';

class AppraiseController {

  constructor(userService) {

    this.userService = userService;
    this.userService.find_trainee_by_id()
      .then(resp => {

        this.trainee_name = resp.data;
        console.log(resp.data)
      })
  }
}

AppraiseController.$inject = ['userService'];
export { AppraiseController }
