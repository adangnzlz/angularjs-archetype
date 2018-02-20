

function currencycustomDirective() {
    return function (token) {
        return (token / 100) + ' €';
    };
}

angular.module('filters.currencycustom', [])
    .filter('currencycustom', currencycustomDirective);
