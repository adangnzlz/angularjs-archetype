(function () {
    'use strict';
    angular
        .module('app-module', ['ui.router', 'directives'])
        .controller('app-controller', function ($scope) {
            var app = this;
            $scope.message = 'Hello';
            

        });
})();