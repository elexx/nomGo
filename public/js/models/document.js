define(['jquery', 'underscore', 'backbone', 'marionette'], function($, _, Backbone, Marionette) {

	var DocumentModel = Backbone.Model.extend({
		idAttribute: '_id'
	});

	return DocumentModel;
});
