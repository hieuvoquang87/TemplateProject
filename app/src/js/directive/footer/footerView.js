
angular.module('myApp.directive').directive('footerView', ['appConfig', function(appConfig){
    return {
        restrict: 'A',
        templateUrl: 'build/html/footer-view.html',
        controller: 'FooterViewController'
    };
}])
        .controller('FooterViewController',['$scope', function($scope){
                
        }]);