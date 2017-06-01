var imageDirective = angular.module('imageDirective',[]);

imageDirective.directive('imageDirective', function(){
                return {
                    restric:'EACM',
                templateUrl: 'pages/imageDiv.html',
                    replace:true,
                scope :{
                    aText : '@',
                    myPost : '=',
                    getOwner : '&'
                    
                }
                
                
                }
                
                
                });
