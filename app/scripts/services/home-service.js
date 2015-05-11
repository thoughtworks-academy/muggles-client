'use strict';

class HomeService {

  constructor($http) {
    this.$http = $http;
  }

  get_trainee() {
    return this.$http.get('api/groups/554983027cb6030c4268d059/trainees').then(result => result);
  }

  add_appraise(appraise, trainee) {
    console.log(appraise);
    this.$http.put('api/trainees/' + trainee._id + '/appraise', appraise).then(result => {
      console.log(result);
    });
  }

  add_appraises(trainees, appraise) {
    console.log(appraise);
    this.$http.put('api/trainees/appraises', {trainees :trainees, appraise: appraise}).then(result => {
      console.log(result);
    });
  }


}

HomeService.$inject = ['$http'];
export { HomeService }
