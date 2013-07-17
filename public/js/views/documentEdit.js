define(['jquery', 'underscore', 'backbone', 'marionette', 'models/documentEdit', 'codemirror', 'text!templates/documentEdit', 'codemirrorjs'], function($, _, Backbone, Marionette, DocumentEditModel, CodeMirror, documentEditTemplate) {

	var DocumentEditView = Marionette.ItemView.extend({
		template: _.template(documentEditTemplate),
		model: DocumentEditModel,
		className: 'span12',

		initialize: function() {
			this.model.set('doc', {});
			this.model.fetch();
		},

		modelEvents: {
			'change': 'render'
		},

		onRender: function() {
			if(typeof this.model.get('doc') !== {}) {
				this.$el.find('textarea').each(function(index, element) {
					var codeMirror = CodeMirror.fromTextArea(element, {
						mode: 'application/json',
						gutters: ['CodeMirror-lint-markers'],
						lineNumbers: true,
						lint: true
					});
				});
			}
		}
	});

	return DocumentEditView;
});
