(function () {
    'use strict';
    angular
        .module('app-module')
        .controller('app-controller', function ($scope) {
            var app = this;
            $scope.message = 'Hello';

        });
})();