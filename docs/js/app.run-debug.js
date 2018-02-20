(function () {
    'use strict';


    function run($q, $rootScope, $state, menuService, $appState) {
        menuService.getRoutes().success(function (data) {
            $appState.addState('home');
            createStates(data.categories, $appState);
            $state.go("home");
        });
    }


    function createStates(values, $appState) {
        angular.forEach(values, function (value) {
            if (value.subcategories && value.subcategories.length > 0) {
                createStates(value.subcategories, $appState);
            }
            if (!value.despliega) {
                $appState.addState(value.name.toLowerCase());
            }
        });
    }

    angular
        .module('app-module')
        .run(run);


})();