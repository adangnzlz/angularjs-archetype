function articleDirective() {
    return {
        bindToController: true,
        controller: ArticleController,
        controllerAs: 'vm',
        restrict: 'E',
        scope: {
            controller: '=',
            data: '='
        },
        templateUrl: './templates/article.html'
    };

    function ArticleController($scope) {
        vm = this;
    }
}

angular.module('directives.article', [])
    .directive('article', articleDirective);