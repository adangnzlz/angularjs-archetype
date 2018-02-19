(function () {
    'use strict';
    angular.module('app-module').config(function ($stateProvider) {

        const states = [];

        states.push({
            name: 'home',
            url: '/home',
            template: '<h1>Home</h1>'
        })
        states.push({
            name: 'mesa',
            url: '/mesa',
            template: '<h1>Mesa</h1>'
        })
        states.push({
            name: 'mugs',
            url: '/mugs',
            template: '<h1>Mugs</h1>'
        })
        states.push({
            name: 'bandejas',
            url: '/bandejas',
            template: '<h1>Bandejas</h1>'
        })





        states.forEach(state => {
            $stateProvider.state(state);
        });


    });
})();


