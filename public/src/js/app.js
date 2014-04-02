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
                controller: 'UsersCtrl'
            })
			.state('users.id', {
				url: '/:id',
				templateUrl: 'views/users.id.html',
				controller: 'UserCtrl'
			})
			.state('movies', {
				url: '/movies',
				templateUrl: 'views/movies.html',
				controller: 'MoviesCtrl'
			})
			.state('movies.add', {
				url: '/add',
				templateUrl: 'views/movies.add.html',
				controller: 'MoviesAddCtrl'
			})
			.state('movies.id', {
				url: '/:id',
				templateUrl: 'views/movies.id.html',
				controller: 'MovieCtrl'
			})
			.state('movies.id.edit', {
				url: '/edit',
				templateUrl: 'views/movies.id.edit.html',
				controller: 'MovieEditCtrl'
			});
		}]);
