meancrud.filter('imdbURL', function() {
    return function(imdbId) {
        return 'http://www.imdb.com/title/' + imdbId;
    };
});
