angular.module('myApp.directive').directive('carouselPanel',
        function () {
            return {
                restrict: 'A',
                templateUrl: 'build/html/carousel-panel.html',
                controller: 'CarouselPanelController',
                link: {
                    post:function(scope, element, attribute) {
                    //to-do add class for btn-success avtive
                },
                scope: {}
            }
            };
        })
        .controller('CarouselPanelController', ['$scope','CarouselPanelConfig', 'TextProvider',
            function ($scope, CarouselPanel, ngInterpreter) {
                var config = CarouselPanel.config;
                var slides = $scope.slides = [];
                $scope.interpreter = ngInterpreter.getInterpreter();
                ngInterpreter.interpretProperty('text').in(config, 'Carousel');              
                $scope.interval = config.interval;               
                $scope.addSlide = function(imageUrl, text) {                 
                    slides.push({
                        image: imageUrl,
                        text: text
                    });
                };
                for (var i=0; i<config.carousel.length; i++) {
                    $scope.addSlide(config.carousel[i].imageUrl, config.carousel[i].text);
                }          
            }])
        .constant('CarouselPanelConfig', {
            config: {
                interval: 5000,
                carousel: [
                {
                    imageUrl: 'assets/front_yard_1.jpg',
                    text: 'Front Yard'
                },
                {
                    imageUrl: 'assets/front_yard_2.jpg',
                    text: 'Side Yard'
                },
                {
                    imageUrl: 'assets/interior_1.jpg',
                    text: 'Interior'
                },
                {
                    imageUrl: 'assets/interior_2.jpg',
                    text: 'Interior'
                }
            ]
            }
        });


