function footerDirective() {
    return {
        bindToController: true,
        controller: FooterController,
        controllerAs: 'fc',
        restrict: 'E',
        scope: {
            controller: '='
        },
        templateUrl: './templates/footer.html'
    };

    function FooterController($scope) {
    }
}

angular.module('layouts.footer', [])
    .directive('footer', footerDirective);