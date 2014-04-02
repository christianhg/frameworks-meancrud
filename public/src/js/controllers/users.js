meancrud.controller('UsersCtrl', [
    '$scope', 'Users',
    function($scope, Users) {
        $scope.users = Users.query();
    }
]);

meancrud.controller('UserCtrl', [
    '$scope', 'Users', '$stateParams',
    function($scope, Users, $stateParams) {
        $scope.user = Users.get({id: $stateParams.id});
    }
]);
