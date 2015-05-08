'use strict';

import moment from 'moment'

class TraineeService {

  constructor($http) {

    this.http = $http
  }

  find_user_by_email(email) {

    return this.http.get('/api/trainees/verification/' + email)
      .then(result => result.data)
  }

  find_trainee_by_id(id) {

    return this.http.get('/api/trainees/' + id)
      .then(result => result.data)
  }

  has_appraised(trainee_id, appraised_date) {

   return this.http.post('/api/trainees/' + trainee_id + '/appraise', appraised_date)
  }

  create_user(user) {

    let create_date = moment().format('YYYY-MM-DD HH:mm:ss');

    return this.http.post('/api/trainees', {
      username: user.name,
      email: user.email,
      gender: user.gender,
      password: user.password,
      create_date: create_date,
      phone_number: user.phone_number,
      current_group: '554983027cb6030c4268d059'
    }).then(result => result.data)
  }


  add_appraise(appraise, trainee_id) {

    return this.http.put('api/trainees/' + trainee_id + '/appraise', appraise)
      .then(result => result.data)
  }
}

TraineeService.$inject = ['$http'];

export { TraineeService }

