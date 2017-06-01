var myApp = angular.module("myApp", ['ngRoute','imageCtrl','mainCtrl','imageService','mainService','imageDirective']);
myApp.config(function($routeProvider){
   $routeProvider
        .when('/',{
       templateUrl: 'pages/home.html',
       controller :'mainCtrl',
       controllerAs: 'main'
       
   })
   .when('/list',{
       templateUrl: 'pages/page1.html',
       controller :'mainCtrl',
       controllerAs: 'main'
   })
   .when('/page2',{
       templateUrl: 'pages/page2.html',
       controller : 'secondController',
       controllerAs: 'second'
   })
   .when('/login' , {
       templateUrl: 'pages/login.html',
       controller :'mainCtrl',
       controllerAs: 'main'      
   })
    .when('/3' , {
       templateUrl: 'pages/3column.html',
       controller :'mainCtrl',
       controllerAs: 'main'      
   })
    .when('/2' , {
       templateUrl: 'pages/2column.html',
       controller :'mainCtrl',
       controllerAs: 'main'      
   })
   .when('/signup',{
       templateUrl: 'pages/signup.html',
       controller : 'mainCtrl',
       controllerAs: 'main'
   })
    
    
});






