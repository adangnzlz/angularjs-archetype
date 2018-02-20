function footerDirective() {
    return {
        bindToController: true,
        controller: FooterController,
        controllerAs: 'vm',
        restrict: 'E',
        scope: {
            controller: '='
        },
        templateUrl: './demo-itx/templates/footer.html'
    };

    function FooterController($scope) {
    }
}

angular.module('layouts.footer', [])
    .directive('footer', footerDirective);