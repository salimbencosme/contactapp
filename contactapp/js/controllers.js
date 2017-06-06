angular.module("ContactModule")
.controller("contactController",function($scope,saveNavegatiorService){

 $scope.showSaveButton = true;
  $scope.formData = {};
  $scope.listContacts = saveNavegatiorService.getAll();

$scope.saveContact = function(){

	$scope.formData.id = $scope.listContacts.length + 1;
	saveNavegatiorService.add($scope.formData);
    $scope.formData = {};	
};



$scope.selectContact = function($temp){


    $scope.formData = $temp;	
     $scope.showSaveButton = false;
     console.log($scope.formData);

};

$scope.cleanContact = function(){

    $scope.formData = {};	
     $scope.showSaveButton = true;

};

$scope.updateContact = function(){

      var index = $scope.listContacts.indexOf($scope.formData);
      $scope.listContacts[index] = $scope.formData;  
      $scope.cleanContact(); 

      saveNavegatiorService.updaLocalStorage();
    

};


$scope.delateContact = function(){

  
		$scope.listContacts =	saveNavegatiorService.removeItem($scope.formData);
  $scope.cleanContact(); 

};

 




});