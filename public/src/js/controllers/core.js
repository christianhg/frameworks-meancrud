meancrud.controller('CoreIndexCtrl', [
    '$scope', '$location', 'Authentication',
    function($scope, $location, Authentication) {
        $scope.authentication = Authentication;
        if($scope.authentication.user) $location.path('/movies');
    }]);
