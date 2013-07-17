define(['jquery', 'underscore', 'backbone', 'marionette', 'views/database'], function($, _, Backbone, Marionette, DatabaseView) {

	var DatabaseListView = Marionette.CollectionView.extend({
		tagName: 'table',
		className: 'table',

		itemView: DatabaseView,

		initialize: function(options) {
			this.itemViewOptions = {
				baseUrl: options.baseUrl
			};
		},

		onShow: function() {
			this.collection.fetch();
		}
	});

	return DatabaseListView;
});
