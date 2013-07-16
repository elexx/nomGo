define(['jquery', 'underscore', 'backbone', 'marionette', 'app', 'text!templates/databaseList'], function($, _, Backbone, Marionette, app, databaseTemplate) {

	var DatabaseView = Marionette.ItemView.extend({
		tagName: 'tr',
		template: _.template(databaseTemplate),

		events: {
			'click .view': 'viewDatabaseContent',
			'click .delete': 'deleteDatabase'
		},

		viewDatabaseContent: function(event) {
			event.preventDefault();
			app.appRouter.navigate(this.options.baseUrl + '/' + this.model.id, { trigger: true });
		},

		deleteDatabase: function(event) {
			event.preventDefault();
			console.log('Not yet implemented');
		}
	});

	return DatabaseView;
});
