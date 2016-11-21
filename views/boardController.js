angular.module('board').controller('boardController', function($scope, $http, $filter, ngDialog){

	$http.get('http://private-52da20-board4.apiary-mock.com/issues',{})
	.succes(function (data){
		$scope.issues = data;
		console.log(data);
	})
	.error(function (){
		alert("se rompio");
	});

});