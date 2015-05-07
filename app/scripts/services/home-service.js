'use strict';

class HomeService {

  constructor($http) {

    this.$http = $http;
  }

  get_trainee() {
    return this.$http.get('api/groups/trainees').then(result => result);
  }

  add_appraise(appraise, trainee) {
    this.$http.put('api/trainees/' + trainee._id + '/appraise', appraise).
      success(function (data) {
        console.log(data);
      });
  }

  logout(){
    return this.$http.delete('api/trainers').then(result => result);
  }
}

HomeService.$inject = ['$http'];

export { HomeService }
