function headerDirective(){return{bindToController:!0,controller:function($scope){$scope.numItemsCart=0},controllerAs:"vm",restrict:"E",scope:{controller:"="},templateUrl:"./templates/header.html"}}angular.module("layouts.header",[]).directive("header",headerDirective);