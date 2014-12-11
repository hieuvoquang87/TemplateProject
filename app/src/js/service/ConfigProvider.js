/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('myApp.service').service('ConfigProvider',['componentConfig', 'TextProvider',function(componentConfig, TextProvider){
    var searchComponent = function(componentName, root, recursionCount){  
        if(root[componentName]) {
            return root[componentName];
        } else {
            for(var i in root) {
                recursionCount++;
                if(recursionCount === 10) {
                    console.log('Cannot find Component Config');
                    return {config:""};
                };
                var compConfig = searchComponent(componentName, root[i], recursionCount);        
                return compConfig;
            }
        }
    };
    
    return {
        getConfig: function(componentName, languageName){
            var recursionCount = 0;
            var configComponent = searchComponent(componentName, componentConfig, recursionCount);
            var componentName = configComponent.componentName;
            TextProvider.provideTextFor(configComponent, componentName);
            return configComponent;
        }
    };
}]).constant('componentConfig',{
    Header: {
        NavBar: {
            }
    },
    Body: {},
    Footer: {}
});
