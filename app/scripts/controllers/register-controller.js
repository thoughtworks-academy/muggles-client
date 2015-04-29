'use strict';

class RegisterController {
  constructor($scope) {
    this.$scope = $scope;
  }

  show_student_name() {
    console.log('kakkkakk')
  }
}

RegisterController.$inject = ['$scope'];


export { RegisterController }
