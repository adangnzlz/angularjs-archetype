function mugsDirective() {
    return {
        bindToController: true,
        controller: MugsController,
        controllerAs: 'mc',
        restrict: 'E',
        scope: {
            controller: '='
        },
        templateUrl: './templates/mugs.html'
    };

    function MugsController($scope, mugsService) {
        var mc = this;
        mugsService.getMugs().success(function (data) {
            mc.mugs = data.products;
        });
    }
}

angular.module('pages.mugs', [])
    .directive('mugs', mugsDirective);