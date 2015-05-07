'use strict';

class TraineeService {

  constructor($http) {

    this.$http = $http
  }

  find_user_by_email(email) {

    return this.$http.get('/api/trainees/verification/' + email)
      .then(result => result.data)
  }

  find_trainee_by_id(id) {

    return this.$http.get('/api/trainees/' + id)
      .then(result => result.data)
  }

  create_user(user) {

    let create_date = moment().format('YYYY-MM-DD HH:mm:ss');

    return this.$http.post('/api/trainees', {
      name: user.name,
      email: user.email,
      gender: user.gender,
      password: user.password,
      create_date: create_date,
      phone_number: user.phone_number,
      current_group: '554983027cb6030c4268d059'
    }).then(result => result.data)
  }
}

TraineeService.$inject = ['$http'];

export { TraineeService }

