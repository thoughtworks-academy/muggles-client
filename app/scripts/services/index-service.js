'use strict';

class IndexService {

  constructor($http){
    this.http = $http;
  }

  get_session() {
    return this.http.get('/api/sessions').then(result => result);
  }

  logout(){
    return this.http.delete('api/sessions').then(result => result);
  }
}

export { IndexService }
