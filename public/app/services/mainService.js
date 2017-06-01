var mainService = angular.module('mainService',[]);
mainService.service('mainService',["$window", function($window){
    Service = this;
    Service.userInfo=[
        {"name":"Jonathan","userID":"jricht1096","profilePic":"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p160x160/12993522_1393628543988040_917209805180670586_n.jpg?oh=9001d5b3ce6c4f879e3815ca7ae3c794&oe=5804FB0E"},
        {"name":"zack","userID":"zack","profilePic":"https://sp.yimg.com/xj/th?id=OIP.M0a5c6a56bc78f1e5120f2a90fda7fe17H2&pid=15.1&P=0&w=300&h=300"}];
    
    Service.me={"name":"Jonathan","userID":"jricht1096","password":"123","profilePic":"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p160x160/12993522_1393628543988040_917209805180670586_n.jpg?oh=9001d5b3ce6c4f879e3815ca7ae3c794&oe=5804FB0E"};
    
    Service.loggedIn = function(){

        if ($window.localStorage.getItem('myLoginStatus')=="true")
            return true;
        else 
            return false;
    }
    
    Service.getUser = function () {
        if(Service.loggedIn())
            return Service.me;
    }
    
    Service.login = function(user){
                if(user.username==Service.me.userID&&user.password==Service.me.password)
                    {
                        $window.localStorage.setItem('myLoginStatus', "true");
                   
                        
                    }
       return $window.localStorage.getItem('myLoginStatus');
        
        
       
     
    }
    Service.logout = function(){
       $window.localStorage.setItem('myLoginStatus', "false");
    }
    
   /* Service.signUp = function(newUser){
        if(newUser.username==Service.me.userID&&newUser.password==Service.me.password)
                    {
                        $window.localStorage.setItem('myLoginStatus', "true");
                   
                        
                    }
       return $window.localStorage.getItem('myLoginStatus');
    }*/

    
    return Service;
}])