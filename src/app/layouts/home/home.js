function homeDirective() {
    return {
        bindToController: true,
        controller: HomeController,
        controllerAs: 'vm',
        restrict: 'C',
        scope: {
            controller: '='
        },
        templateUrl: './dist/templates/home.html'
    };

    function HomeController($scope) {
        console.log('Home is loaded');
    }
}

angular.module('layouts.home', [])
    .directive('home', homeDirective);