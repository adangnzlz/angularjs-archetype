function homeDirective() {
    return {
        bindToController: true,
        controller: HomeController,
        controllerAs: 'hc',
        restrict: 'E',
        scope: {
            controller: '='
        },
        templateUrl: './templates/home.html'
    };

    function HomeController($scope) {
        var hc = this;
    }
}

angular.module('pages.home', [])
    .directive('home', homeDirective);