function landscapeDirective() {
    return {
        bindToController: true,
        controller: LandscapeController,
        controllerAs: 'vm',
        restrict: 'E',
        scope: {
            controller: '=',
            image: '=',
            text1: '=',
            text2: '='
        },
        templateUrl: './templates/landscape.html'
    };

    function LandscapeController($scope) {
    }
}

angular.module('directives.landscape', [])
    .directive('landscape', landscapeDirective);