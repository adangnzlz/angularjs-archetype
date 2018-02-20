(function () {
    'use strict';


    function config($locationProvider, $urlRouterProvider, $stateProvider) {
        $locationProvider.html5Mode(false);
        $urlRouterProvider.otherwise("/");
    }


    angular
        .module('app-module')
        .config(config);


})();