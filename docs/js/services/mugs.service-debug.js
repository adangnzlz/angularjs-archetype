
angular.module('services.mugs', [])
    .service('mugsService', function ($http) {
        this.getMugs = function () {
            return $http({
                url: 'demo-itx/assets/mugs.json',
                method: 'GET'
            });
        };
    });