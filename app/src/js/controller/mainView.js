'use strict';

angular.module('myApp.mainView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main-view', {
    templateUrl: 'build/html/main-view.html',
    controller: 'MainViewController'
  });
}])

.controller('MainViewController', [function() {
        
}])
.constant('MainViewConfig',{
    
});