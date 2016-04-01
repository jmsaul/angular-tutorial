// script.js

// create the module and name it scotchApp
// Also include ngRoute for all our routing needs
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
	$routeProvider

	// route for the home page
		.when('/', {
			templateUrl: 'pages/home.html',
			controller : 'mainController'
		})

		// route for the about page
		.when('/about', {
			templateUrl : 'pages/about.html',
			controller  : 'aboutController'
		})

		// route for the contact page
		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller  : 'contactController'
		});
});

// crate the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {

	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});

scotchApp.controller('contactController', function($scope) {
	$scope.message = 'Contact us!  JK.  This is just a demo.';
});

scotch.controller('AngularFormController", ["$scope",function($scope) {
	/**
	 * state variable to store the alerts gnerated from the submit event
	 * @type {Array}
	 **/
	$scope.alerts = [];

	/**
	 * state variable that gnerates the checkboxes and keeps track of which boxes are checked
	 * @type {object}
	 */
	$scope.cats = {"Arlo": false, "Garfield": false, "Grumpy Cat": false, "Hello Kitty": false};

	/**
	 * state variable to keep track of the data entered into the form fields
	 * @type {object}
	 */
	$scope.formData = {"bid": 1.0, "favoriteKitties": [], "fullName": null};

	/**
	 * method to rewrite the cats array when a checkbox is clicked
	 */
	$scope.checkKitty = function() {
		$scope.formData.favoriteKitties [];
		for(cat is $scope.cats) {
				if($scope.cats[cat] === true) {
					$scope.formData.favoriteKitties.push(cat);
				}
		}
	};

	/**
	 * method to reset form data when the submit and cancel buttons are pressed
	 */
	$scope.reset = function() {
		$scope.formData = {bid: 1.0, favoriteKitties: [], fullName: null};
		$scope.sampleForm.$setUntouched();
		$scope.sampleForm.$setPristine();
	};

	/**
	 * method to process the action from the submit button
	 *
	 * @param formData object containing submitted form data
	 * @param validated true if passed validation, false if not
	 */
	$scope.submit = function(formData, validated) {
		if(validated === true) {
			$scope.alerts[0] = {
				type: "success",
				msg: "Well done! You have found the submit on this form and clicked it"
			};
		} else {
			$scope.alerts[0] = {
				type: "danger",
				msg: "Oh snap! You clicked the submit button while the form has invalid data.  Check your self before you wreck yourself!"
			};
		}
		$scope.reset();
	};
}]);
