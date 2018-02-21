function landscapeDirective() {
    return {
        bindToController: true,
        controller: LandscapeController,
        controllerAs: 'lc',
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
        var lc = this;
        lc.loaded = false;
    }
}

angular.module('directives.landscape', [])
    .directive('landscape', landscapeDirective);