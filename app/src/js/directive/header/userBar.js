/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('myApp.directive').directive('userBar',['appConfig', function(appConfig){
    return {
        restrict: 'A',
        templateUrl: 'build/html/user-bar.html',
        controller: 'UserBarController'
    };
    
}])
    .controller('UserBarController',['$scope', function($scope){    
            
        }]);

