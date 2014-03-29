meancrud.factory('Users', [
    '$resource',
    function($resource) {
        return $resource('/api/users/:id', { id: "@id" }, {
            'save': {
                method: 'POST',
                isArray: true
            },
            'update': {
                method: 'PUT',
                isArray: true
            },
            'delete': {
                method: 'DELETE',
                isArray: true
            }
        });
    }]);
