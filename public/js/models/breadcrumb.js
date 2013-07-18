define(['jquery', 'underscore', 'backbone', 'marionette', 'app'], function($, _, Backbone, Marionette, app) {

	var BreadcrumbModel = Backbone.Model.extend({
		defaults: {
			database: null,
			collection: null,
			document: null
		},

		initialize: function() {
			app.vent.on('show:listDatabases', this.setData, this);
			app.vent.on('show:listCollections', this.setData, this);
			app.vent.on('show:listDocuments', this.setData, this);
			app.vent.on('show:displayDocument', this.setData, this);
			app.vent.on('show:newDocument', this.setData, this);
		},

		setData: function(data) {
			this.clear({ silent: true });
			this.set({
				database: data.database || this.defaults.database,
				collection: data.collection || this.defaults.collection,
				document: data.document || this.defaults.document
			});
		}
	});

	return BreadcrumbModel;
});
