define(['jquery', 'underscore', 'backbone', 'marionette', 'views/item'], function($, _, Backbone, Marionette, ItemView) {

	var ListView = Marionette.CollectionView.extend({
		tagName: 'table',
		className: 'table',

		itemView: ItemView,

		initialize: function(options) {
			this.itemViewOptions = {
				baseUrl: options.baseUrl
			};
		},

		onShow: function() {
			this.collection.fetch();
		}
	});

	return ListView;
});
