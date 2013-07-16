define(['jquery', 'underscore', 'backbone', 'marionette', 'app', 'text!templates/collectionList'], function($, _, Backbone, Marionette, app, collectionTemplate) {

	var CollectionView = Marionette.ItemView.extend({
		tagName: 'tr',
		template: _.template(collectionTemplate),

		events: {
			'click .view': 'viewCollectionContent',
			'click .delete': 'deleteCollection'
		},

		viewCollectionContent: function(event) {
			event.preventDefault();
			app.appRouter.navigate(this.options.baseUrl + '/' + this.model.id, { trigger: true });
		},

		deleteCollection: function(event) {
			event.preventDefault();
			console.log('Not yet implemented');
		}
	});

	return CollectionView;
});
