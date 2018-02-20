


function pricesRangeFilter() {
    return function (array) {
        return 1 + '€ - ' + 5 + ' €';
    };
}

angular.module('filters.rangeprices', [])
    .filter('rangeprices', pricesRangeFilter);


