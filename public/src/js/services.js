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

meancrud.factory('Authentication', [
	function() {
		var _this = this;

		_this._data = {
			user: window.user
		};

		return _this._data;
	}
]);
