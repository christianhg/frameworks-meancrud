meancrud.controller('MoviesCtrl', [
    '$scope', 'Movies', 'Authentication',
    function($scope, Movies, Authentication) {
        $scope.movies = Movies.query();

        /*$scope.authentication = Authentication;
        if(!$scope.authentication.user) $location.path('/');*/


        $scope.deleteMovie = function(id) {
            Movies.delete({}, {'id': id}, function(movies) {
                $scope.movies = movies;
            });
        };
    }
]);

meancrud.controller('MoviesAddCtrl', [
    '$scope', 'Movies', '$location',
    function($scope, Movies, $location) {
        $scope.saveMovie = function() {
            Movies.save($scope.formData, function(movies) {
                $location.path('/movies');
                //$scope.movies = movies;
            });
        };
    }
]);

meancrud.controller('MovieCtrl', [
    '$scope', 'Movies', '$stateParams',
    function($scope, Movies, $stateParams) {
        $scope.movie = Movies.get({id: $stateParams.id});
    }
]);

meancrud.controller('MovieEditCtrl', [
    '$scope', 'Movies', '$stateParams',
    function($scope, Movies, $stateParams) {
        $scope.movie = Movies.get({id: $stateParams.id}, function(movie) {
            $scope.formData = movie;
        });

        $scope.updateMovie = function() {
            Movies.update($scope.formData, function(movies) {
                $scope.movies = movies;
            });
        };
    }
]);
