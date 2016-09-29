var app = angular.module('lockApp');

app.controller('secondCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){

	$http.get('../userinfo/user.json').success(function(data) {
		$scope.user = data;
	});

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
				if (phone[i] !== user.Phone[i]) {
					window.alert('Nope, sorry. Hint: You could call home for a clue... try again!');
					return phone = [];
				} else {
					hooray = true;
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