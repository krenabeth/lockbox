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
			for (var i = 0; i < 10; i++) {
				if (phone[i] !== userPhone[i]) {
				swal({  
					title: "Nope, sorry.",   
					text: "Hint: Call home for a clue... try again!",   
					type: "info",   
					confirmButtonText: "Ok" });
					
					return phone = [];
				} else {
					hooray = true;
				}
			}
			if (hooray) {
				swal({  
					title: "Congratulations!",   
					text: "Click Ok to move on to the next lock!",   
					type: "info",   
					confirmButtonText: "Ok" });
				// change path to lock3
				$location.path('/lock3');
			}
		}


	};
}]);