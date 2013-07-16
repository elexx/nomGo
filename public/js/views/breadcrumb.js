define(['jquery', 'underscore', 'backbone', 'marionette', 'app', 'models/breadcrumb', 'text!templates/breadcrumb'], function($, _, Backbone, Marionette, app, BreadcrumbModel, breadcrumbTemplate) {

	var BreadcrumbView = Marionette.ItemView.extend({
		template: _.template(breadcrumbTemplate),
		model: BreadcrumbModel,

		modelEvents: {
			'change': 'render'
		},

		events: {
			'click .home': 'navHome',
			'click .database': 'navDatabase',
			'click .collection': 'navCollection'
		},

		navHome: function(event) {
			event.preventDefault();
			app.appRouter.navigate('/', { trigger: true });
		},

		navDatabase: function(event) {
			event.preventDefault();
			app.appRouter.navigate('/' + this.model.get('database'), { trigger: true });
		},

		navCollection: function(event) {
			event.preventDefault();
			app.appRouter.navigate('/' + this.model.get('database') + '/' + this.model.get('collection'), { trigger: true });
		}
	});

	return BreadcrumbView;
});
