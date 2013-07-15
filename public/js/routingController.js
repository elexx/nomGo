define(['jquery', 'underscore', 'backbone', 'marionette', 'app'], function($, _, Backbone, Marionette, app) {

	var RoutingController = Marionette.Controller.extend({
		listDatabases: function() {
			app.vent.trigger('show:listDatabases');
		},

		listCollections: function(database) {
			app.vent.trigger('show:listCollections', {database: database});
		},

		listDocuments: function(database, collection) {
			app.vent.trigger('show:listDocuments', {database: database, collection: collection});
		},

		displayDocument: function(database, collection, document) {
			app.vent.trigger('show:displayDocument', {database: database, collection: collection, document: document});
		},

		newDocument: function(database, collection) {
			app.vent.trigger('show:newDocument', {database: database, collection: collection});
		}
	});

	return RoutingController;
});
