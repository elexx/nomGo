# nomGo - a simple mongoDB Browser

nomGo is a mongoDB Browser, written in JavaScript, with the aim to quickly get a look at some mongoDB documents or change their content.

### Features
* Viewing/Browsing Databases, Collections and Documents
* Deleting Collections and Documents
* Editing Documents

### Planned Features
Feel free to contribute ideas and/or code :)
* Creating new (Databases,) Collections and Documents
* Delete Databases

### Requirements
* [NodeJS](http://nodejs.org)
* A modern web browser

### Installation
* Clone this repository: `git clone https://github.com/elexx/nomGo.git`
* Fire up a console and change directory to the clone repository
* run `npm install` to fetch all dependencies
* run `npm start` to start nomGo
* visit [localhost:3000/](http://localhost:3000/)

### Behind the scenes
nomGo's backend is build on top of nodejs as a rest services. It uses [expressjs](http://expressjs.com/) as router, [jade](http://jade-lang.com/) as templating engine, [stylus](http://learnboost.github.io/stylus/) as css preprocessor and [node-i18n](https://github.com/mashpie/i18n-node) for internationalization.

nomGo's frontend is a [SPA](http://en.wikipedia.org/wiki/Single-page_application). It uses [requirejs](http://requirejs.org/) as module loader, [backbonejs](http://backbonejs.org/) as router with [underscorejs](http://underscorejs.org/) as templating engine and [jQuery](http://jquery.com/) for DOM manipulation and [marionettejs](http://marionettejs.com/) to simplify my life.

nomGo's frontend libraries are hosted on [cdnjs](http://cdnjs.com/)


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/elexx/nomgo/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

