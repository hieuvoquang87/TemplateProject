
angular.module('myApp.directive').directive('logoProfile',['appConfig', function(appConfig){
    return {
        restrict: 'A',
        templateUrl: 'build/html/logo-profile.html',
        controller: 'LogoProfileController'
    };
    
}])
    .controller('LogoProfileController',['$scope', function($scope){    
            
        }]);

