MEAN CRUD
===================
MongoDB / Express / AngularJS / Node.js

Technologies
-------------------
- [Node.js](http://nodejs.org) (Server platform)
- [Express](http://expressjs.com) (Backend JS framework)
- [MongoDB](http://mongodb.com) (NoSQL database)
- [AngularJS](http://angularjs.org) (Frontend JS framework)
- [Grunt](http://gruntjs.com) (Task manager)
- [SASS](http://sass-lang.com) (CSS preprocessor)
- [Bower](http://bower.io) (Frontend dependency manager)
- [npm](http://npmjs.org) (Backend dependency manager)

Prerequisites
-------------------
Be sure to have the following prerequisites installed.
### Node.js (and npm)
Install using [Homebrew](http://brew.sh)
```
$ brew install node
```
or [download binary](http://nodejs.org/download/)


### MongoDB
Install using Homebrew
```
$ brew install mongodb
```
or [download binary](http://www.mongodb.org/downloads)

### SASS
Install using [Ruby](https://www.ruby-lang.org)
```
$ sudo gem install sass
```
or [download binary](http://sass-lang.com/install)

### Bower
Install using npm
```
$ npm install -g bower
```

### Grunt
Install using npm
```
$ sudo npm install -g grunt-cli
```

Installation
-------------------
Install application using npm
```
$ npm install
```

Run
-------------------
Run application using Grunt
```
$ grunt
```

Documentation
-------------------
### Site Overview
![Site Overview](https://raw.githubusercontent.com/christianhg/frameworks-meancrud/master/app/docs/diagrams/SiteOverview.png)

### Use Case
1. /#/
![index](https://raw.githubusercontent.com/christianhg/frameworks-meancrud/master/app/docs/screenshots/1-index.png)
Sign up to create new user.

2. /#/signup
![signup](https://raw.githubusercontent.com/christianhg/frameworks-meancrud/master/app/docs/screenshots/2-signup.png)
Enter credentials and sign up.

3. /#/movies
![signup](https://raw.githubusercontent.com/christianhg/frameworks-meancrud/master/app/docs/screenshots/3-movies.png)
View list of existing movies. Add new movie.

4. /#/movies/add
![signup](https://raw.githubusercontent.com/christianhg/frameworks-meancrud/master/app/docs/screenshots/4-movies.add.png)
Enter information and add movie.

5. /#/movies/add
![signup](https://raw.githubusercontent.com/christianhg/frameworks-meancrud/master/app/docs/screenshots/5-movies.add.png)
Watch the list of movies getting updated. Click "show" to show single movie.

6. /#/movies/:id
![signup](https://raw.githubusercontent.com/christianhg/frameworks-meancrud/master/app/docs/screenshots/6-movies.id.png)
Single movie view. Click "edit" to edit a movie.

7. /#/movies/:id/edit
![signup](https://raw.githubusercontent.com/christianhg/frameworks-meancrud/master/app/docs/screenshots/7-movies.id.edit.png)
Edit movie view. Click "update" to update information.

8. /#/movies (delete)
![signup](https://raw.githubusercontent.com/christianhg/frameworks-meancrud/master/app/docs/screenshots/8-movies-delete.png)
Click "delete" to delete movie.

9. /#/movies
![signup](https://raw.githubusercontent.com/christianhg/frameworks-meancrud/master/app/docs/screenshots/9-movies.png)
Back to initial list of movies.

### Flow of Control
![Flow of Control](https://raw.githubusercontent.com/christianhg/frameworks-meancrud/master/app/docs/diagrams/FlowOfControl.png)
