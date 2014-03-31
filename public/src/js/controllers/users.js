meancrud.controller('UserIndexCtrl', [
    '$scope', 'Users',
    function($scope, Users) {
        $scope.users = Users.query();
    }]);
