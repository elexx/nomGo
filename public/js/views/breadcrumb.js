define(['jquery', 'underscore', 'backbone', 'marionette', 'app', 'models/breadcrumb', 'text!templates/breadcrumb'], function($, _, Backbone, Marionette, app, BreadcrumbModel, breadcrumbTemplate) {

	var BreadcrumbView = Marionette.ItemView.extend({
		template: _.template(breadcrumbTemplate),
		model: BreadcrumbModel,

		modelEvents: {
  			'change': 'render'
		}
	});

	return BreadcrumbView;
});
