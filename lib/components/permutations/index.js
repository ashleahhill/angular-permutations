require('angular');

var ngModule = angular.module('permutation', []);

require('./permutations--service')(ngModule);

ngModule
  .directive('permutationsDisplay', ['permutations', function (permutations) {
    return {
      restrict: 'A',
      scope: true,
      bindToController: true,
      controllerAs: 'ctrl',

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
  .directive('displayPermutations', [function () {
    return {
      restrict: 'AE',
      scope: {
        stuff:'='
      },
      template: '<pre>{{stuff |json:4}}</pre>',
      bindToController: true,
      require: 'permutationCalculator',
      controllerAs: 'dislplayCtrl',
      controller: ['$scope', function ($scope) {
          $scope.stuff = this.stuff;
      }]
    };
  }]);


