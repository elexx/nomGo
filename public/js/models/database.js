define(['jquery', 'underscore', 'backbone', 'marionette'], function($, _, Backbone, Marionette) {

	var DatabaseModel = Backbone.Model.extend({
		idAttribute: 'name'
	});

	return DatabaseModel;
});
