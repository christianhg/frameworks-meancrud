meancrud.controller('CoreIndexCtrl', [
    '$scope', '$http', '$location', 'Authentication',
    function($scope, $http, $location, Authentication) {
        Authentication.isLoggedIn('/movies');
    }]);
