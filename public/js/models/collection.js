define(['jquery', 'underscore', 'backbone', 'marionette'], function($, _, Backbone, Marionette) {

	var CollectionModel = Backbone.Model.extend({
		idAttribute: 'name'
	});

	return CollectionModel;
});
