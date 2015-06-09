require('angular');
var permutations = require('./../../permutations.js');
angular.module('permutation', [])
.directive('permutationDisplay', [function () {
  return {
    restrict: 'AE',
    template: '<pre>{{stuff |json:4}}</pre>',
    controller: ['$scope', function ($scope) {
      $scope.stuff = {
        n: 5,
        r: 5
      };

      $scope.stuff.p = permutations($scope.stuff.p, $scope.stuff.r);
      $scope.stuff.p2 = permutations($scope.stuff.p, $scope.stuff.r, true);
    }]
  }
}])