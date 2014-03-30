meancrud.controller('IndexCtrl', [
    '$scope', 'Users',
    function($scope, Users) {
        $scope.hej = "HWH";
        $scope.users = Users.query();
        
    }]);

meancrud.controller('UserIndexCtrl', [
    '$scope', 'Users',
    function($scope, Users) {
        /*$scope.hej = "HWH";
        $scope.users = Users.query();*/
        alert("hej");
    }]);
