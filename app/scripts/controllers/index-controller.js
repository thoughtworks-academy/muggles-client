'use strict';

class IndexController {

  constructor(indexService, $location,$window) {
    this.indexService = indexService;
    this.location = $location;
    this.window = $window;

    indexService.get_session().then((resp => {

      if (resp.data === null) {
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
    this.indexService.logout().then(() =>
        this.window.location.reload(),
        this.location.path('/login')
    )
  }
}

IndexController.$inject = ['indexService', '$location','$window'];
export { IndexController };
