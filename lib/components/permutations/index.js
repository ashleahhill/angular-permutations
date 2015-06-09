require('angular');

var ngModule = angular.module('permutation', []);

require('./permutations--service')(ngModule);


ngModule.directive('permutationDisplay', ['permutations', function (permutations) {
  return {
    restrict: 'AE',
    scope: true,
    template: '<pre>{{stuff |json:4}}</pre>',
    controller: ['$scope', function ($scope) {
      $scope.stuff = {
        n: 5,
        r: 5
      };

      $scope.stuff.p = permutations($scope.stuff.n, $scope.stuff.r);
      $scope.stuff.p2 = permutations($scope.stuff.n, $scope.stuff.r, true);
    }]
  }
}])


