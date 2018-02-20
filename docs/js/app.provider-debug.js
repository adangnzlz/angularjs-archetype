(function () {
    // provider para crear estados en tiempo de ejecución
    function appStateProvider($stateProvider) {
        this.$get = function ($state) {
            return {
                addState: function (title) {
                    var state = {
                        name: title,
                        url: '/' + title,
                        template: '<' + title + '></' + title + '>'
                    };
                    $stateProvider.state(title, state);
                }
            };
        };
    }
    angular
        .module('app-module')
        .provider('$appState', appStateProvider);


})();