angular.module('mainCtrl',[])
.controller('mainCtrl',["$rootScope","mainService","$location", function($rootScope,Auth,$location){
var vm=this;
    
    
	vm.loggedIn = Auth.loggedIn();
    
    $rootScope.$on('$routeChangeStart', function () {
    vm.loggedIn = Auth.loggedIn();

        vm.user = Auth.getUser();
        
	});
    
   console.log("LOGGED IN ?", vm.loggedIn);
    vm.loginData={};
    
    vm.doLogin = function(){
    if(Auth.login(vm.loginData))
         {
             vm.loggedIn = true; 
          $location.path('/');
          }          
    }
    
      vm.doLogout = function (){
        console.log("LOGOUT");
        Auth.logout();
        $location.path('/logout');  
    }
      
     /* vm.signUp(newUser) = function(){
          Auth.signUp(newUser);
      }
    */

      
}])
