(function () {
    'use strict';
    var $stateProviderRef = null;
    var $urlRouterProviderRef = null;

    function config($locationProvider, $urlRouterProvider, $stateProvider) {
        $urlRouterProviderRef = $urlRouterProvider;
        $stateProviderRef = $stateProvider;
        $locationProvider.html5Mode(false);
        $urlRouterProviderRef.otherwise("/");
    }

    function createStates(values) {
        angular.forEach(values, function (value) {
            var state = {
                "name": value.name.toLowerCase(),
                "url": '/' + value.name.toLowerCase(),
                template: '<h1>' + value.name.toUpperCase() + '</h1>'
            };
            if (value.subcategories && value.subcategories.length > 0) {
                createStates(value.subcategories);
            }
            if (!value.despliega){
                console.log(state);
                $stateProviderRef.state(state);
            }
        });
    }

    function run($q, $rootScope, $state, menuFactory) {
        menuFactory.getRoutes().success(function (data) {
            $stateProviderRef.state({
                name: 'home',
                url: '/home',
                template: ' <div class="home"></div>'
            });
            createStates(data.categories, null);
            $state.go("home");
        });
    }

    angular
        .module('app-module', ['ui.router', 'layouts', 'directives', 'factories'])
        .config(config)
        .run(run);
})();