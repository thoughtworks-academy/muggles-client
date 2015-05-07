'use strict';

class InvitationService {

  constructor($http) {

    this.http = $http
  }

  find_invitation_code(code) {

    return this.$http.get('/api/invitation/' + code).then(result => result.data)
  }
}

InvitationService.$inject = ['$http'];
export { InvitationService }

