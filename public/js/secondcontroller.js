var app = angular.module('lockApp');

app.controller('secondCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
	var userPhone = [2,4,8,2,1,0,9,4,7,2]
	// $http.get('user.json').success(function(data) {
	// 	var user = data;
	// });

	$scope.today = function date() {
		var date = Date.now();
		console.log(date);
		return date;
	};
	
	var phone = [];

	$scope.dial = function(num) {
		
		phone.push(num);
		var hooray = false;

		// check all nine numbers
		if (phone.length === 10) {
			console.log(phone);

			for (var i = 0; i < 10; i++) {
				if (phone[i] !== userPhone[i]) {
					window.alert('Nope, sorry. Hint: You could call home for a clue... try again!');
					return phone = [];
				} else {
					hooray = true;
					console.log('hooray!');
				}

			}
			if (hooray) {
				window.alert('Congratulations!');
				// change path to lock3
				$location.path('/lock3');
			}
		}


	};
}]);