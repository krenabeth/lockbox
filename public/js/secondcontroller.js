var app = angular.module('lockApp');

app.controller('secondCtrl', ['$scope', '$location', function($scope, $location){

	$scope.today = function date() {
		var date = Date.now();
		console.log(date);
		return date;
	};
	
		$scope.dial = function(num) {
		// check all nine numbers
		console.log('Howdy');

		console.log(num);
		if(num === 2) {
			window.alert('Congratulations!');
			// change path to lock3
			$location.path('/lock3');	
		} else {
			window.alert('Nope, sorry. Hint: You could call home for a clue... try again!');
		}

	};
}]);