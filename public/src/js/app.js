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
            .state('register', {
                url: '/register',
                templateUrl: 'views/register.html',
                controller: 'UserRegisterCtrl'
            })
            .state('users', {
                url: '/users',
                templateUrl: 'views/users.html',
                cotroller: 'UserIndexCtrl'
            });
    }]);
