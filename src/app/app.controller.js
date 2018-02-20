(function () {
    'use strict';
    angular
        .module('app-module')
        .controller('app-controller', function ($scope) {
            var vm = this;
            $scope.show = false;

            $scope.$on('toggle', function (event, data) {
                $scope.show = !$scope.show;
            })
            $scope.$on('close', function (event, data) {
                vm.close();
            })
            vm.close = function(){
                $scope.show = false;
            }
        });
})();