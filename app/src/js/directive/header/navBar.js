/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('myApp.directive').directive('navBar',
        function (appConfig) {
            return {
                restrict: 'A',
                templateUrl: 'build/html/nav-bar.html',
                controller: 'NavBarController'
            };
        })
        .controller('NavBarController', ['$scope', 'NavBarConfig', 'TextProvider',
            function ($scope, NavBarConfig, TextProvider) {
                $scope.navBar = NavBarConfig.config;
            //    TextProvider.provideTextFor('NavBar', $scope.navBar);
                TextProvider.interpretProperty('textId').in($scope.navBar, 'NavBar');

            }])
        .constant('NavBarConfig', {
            componentName: 'NavBar',
            config: [
            {
                textId: "Home",
                viewLink: "",
                imageUrl: ""  
            },
            {
                textId: "Menu",
                viewLink: "",
                imageUrl: "",
                children: [
                    {
                        textId: "Coffee Menu",
                        viewLink: "",
                        imageUrl: ""
                    },
                    {
                        textId: "FoodMenu",
                        viewLink: "",
                        imageUrl: ""
                    },
                    {
                        textId: "SpecialMenu",
                        viewLink: "",
                        imageUrl: ""
                    }
                ]
            },
            {
                textId: "Blog",
                viewLink: "",
                imageUrl: ""
                
            },
            {
                textId: "AboutUs",
                viewLink: "",
                imageUrl: ""
                
            }
        ]
        });
