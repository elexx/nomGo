define(['jquery', 'underscore', 'backbone', 'marionette', 'app'], function($, _, Backbone, Marionette, app) {

	var Router = Marionette.AppRouter.extend({
		initialize: function() {
			app.on('initialize:after', function() {
				Backbone.history.start();
			});
		},

		appRoutes: {
			'': 'listDatabases',
			':database': 'listCollections',
			':database/:collection': 'listDocuments',
			':database/:collection/:document': 'displayDocument',
			':database/:collection/_new': 'newDocument',
		}
	});

	return Router;
});
