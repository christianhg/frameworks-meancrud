var meancrud = angular.module('meancrud', [
	'ui.router', 'ngResource'
]);

meancrud.config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'views/index.html',
                controller: 'IndexCtrl'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'views/signup.html',
                controller: 'UserSignupCtrl'
            })
			.state('signin', {
				url: '/signin',
				templateUrl: 'views/signin.html',
				controller: 'UserSigninCtrl'
			})
            .state('users', {
                url: '/users',
                templateUrl: 'views/users.html',
                cotroller: 'UserIndexCtrl'
            });
		}]);
