var app = angular.module('lockApp');

app.config(function($routeProvider) {
	$routeProvider
	.when('/',
	{
		templateUrl: 'html/lock1.html',
		controller: 'firstCtrl'
	})
	.when ('/about',
	{
		templateUrl: 'html/lock2.html',
		controller: 'secondCtrl'
	})
	.when('/testimonials',
	{
		templateUrl: 'html/lock3.html',
		controller: 'thirdCtrl'
	})
	.otherwise({ redirectTo: '/'})
});