meancrud.controller('CoreIndexCtrl', [
    '$scope', '$http', '$location',
    function($scope, $http, $location) {
        $http.get('/auth/isLoggedIn').success(function(user) {
            if(user !== '0') {
                $location.path('/movies');
            }
        });
    }]);
