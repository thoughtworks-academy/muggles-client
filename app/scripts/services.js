var moduleName = 'muggle_sservice';

class MugglesService {
  constructor($http) {
    this.students = get_students();
    console.log(this.students);
  }

  getActiveBooks() {
    return $http.get(this).get('/api/activeBooks').then(result => result.data);
  }

  get_students() {
    return $http.get('api/groups/trainees').then.(result => result.data);
  }

  static muggles_factory($http) {
    return new MugglesService($http);
  }
}

MugglesService.muggles_factory.$inject = ['$http'];

angular.module(moduleName, [])
  .factory('muggles_service', muggles_service);

export default moduleName;
