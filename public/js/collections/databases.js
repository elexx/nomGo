define(['jquery', 'underscore', 'backbone', 'marionette', 'app', 'models/database'], function($, _, Backbone, Marionette, app, DatabaseModel) {

	var DatabaseCollection = Backbone.Collection.extend({
		model: DatabaseModel
	});

	return DatabaseCollection;
});
