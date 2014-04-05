meancrud.controller('AuthSignupCtrl', [
    '$scope', '$http', '$location',
    function($scope, $http, $location) {
        $http.get('/auth/isLoggedIn').success(function(user) {
            if(user !== '0') {
                $location.path('/');
            }
        });

        $scope.signup = function() {
            $http.post('/auth/signup', $scope.formData).success(function() {
                $location.path('/movies');
            });
        };
    }]);

meancrud.controller('AuthSigninCtrl', [
    '$scope', '$http', '$location',
    function($scope, $http, $location) {
        $http.get('/auth/isLoggedIn').success(function(user) {
            if(user !== '0') {
                $location.path('/');
            }
        });

        $scope.signin = function() {
            $http.post('/auth/signin', $scope.formData).success(function() {
                $location.path('/movies');
            });
        };
    }]);
