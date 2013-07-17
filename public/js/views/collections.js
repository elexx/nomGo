define(['jquery', 'underscore', 'backbone', 'marionette', 'views/collection'], function($, _, Backbone, Marionette, CollectionView) {

	var CollectionListView = Marionette.CollectionView.extend({
		tagName: 'table',
		className: 'table',

		itemView: CollectionView,

		initialize: function(options) {
			this.itemViewOptions = {
				baseUrl: options.baseUrl
			};
		},

		onShow: function() {
			this.collection.fetch();
		}
	});

	return CollectionListView;
});
