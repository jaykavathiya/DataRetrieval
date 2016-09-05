var app = angular.module('myApp', []);
app.service("rService",function($http, $q){
	var deferred = $q.defer();
	$http.get("data.json").then(function(data){
		
		deferred.resolve(data);
	});
	this.getData = function()
	{
		return deferred.promise;
	}
});
app.controller('myCtrl', function($scope,rService) {

	var promise = rService.getData();
	promise.then(function(data){
		$scope.data1 = data.data;
	
	});
}); 
