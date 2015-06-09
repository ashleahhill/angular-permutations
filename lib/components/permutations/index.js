require('angular');

var ngModule = angular.module('permutation', []);

require('./permutations--service')(ngModule);

ngModule.directive('permutationsCalculator', ['permutations', function (permutations) {
return {
  restrict: 'AE'
}
}])
.directive('permutationDisplay', ['permutations', function (permutations) {
  return {
    restrict: 'AE',
    scope: true,
    bindToController: true,
    controllerAs: 'ctrl',
    template: '<pre>{{stuff |json:4}}</pre>',
    controller: ['$scope', function ($scope) {
      $scope.stuff = {
        n: 5,
        r: 5
      };

      $scope.stuff.p = permutations.get($scope.stuff.n, $scope.stuff.r);
      $scope.stuff.p2 = permutations.get($scope.stuff.n, $scope.stuff.r, true);
    }]
  }
}])


