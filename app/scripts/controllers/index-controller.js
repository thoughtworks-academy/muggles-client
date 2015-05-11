'use strict';

class IndexController {

  constructor(indexService, $location) {
    this.indexService = indexService;
    this.location = $location;

    indexService.get_session().then((resp => {

      if (resp.data === '') {
        this.show_user_message_signal = false;
        this.show_logout_signal = false;
      } else {

        this.show_user_message_signal = true;
        this.show_user_name_signal = true;
        this.show_logout_signal = true;
        this.trainerName = resp.data;
      }
    }));
  }

  logout() {
    this.indexService.logout().then(() => this.location.path('/login'))
  }
}

IndexController.$inject = ['indexService', '$location'];
export { IndexController };
