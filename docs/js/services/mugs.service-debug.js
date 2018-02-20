
angular.module('services.mugs', [])
    .service('mugsService', function ($http) {
        this.getMugs = function () {
            return $http({
                url: 'assets/mugs.json',
                method: 'GET'
            });
        };
    });