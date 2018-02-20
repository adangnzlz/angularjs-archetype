


function pricesRangeFilter() {
    return function (array, field) {
        var result =  array.sort(compare);
        return result[0][field]/100 + ' € - ' + result[result.length - 1 ][field] / 100 + ' €';
    };
}


function compare(a, b) {
    if (parseInt(a.price) < parseInt(b.price))
        return -1;
    if (parseInt(a.price) > parseInt(b.price))
        return 1;
    return 0;
}




angular.module('filters.rangeprices', [])
    .filter('rangeprices', pricesRangeFilter);


