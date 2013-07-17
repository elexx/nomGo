define(['jquery', 'underscore', 'backbone', 'marionette'], function($, _, Backbone, Marionette) {

	var DocumentEditModel = Backbone.Model.extend({
		idAttribute: '_id'
	});

	return DocumentEditModel;
});
