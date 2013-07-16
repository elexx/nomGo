define(['jquery', 'underscore', 'backbone', 'marionette', 'views/document'], function($, _, Backbone, Marionette, DocumentView) {

	var DocumentListView = Marionette.CollectionView.extend({
		tagName: 'table',
		className: 'table',

		itemView: DocumentView,

		initialize: function(options) {
			this.itemViewOptions = {
				baseUrl: options.baseUrl
			};
		},

		onRender: function() {
			this.collection.fetch();
		}
	});

	return DocumentListView;
});
