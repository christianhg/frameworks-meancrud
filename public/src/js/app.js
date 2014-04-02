var meancrud = angular.module('meancrud', [
	'ui.router', 'ngResource'
]);

meancrud.config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
			// front page
            .state('index', {
                url: '/',
                templateUrl: 'views/index.html',
                controller: 'CoreIndexCtrl'
            })
			// sign up form
            .state('signup', {
                url: '/signup',
                templateUrl: 'views/signup.html',
                controller: 'AuthSignupCtrl'
            })
			// sign in form
			.state('signin', {
				url: '/signin',
				templateUrl: 'views/signin.html',
				controller: 'AuthSigninCtrl'
			})
			// show all movies
			.state('movies', {
				url: '/movies',
				templateUrl: 'views/movies.html',
				controller: 'MoviesCtrl'
			})
			// add new movie
			.state('movies.add', {
				url: '/add',
				templateUrl: 'views/movies.add.html',
				controller: 'MoviesAddCtrl'
			})
			// show existing movie by id
			.state('movies.id', {
				url: '/:id',
				templateUrl: 'views/movies.id.html',
				controller: 'MovieCtrl'
			})
			// edit movie
			.state('movies.id.edit', {
				url: '/edit',
				templateUrl: 'views/movies.id.edit.html',
				controller: 'MovieEditCtrl'
			});
	}
]);
