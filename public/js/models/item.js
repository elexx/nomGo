define(['jquery', 'underscore', 'backbone', 'marionette'], function($, _, Backbone, Marionette) {

	var ItemModel = Backbone.Model.extend({
		idAttribute: 'name'
	});

	return ItemModel;
});
