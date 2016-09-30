var app = angular.module('lockApp');

app.controller('firstCtrl', ['$scope', '$location', function($scope, $location){


	swal({  
		title: "Welcome!",   
		text: "Please select three numbers on the lock, then click Go!",   
		type: "info",   
		confirmButtonText: "Ok" });

	$scope.solve = function(lock1) {
		var one = true;
		var two = true;
		var three = true;

		if (lock1.select1st === "0") {
		} else {
			var one = false;
		}
		if (lock1.select2nd === "0") {
		} else {
			var two = false;
		}
		if (lock1.select3rd === "7") {
		} else {
			var three = false;
		}
	// now check if there are 3 trues
		if (one && two && three) {	
			swal({  
				title: "Congratulations!",   
				text: "You got it! Click 'Ok' for the next lock.",   
				type: "info",   
				confirmButtonText: "Ok" });
			// change path to lock2
			
			$location.path('/lock2');

		} else if (one && two || two && three || one && three){
			// 2 trues	
			swal({  
				title: "So close!",   
				text: "You got TWO numbers correct. Hint: you are a spy, a double agent... Try again!",   
				type: "info",   
				confirmButtonText: "Ok" });
		} else if (one || two || three) {
			// 1 true
			swal({  
				title: "Alright!",   
				text: "You got ONE number correct. Hint: How old are you?  ... Try again!",   
				type: "info",   
				confirmButtonText: "Ok" });
		} else {
			// 0 trues
			swal({  
				title: "Oh no!",   
				text: "You got ZERO numbers correct. Hint: *zero* ... Try again!",   
				type: "info",   
				confirmButtonText: "Ok" });
		}
			
	};

}]);