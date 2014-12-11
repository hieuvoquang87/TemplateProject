'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.mainView',
  'myApp.view2',
  'myApp.directive',
  'myApp.factory',
  'myApp.service',
  'myApp.version',
  'ui.bootstrap'
])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/main-view'});
    }])
    .controller('appController',['$scope','appConfig', 'TextProvider', function ($scope, appConfig, TextProvider){
            $scope.appName = appConfig.appName;
            var appState = {};
            
            var init = function () {
                
            };
            
            init();
    }]);
angular.module('myApp.directive',[]);
angular.module('myApp.factory',[]);
angular.module('myApp.service',[]);