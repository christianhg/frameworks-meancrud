meancrud.controller('AuthSignupCtrl', [
    '$scope', '$http', '$location', 'Authentication',
    function($scope, $http, $location, Authentication) {
        Authentication.isLoggedIn('/movies');

        $scope.signup = function() {
            $http.post('/auth/signup', $scope.formData).success(function() {
                $location.path('/movies');
            });
        };
    }]);

meancrud.controller('AuthSigninCtrl', [
    '$scope', '$http', '$location', 'Authentication',
    function($scope, $http, $location, Authentication) {
        Authentication.isLoggedIn('/movies');

        $scope.signin = function() {
            $http.post('/auth/signin', $scope.formData).success(function() {
                $location.path('/movies');
            });
        };
    }]);
