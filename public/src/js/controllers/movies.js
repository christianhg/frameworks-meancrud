meancrud.controller('MoviesIndexCtrl', [
    '$scope', 'Movies', '$location', 'Authentication',
    function($scope, Movies, $location, Authentication) {
        $scope.movies = Movies.query();

        $scope.authentication = Authentication;
        if(!$scope.authentication.user) $location.path('/');
    }
]);
