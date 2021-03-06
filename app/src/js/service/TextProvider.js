/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('myApp.service').service('TextProvider',['English', 'Vietnamese', 
    function(English, Vietnamese){
        var defaultLanguage = 'English';
        var currentLanguage = defaultLanguage;
        var TextList = {};
        TextList.Global = new Array();
        
        var languages = {
            English: English,
            Vietnamese: Vietnamese
        };          
               
        function Text(textId) {
            this.id = textId;
            this.display = '';
        };
        
        function Interpreter() {
            this.interpret = function (textId) {
                var textContent = findText(textId, 'Global');
                var textObject = new Text(textId);
                textObject.display = textContent;
                registerTextObject(textObject, 'Global'); 
                return textObject;
            };
        };
        var interpreter = new Interpreter();
        
        var registerTextObject = function(textObject, componentName) {
            if(TextList[componentName]) {
                TextList[componentName].push(textObject);
            } else {
                TextList.Global.push(textObject);
            }
        };
        
        var findText = function(textId, containingComponent) {
            if(languages[currentLanguage][containingComponent]) {
                if(languages[currentLanguage][containingComponent][textId]) {
                    return languages[currentLanguage][containingComponent][textId];
                } else {
                    console.log('Unable to locate TextId in Containing Component!');
                    return '';
                }
            } else {
                console.log('Cannot find Containing Component!');
                return '';
            }
        };
        
        var changePageLanguage = function() {
            for(var component in TextList) {
                for(var i = 0; i<TextList[component].length; i++) {
                    TextList[component][i].display = findText(TextList[component][i].id, component);
                }
            }
        };
        var addTextObject = function (componentName, component, propertyName) {
            if (typeof component === 'object' && component !== null) {
                if (component.hasOwnProperty(propertyName)) {
                    var textId = component[propertyName];
                    var textContent = findText(textId, componentName);
                    var textObject = new Text(textId);
                    textObject.display = textContent;
                    registerTextObject(textObject, componentName);                   
                    component[propertyName] = textObject;
                }
                for (var i in component) {
                    if (component[i] instanceof Object && typeof component[i] !== 'Text' && component[i] !== null ) {
                        addTextObject(componentName, component[i], propertyName);
                    }
                }
            } 
        };
        return {
            changeLanguage: function(language){
                currentLanguage = language;
                changePageLanguage();
            },
            getDefaultLanguage: function() {
                return defaultLanguage;
            },
            getInterpreter: function() {
                return interpreter;
            },
            interpretProperty: function (propertyName) {
                var propName = propertyName;
                return {
                    in: function (component, componentName) {
                        var comp = component;
                        var compName = componentName;
                        if (TextList[compName]) {
                            delete TextList[compName];
                            TextList[compName] = new Array();
                            addTextObject(compName, comp, propName);
                        } else {
                            TextList[compName] = new Array();
                            addTextObject(compName, comp, propName);
                        }

                    }
                };

            }
        };
      
    }]).
        constant('English', {
            Global: {
                
            },
            Header: {
                
            },
            Carousel: {
                "Front Yard": "Front Yard",
                "Side Yard": "Side Yard",
                "Exterior": "Exterior",
                "Interior": "Interior"
            },
            NavBar: {
                Home: "Home",
                Menu: "Menu",
                "Coffee Menu": "Coffee Menu",
                FoodMenu: "Food Menu",
                SpecialMenu: "Special Menu",
                Blog: "Blog",
                AboutUs: "About Us"
            },
            LanguageSelector: {
                English: 'English',
                Vietnamese: 'Tiếng Việt'
            }
        }).
        constant('Vietnamese', {
            Global: {
                
            },
            Header: {
                
            },
            Carousel: {
                "Front Yard": "Sân Trước",
                "Side Yard": "Side Yard",
                "Exterior": "Ngoại Thất",
                "Interior": "Nội Thất"
            },
            NavBar: {
                Home: "Trang chính",
                Menu: "Thực Đơn",
                "Coffee Menu": "Cà phê",
                FoodMenu: "Món ăn",
                SpecialMenu: "Đặc sản",
                Blog: "Blog",
                AboutUs: "Liên Hệ"
            },
            LanguageSelector: {
                English: 'English',
                Vietnamese: 'Tiếng Việt'
            }

        }).
        constant('TextProviderConfig', {
            
        });

