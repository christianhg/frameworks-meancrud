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
                controller: 'SignupCtrl'
            })
			.state('signin', {
				url: '/signin',
				templateUrl: 'views/signin.html',
				controller: 'SigninCtrl'
			})
            .state('users', {
                url: '/users',
                templateUrl: 'views/users.html',
                controller: 'UserIndexCtrl'
            })
			.state('movies', {
				url: '/movies',
				templateUrl: 'views/movies.html',
				controller: 'MoviesIndexCtrl'
			});
		}]);
