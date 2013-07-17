define(['jquery', 'underscore', 'backbone', 'marionette', 'app', 'text!templates/documentList'], function($, _, Backbone, Marionette, app, documentTemplate) {

	var DocumentView = Marionette.ItemView.extend({
		tagName: 'tr',
		template: _.template(documentTemplate),

		events: {
			'click .view': 'viewDocumentContent',
			'click .delete': 'deleteDocument'
		},

		viewDocumentContent: function(event) {
			event.preventDefault();
			app.appRouter.navigate(this.options.baseUrl + '/' + this.model.id, { trigger: true });
		},

		deleteDocument: function(event) {
			event.preventDefault();
			this.model.destroy();
		}
	});

	return DocumentView;
});
