define(['jquery', 'underscore', 'backbone', 'marionette'], function($, _, Backbone, Marionette) {

	var app = new Backbone.Marionette.Application();

	app.addRegions({
		breadcrumbRegion: '#breadcrumb',
		mainRegion: '#content'
	});

	return app;
});
