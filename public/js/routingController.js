define(['jquery', 'underscore', 'backbone', 'marionette', 'app', 'views/databases', 'collections/databases', 'views/collections', 'collections/collections'], function($, _, Backbone, Marionette, app, DatabaseListView, DatabaseList, CollectionListView, CollectionList) {

	var RoutingController = Marionette.Controller.extend({
		listDatabases: function() {
			app.vent.trigger('show:listDatabases');
			app.mainRegion.show(new DatabaseListView({
				collection: new DatabaseList([], { url: 'mongo/dbs' }),
				baseUrl: ''
			}));
		},

		listCollections: function(database) {
			app.vent.trigger('show:listCollections', { database: database });
			app.mainRegion.show(new CollectionListView({
				collection: new CollectionList([], { url: 'mongo/dbs/' + database }),
				baseUrl: '/' + database
			}));
		},

		listDocuments: function(database, collection) {
			app.vent.trigger('show:listDocuments', { database: database, collection: collection });
		},

		displayDocument: function(database, collection, document) {
			app.vent.trigger('show:displayDocument', { database: database, collection: collection, document: document });
		},

		newDocument: function(database, collection) {
			app.vent.trigger('show:newDocument', { database: database, collection: collection, document: 'new' });
		}
	});

	return RoutingController;
});
