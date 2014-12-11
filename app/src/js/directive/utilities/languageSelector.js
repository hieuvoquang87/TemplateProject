

angular.module('myApp.directive').directive('languageSelector',
        function () {
            return {
                restrict: 'A',
                templateUrl: 'build/html/language-selector.html',
                controller: 'LanguageSelectorController',
                link: {
                    post:function(scope, element, attribute) {
                    //to-do add class for btn-success avtive
                }
            }
            };
        })
        .controller('LanguageSelectorController', ['$scope','LanguageSelectorConfig', 'TextProvider',
            function ($scope, LanguageSelector, TextProvider) {
                $scope.languageSelector = LanguageSelector.config;
              
                TextProvider.interpretProperty('textId').in($scope.languageSelector, 'LanguageSelector');
                $scope.defaultLanguage = {};
                $scope.defaultLanguage.default = 'English';
                $scope.onLanguageSelected = function(selectedLanguage) {
                    TextProvider.changeLanguage(selectedLanguage);
                };
                
                $scope.interpreter = TextProvider.getInterpreter();
                
            }])
        .constant('LanguageSelectorConfig', {
            config: [
                {
                    textId: 'English',
                    language: 'English'
                },
                {
                    textId: 'Vietnamese',
                    language: 'Vietnamese'
                }
            ]
        });


