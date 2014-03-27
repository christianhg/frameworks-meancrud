meancrud.controller('UserRegisterCtrl', [
    '$scope', 'Users',
    function($scope, Users) {
        $scope.register = function() {
            Users.save($scope.formData, function(users) {

            });
        };
    }]);

meancrud.controller('IndexCtrl', [
    '$scope', 'Users',
    function($scope, Users) {
        $scope.users = Users.query();
    }]);

meancrud.controller('UserIndexCtrl', [
    '$scope', 'Users',
    function($scope, Users) {
        $scope.users = Users.query();
    }]);
