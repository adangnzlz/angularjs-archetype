function footerDirective() {
    return {
        bindToController: true,
        controller: FooterController,
        controllerAs: 'vm',
        restrict: 'C',
        scope: {
            controller: '='
        },
        templateUrl: './templates/footer.html'
    };

    function FooterController($scope) {
        console.log('Footer is loaded');
    }
}

angular.module('layouts.footer', [])
    .directive('footer', footerDirective);