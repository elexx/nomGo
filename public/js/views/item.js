define(['jquery', 'underscore', 'backbone', 'marionette', 'app', 'text!templates/itemList'], function($, _, Backbone, Marionette, app, itemTemplate) {

	var ItemView = Marionette.ItemView.extend({
		tagName: 'tr',
		template: _.template(itemTemplate),

		events: {
			'click .view': 'viewItemContent',
			'click .delete': 'deleteItem'
		},

		viewItemContent: function(event) {
			event.preventDefault();
			app.appRouter.navigate(this.options.baseUrl + '/' + encodeURIComponent(this.model.id), { trigger: true });
		},

		deleteItem: function(event) {
			event.preventDefault();
			console.log('Not yet implemented');
		}
	});

	return ItemView;
});
