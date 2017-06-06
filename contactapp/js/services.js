angular.module("ContactModule")

.service("saveNavegatiorService", function(localStorageService){


this.key = "angular-contactList";


	if(localStorageService.get(this.key)){

this.activities = localStorageService.get(this.key);

	}else{

	this.activities = [];
}

this.add = function(newActiv){

this.activities.push(newActiv);
this.updaLocalStorage();


}

this.updaLocalStorage = function(){
	localStorageService.set(this.key,this.activities);
}

this.clean = function(){
 this.activities = [];
 this.updaLocalStorage();
 return this.getAll();

}

this.getAll = function(){

	return this.activities;


}

this.removeItem = function(item){


	this.activities = this.activities.filter(function(activity){

		return activity !== item;
	});

	 this.updaLocalStorage();
	 return this.getAll();
}


});