function mugDirective() {
    return {
        bindToController: true,
        controller: MugController,
        controllerAs: 'vm',
        restrict: 'E',
        scope: {
            controller: '=',
            data: '='
        },
        templateUrl: './templates/mug.html'
    };

    function MugController($scope) {
        vm = this;
    }
}

angular.module('directives.mug', [])
    .directive('mug', mugDirective);