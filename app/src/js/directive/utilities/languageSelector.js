

angular.module('myApp.directive').directive('languageSelector',['TextProvider',
        function (TextProvider) {
            return {
                restrict: 'A',
                templateUrl: 'build/html/language-selector.html',
                controller: 'LanguageSelectorController',
                link: {
                    post: function(scope, element, attribute) {
                    var languages = document.getElementsByClassName('language-selecting-button');
                    var defaultLanguage = TextProvider.getDefaultLanguage();
                    
                   
                    for(var i = 0; i < languages.length; i++) {
                        if(languages[i].nodeValue === defaultLanguage) {
                            angular.element(languages[i]).addClass('active');
                        }
                    }
                    scope.$watch(element.children().length,function(newVal, oldVal){
                        var first = element.find('.language-selecting-button')[0];
                        first.nodeValue
                    });
                }
            }
            };
        }])
        .controller('LanguageSelectorController', ['$scope','LanguageSelectorConfig', 'TextProvider',
            function ($scope, LanguageSelector, TextProvider) {
                $scope.languageSelector = LanguageSelector.config;
                
                TextProvider.interpretProperty('textId').in($scope.languageSelector, 'LanguageSelector');
                $scope.defaultLanguage = {};
                $scope.defaultLanguage.default = 'English';
                $scope.onLanguageSelected = function(selectedLanguage) {
                    TextProvider.changeLanguage(selectedLanguage);
                };
                var languages = document.getElementsByClassName('language-selecting-button');
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


