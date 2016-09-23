var app = angular.module('lockApp');

app.controller('firstCtrl', ['$scope', '$location', function($scope, $location){
	
	$scope.solve = function(lock1) {
		var one = true;
		var two = true;
		var three = true;
	// check all three numbers
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
			window.alert('Congratulations!');
			// change path to lock2
			
			$location.path('/lock2');

		} else if (one && two || two && three || one && three){
			// 2 trues	
			window.alert('So close! You got TWO numbers correct. Hint: you are a spy, a double agent... Try again!');
		} else if (one || two || three) {
			// 1 true
			window.alert('Alright! You got ONE number correct. Hint: How old are you?  ... Try again!');
		} else {
			// 0 trues
			window.alert('Oh no! You got ZERO numbers correct. Hint: *zero* ... Try again!');
		}
			
	};

}]);