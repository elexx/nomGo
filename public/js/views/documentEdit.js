define(['jquery', 'underscore', 'backbone', 'marionette', 'models/documentEdit', 'codemirror', 'text!templates/documentEdit', 'codemirrorjs'], function($, _, Backbone, Marionette, DocumentEditModel, CodeMirror, documentEditTemplate) {

	var DocumentEditView = Marionette.ItemView.extend({
		template: _.template(documentEditTemplate),
		model: DocumentEditModel,
		className: 'span12',

		initialize: function() {
			this.model.fetch();
		},

		events: {
			'click .save': 'saveChanges'
		},

		modelEvents: {
			'change': 'render'
		},

		onRender: function() {
			var $element = this.$el.find('#editor');

			this.codemirror = CodeMirror.fromTextArea($element.get(0), {
				mode: 'application/json',
				lineNumbers: true,
				lint: true
			});

			this.codemirror.getDoc().setValue(JSON.stringify(this.model.toJSON(), null, '  '));
		},

		saveChanges: function() {
			$('.alert').hide();
			try {
				var value = JSON.parse(this.codemirror.getDoc().getValue(''));
				this.model.save(value, {
					success: function(model, response, options) {
						$('.savesuccess').fadeIn();
						console.log('saved');
					},
					error: function(model, xhr, options) {
						$('.saveerror').fadeIn();
						console.log('error');
					}
				});
				console.log(value);
			} catch(e) {
				console.log(e);
				$('.parseerror').fadeIn();
			}
		}
	});

	return DocumentEditView;
});
