require.config({
	enforceDefine: true,
	baseUrl: 'js',
	paths : {
		jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min',
		underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.1/underscore-min',
		backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min',
		text: '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.5/text',
		marionette: '//cdnjs.cloudflare.com/ajax/libs/backbone.marionette/1.0.4-bundled/backbone.marionette.min'
	},
	shim: {
		backbone: {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},
		underscore: {
			exports: '_'
		},
		marionette : {
			deps : ['jquery', 'underscore', 'backbone'],
			exports : 'Marionette'
		}
	}
});

require(['init']);

define(['jquery', 'underscore', 'backbone', 'marionette', 'app', 'router', 'routingController', 'views/breadcrumb', 'models/breadcrumb'], function($, _, Backbone, Marionette, app, AppRouter, RoutingController, BreadcrumbView, BreadcrumbModel) {

	app.appRouter = new AppRouter({
		controller: new RoutingController()
	});

	app.addInitializer(function() {
		app.breadcrumbRegion.show(new BreadcrumbView({ model: new BreadcrumbModel() }));
	});

	app.start();
});
