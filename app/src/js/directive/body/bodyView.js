
angular.module('myApp.directive').directive('bodyView', ['appConfig', function(appConfig){
    return {
        restrict: 'A',
        templateUrl: 'build/html/body-view.html',
        controller: 'BodyViewController'
    };
}])
        .controller('BodyViewController',['$scope', function($scope){
                
        }]);