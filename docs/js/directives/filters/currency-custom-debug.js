


function currencyCustomFilter() {
    return function (input) {
        return  input / 100;
    };
}

angular.module('filters.currencycustom', [])
    .filter('currencycustom', currencyCustomFilter);