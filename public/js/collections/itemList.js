define(['jquery', 'underscore', 'backbone', 'marionette', 'app', 'models/item'], function($, _, Backbone, Marionette, app, ItemModel) {

	var ItemList = Backbone.Collection.extend({
		model: ItemModel
	});

	return ItemList;
});
