meancrud.factory('Movies', [
    '$resource',
    function($resource) {
        return $resource('/api/movies/:id', { id: "@id" }, {
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
