(function () {
    'use strict';


    function run($q, $rootScope, $state, menuService, $appState) {
         // Llamada a servicio para recuperar el json de categories.
        menuService.getRoutes().success(function (data) {
            // se crea el estado home de manera estática
            $appState.addState('home');
            // Generamos el resto de estados a partir del json.
            createStates(data.categories, $appState);
            $state.go("home");
        });
    }


    function createStates(values, $appState) {
        angular.forEach(values, function (value) {
            if (value.subcategories && value.subcategories.length > 0) {
                // añadimos estados de subcategorias
                createStates(value.subcategories, $appState);
            }
             // Si la categoria es de tipo despliega no se añade estado al menú, en caso contrario si
            if (!value.despliega) {
                $appState.addState(value.name.toLowerCase());
            }
        });
    }

    angular
        .module('app-module')
        .run(run);


})();