(function () {
    'use strict';


    function config($locationProvider, $urlRouterProvider, $stateProvider) {
        // $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");
    }


    angular
        .module('app-module')
        .config(config);


})();