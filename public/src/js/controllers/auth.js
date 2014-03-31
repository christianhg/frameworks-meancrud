meancrud.controller('SignupCtrl', [
    '$scope', '$http', '$location', 'Authentication',
    function($scope, $http, $location, Authentication) {
        $scope.authentication = Authentication;
        if($scope.authentication.user) $location.path('/');

        $scope.signup = function() {
            $http.post('/auth/signup', $scope.formData).success(function(user) {
                $scope.authentication.user = user;
                $location.path('/');
            });
        };
    }]);

meancrud.controller('SigninCtrl', [
    '$scope', '$http', '$location', 'Authentication',
    function($scope, $http, $location, Authentication) {
        $scope.authentication = Authentication;
        if($scope.authentication.user) $location.path('/');

        $http.post('/auth/signin', $scope.formData).success(function(user) {
            $scope.authentication.user = user;
            $location.path('/');
        });
    }]);
