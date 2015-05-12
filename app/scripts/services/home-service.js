'use strict';

class HomeService {

  constructor($http) {
    this.$http = $http;
  }

  get_trainee() {
    return this.$http.get('api/groups/554983027cb6030c4268d059/trainees').then(result => result);
  }

  add_appraise(appraise, trainee) {
    return this.$http.put('api/trainees/' + trainee._id + '/appraise', appraise);
  }

  add_appraises(trainees, appraise) {
    return this.$http.put('api/trainees/appraises', {trainees: trainees, appraise: appraise});
  }


}

HomeService.$inject = ['$http'];
export { HomeService }
