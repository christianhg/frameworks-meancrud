meancrud.factory('Authentication', [
    '$http', '$location',
    function($http, $location) {
        return {
            isNotLoggedIn: function(redirectPath) {
                $http.get('/auth/isLoggedIn').success(function(user) {
                    if(user === '0') {
                        $location.path(redirectPath);
                    }
                });
            },
            isLoggedIn: function(redirectPath) {
                $http.get('/auth/isLoggedIn').success(function(user) {
                    if(user !== '0') {
                        $location.path(redirectPath);
                    }
                });
            }
        };
    }]);
