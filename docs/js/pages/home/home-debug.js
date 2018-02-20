function homeDirective() {
    return {
        bindToController: true,
        controller: HomeController,
        controllerAs: 'vm',
        restrict: 'E',
        scope: {
            controller: '='
        },
        templateUrl: './templates/home.html'
    };

    function HomeController($scope) {
    }
}

angular.module('pages.home', [])
    .directive('home', homeDirective);