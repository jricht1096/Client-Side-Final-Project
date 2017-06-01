var imageCtrl = angular.module('imageCtrl',[]);

imageCtrl.controller('imageCtrl',["$scope","$filter","imageService","mainService","$http",function($scope,$filter,imageService,mainService,$http){
vm=this;

vm.userInfo= mainService.userInfo;
vm.posts=imageService.posts;
$scope.someText="Client Side";
vm.createNew= function(post){
    post.owner=vm.userInfo.userID;
        vm.posts.push(post);
    vm.newPost={};
    };

$scope.trashClicked = function(input){
    
    deletingIndex = vm.posts.indexOf(input);
    vm.posts.splice(deletingIndex,1);
    imageService.posts=vm.posts;
 

}
vm.getOwner = function(owner){
    function findImage(user) {
        return user.userID === owner;
    }
    owner = vm.userInfo.find(findImage);

     return owner;
    
}
vm.getresult = function(){
	
    $http.post('http://www.prototypedemos.com/api',{answer:'answerthis'})
	.then(function(data){
		vm.result = data.data;
		return data.data
	});
}
     
console.log("REEEEEEEEEEESSUL", vm.getresult());
console.log("REEEEEEEEEEESSUL", vm.result);
    
}]);
