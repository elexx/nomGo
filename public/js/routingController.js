define(['jquery', 'underscore', 'backbone', 'marionette', 'app', 'views/databases', 'collections/databases', 'views/collections', 'collections/collections', 'views/documents', 'collections/documents', 'views/documentEdit', 'models/documentEdit'], function($, _, Backbone, Marionette, app, DatabaseListView, DatabaseList, CollectionListView, CollectionList, DocumentListView, DocumentList, DocumentEditView, DocumentModel) {

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
			app.mainRegion.show(new DocumentListView({
				collection: new DocumentList([], { url: 'mongo/dbs/' + database + '/' + collection }),
				baseUrl: '/' + database + '/' + collection
			}));
		},

		displayDocument: function(database, collection, document) {
			app.vent.trigger('show:displayDocument', { database: database, collection: collection, document: document });
			app.mainRegion.show(new DocumentEditView({
				model: new DocumentModel([], { url: '/mongo/dbs/' + database + '/' + collection + '/' + document })
			}));
		},

		newDocument: function(database, collection) {
			app.vent.trigger('show:newDocument', { database: database, collection: collection, document: 'new' });
		}
	});

	return RoutingController;
});
