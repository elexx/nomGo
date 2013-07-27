(function(exports) {
	"use strict";

	exports.init = function(options) {
		if (!options.app) {
			throw new Error('Error setting up routes');
		}
		var app = options.app;

		setupStaticSites(app, ['/']);
		setupJSTemplates(app, ['/breadcrumb', '/itemList', '/documentEdit']);
		setupMongoConnector(app);
	}

	var setupStaticSites = function(app, sites) {
		sites.forEach(function(item) {
			app.get(item, getRenderSiteController(item));
		});
	}

	var setupJSTemplates = function(app, templates) {
		templates.forEach(function(item) {
			app.get('/js/templates' + item, getRenderJSTemplateController(item));
		});
	}

	var setupMongoConnector = function(app) {
		var mongoController = require('../lib/mongoController.js');
		app.get('/mongo/dbs', function(req, res) {
			mongoController.getDatabaseList(function(d) { res.json(d);} );
		});

		/** DATABASES **/
		app.get('/mongo/dbs/:database', function(req, res) {
			mongoController.getCollectionList(req.params.database, function(d) { res.json(d); });
		});
		app.post('/mongo/dbs', function(req, res) {
			console.log('new database [%s] - not yet implemented', req.body.name);
		});
		app.delete('/mongo/dbs/:database', function(req, res) {
			console.log('delete database [%s] - not yet implemented', req.params.database);
		});

		/** COLLECTIONS **/
		app.get('/mongo/dbs/:database/:collection', function(req, res) {
			mongoController.getDocumentList(req.params.database, req.params.collection, function(d) { res.json(d); });
		});
		app.post('/mongo/dbs/:database', function(req, res) {
			mongoController.newCollection(req.params.database, req.body.name, function(d) { res.json(d); });
		});
		app.delete('/mongo/dbs/:database/:collection', function(req, res) {
			mongoController.deleteCollection(req.params.database, req.params.collection, function(d) { res.json(d); });
		});

		/** DOCUMENTS **/
		app.get('/mongo/dbs/:database/:collection/:document', function(req, res) {
			mongoController.getContent(req.params.database, req.params.collection, req.params.document, function(d) { res.json(d); });
		});
		app.post('/mongo/dbs/:database/:collection', function(req, res) {
			mongoController.newDocument(req.params.database, req.params.collection, req.body, function(d) { res.json(d); });
		});
		app.put('/mongo/dbs/:database/:collection/:document', function(req, res) {
			delete req.body._id;
			mongoController.updateDocument(req.params.database, req.params.collection, req.params.document, req.body, function(d) { res.json(d); });
		});
		app.delete('/mongo/dbs/:database/:collection/:document', function(req, res) {
			mongoController.deleteDocument(req.params.database, req.params.collection, req.params.document, function(d) { res.json(d); });
		});
	}

	var getRenderSiteController = function(item) {
		return function(req, res) {
			res.render(item.replace(/\W/g, ''));
		}
	}

	var getRenderJSTemplateController = function(item) {
		return function(req, res) {
			res.render('jstemplates' + item);
		}
	}
}(exports));
