var app = angular.module('myApp',[]);

app.controller('AppCntrl', function($scope, $http){
			   console.log("In controller");
	$scope.flag=true;
	
	$scope.refresh = function(){
		$http.get('/contactList')
			.success(function(response){
			console.log("I received the data");
			$scope.contactList = response;
			
		}); 
	};
	
	$scope.refresh();
	
	$scope.addContact = function(){
		//console.log($scope.contact+"  "+$scope.contact.name.length);
		if(($scope.contact)&&($scope.contact.name.length!=0)&&($scope.contact.name.length!=0)&&($scope.contact.name.length!=0)){
			console.log("true");
			$http.post('/contactList',$scope.contact)
			.success(function(response){
				console.log(response);
				$scope.refresh();
			});	
		
			
		}else{
				alert("Please Enter all details");
		}
		
			
	}
	
	$scope.remove = function(id){
		console.log(id)	;
		$http.delete('/contactList/'+id)
			.success(function(response){
			console.log(response);
			$scope.refresh();
		});
	};
	
	$scope.edit = function(id){
		$scope.flag=false;
		console.log(id);
		$http.get('/contactList/'+id)
			.success(function(response){
				$scope.contact=response;
				//$scope.refresh();
		});
	}
	
	$scope.update = function(){
		var id= $scope.contact._id;
		$http.put('/contactList/'+id, $scope.contact)
			.success(function(response){
				console.log(response);
				$scope.refresh();
		});
//		
	};
	
	$scope.deSelect = function(){
		console.log("deselect");
		$scope.contact="";
		$scope.flag=!$scope.flag;
	}
	
	
	

});

