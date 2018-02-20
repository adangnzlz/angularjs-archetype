function mugsDirective() {
    return {
        bindToController: true,
        controller: MugsController,
        controllerAs: 'vm',
        restrict: 'E',
        scope: {
            controller: '='
        },
        templateUrl: './templates/mugs.html'
    };

    function MugsController($scope, mugsService) {

        mugsService.getMugs().success(function (data) {
            $scope.mugs = data.products;
        });
    }
}

angular.module('pages.mugs', [])
    .directive('mugs', mugsDirective);