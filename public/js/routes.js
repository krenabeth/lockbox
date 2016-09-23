var app = angular.module('lockApp');

app.config(function($routeProvider) {
	$routeProvider
	.when('/',
	{
		templateUrl: 'html/lock1.html',
		controller: 'firstCtrl'
	})
	.when ('/lock2',
	{
		templateUrl: 'html/lock2.html',
		controller: 'secondCtrl'
	})
	.when('/lock3',
	{
		templateUrl: 'html/lock3.html',
		controller: 'thirdCtrl'
	})
	.otherwise({ redirectTo: '/'})
});