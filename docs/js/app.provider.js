!function(){angular.module("app-module").provider("$appState",function($stateProvider){this.$get=function($state){return{addState:function(title){var state={name:title,url:"/"+title,template:"<"+title+"></"+title+">"};$stateProvider.state(title,state)}}}})}();