function articleDirective() {
    return {
        bindToController: true,
        controller: ArticleController,
        controllerAs: 'ac',
        restrict: 'E',
        scope: {
            controller: '=',
            data: '='
        },
        templateUrl: './templates/article.html'
    };

    function ArticleController($scope) {
        var ac = this;
        ac.loaded = false;
    }
}

angular.module('directives.article', [])
    .directive('article', articleDirective);