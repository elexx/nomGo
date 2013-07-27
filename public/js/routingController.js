define(['jquery', 'underscore', 'backbone', 'marionette', 'app', 'views/itemList', 'collections/itemList', 'views/documentEdit', 'models/documentEdit'], function($, _, Backbone, Marionette, app, ItemListView, ItemList, DocumentEditView, DocumentModel) {

	var RoutingController = Marionette.Controller.extend({
		listDatabases: function() {
			app.vent.trigger('show:listDatabases');
			app.mainRegion.show(new ItemListView({
				collection: new ItemList([], { url: 'mongo/dbs' }),
				baseUrl: ''
			}));
		},

		listCollections: function(database) {
			app.vent.trigger('show:listCollections', { database: database });
			database = encodeURIComponent(database);
			app.mainRegion.show(new ItemListView({
				collection: new ItemList([], { url: 'mongo/dbs/' + database }),
				baseUrl: '/' + database
			}));
		},

		listDocuments: function(database, collection) {
			app.vent.trigger('show:listDocuments', { database: database, collection: collection });
			database = encodeURIComponent(database);
			collection = encodeURIComponent(collection);
			app.mainRegion.show(new ItemListView({
				collection: new ItemList([], { url: 'mongo/dbs/' + database + '/' + collection }),
				baseUrl: '/' + database + '/' + collection
			}));
		},

		displayDocument: function(database, collection, document) {
			app.vent.trigger('show:displayDocument', { database: database, collection: collection, document: document });
			database = encodeURIComponent(database);
			collection = encodeURIComponent(collection);
			document = encodeURIComponent(document);
			app.mainRegion.show(new DocumentEditView({
				model: new DocumentModel([], { url: '/mongo/dbs/' + database + '/' + collection + '/' + document })
			}));
		},

		newDocument: function(database, collection) {
			database = encodeURIComponent(database);
			collection = encodeURIComponent(collection);
			app.vent.trigger('show:newDocument', { database: database, collection: collection, document: 'new' });
		}
	});

	return RoutingController;
});
