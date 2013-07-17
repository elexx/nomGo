define(['jquery', 'underscore', 'backbone', 'marionette', 'app', 'models/collection'], function($, _, Backbone, Marionette, app, CollectionModel) {

	var CollectionCollection = Backbone.Collection.extend({
		model: CollectionModel
	});

	return CollectionCollection;
});
