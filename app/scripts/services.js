var moduleName='ugglesservice';

class MugglesService
{


  getActiveBooks(){
    return HTTP.get(this).get('/api/activeBooks').then(result => result.data );
  }


  static muggles_factory($http){
    return new MugglesService($http);
  }
}

MugglesService.muggles_factory.$inject = ['$http'];

angular.module(moduleName, [])
  .factory('muggles_service', muggles_service);

export default moduleName;
