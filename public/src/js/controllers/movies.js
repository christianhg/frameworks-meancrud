meancrud.controller('MoviesCtrl', [
    '$scope', '$http', '$location', 'Movies',
    function($scope, $http, $location, Movies) {
        $http.get('/auth/isLoggedIn').success(function(user) {
            if(user === '0') {
                $location.path('/');
            }
        });

        $scope.deleteMovie = function(id) {
            Movies.delete({}, {'id': id}, function(movies) {
                $scope.movies = movies;
            });
        };

        $scope.updateMovies = function() {
            $scope.movies = Movies.query();
        };

        $scope.updateMovies();
    }
]);

meancrud.controller('MoviesAddCtrl', [
    '$scope', 'Movies', '$location',
    function($scope, Movies, $location) {
        $scope.saveMovie = function() {
            Movies.save($scope.formData, function(movies) {
                $scope.$parent.movies = movies;
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
                $scope.$parent.$parent.updateMovies();
                $scope.$parent.movie = $scope.movie;
            });
        };
    }
]);
