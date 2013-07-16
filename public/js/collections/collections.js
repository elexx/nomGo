define(['jquery', 'underscore', 'backbone', 'marionette', 'app', 'models/database'], function($, _, Backbone, Marionette, app, DatabaseModel) {

	var CollectionCollection = Backbone.Collection.extend({
		model: DatabaseModel
	});

	return CollectionCollection;
});
