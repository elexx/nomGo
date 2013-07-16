define(['jquery', 'underscore', 'backbone', 'marionette', 'app', 'models/document'], function($, _, Backbone, Marionette, app, DocumentModel) {

	var DocumentCollection = Backbone.Collection.extend({
		model: DocumentModel
	});

	return DocumentCollection;
});
