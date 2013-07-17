(function(exports) {
	"use strict";

	var mongoskin = require('mongoskin');

	var connect = function(databaseName, callback) {
		var database = mongoskin.db('localhost/' + databaseName, { safe: true });
		callback(database);
	}

	/**
	 * List all databases
	 * calls "callback([{ name: db1 }, { name: db2 }, ... ])"
	 */
	exports.getDatabaseList = function(callback) {
		connect('admin', function(database) {
			database.admin.listDatabases(function(error, result) {
				var out = [];
				result.databases.forEach(function(database) {
					out.push({
						name: database.name
					});
				});
				callback(out);
			});
		});
	};

	/**
	 * List all collections in a database
	 * calls "callback([{ name: coll1 }, { name: coll2 }, ... ])"
	 */
	exports.getCollectionList = function(databaseName, callback) {
		connect(databaseName, function(database) {
			database.collectionNames(function(error, collectionNames) {
				var out = [];
				collectionNames.forEach(function(collectionName) {
					var cleanCollectionName = collectionName.name.replace(databaseName + '.', '');
					if (cleanCollectionName != 'system.indexes') {
						out.push({
							name: cleanCollectionName
						});
					}
				});
				callback(out);
			});
		});
	};

	/**
	 * Puts a new collection in a database
	 * calls "callback({ error: error })" where error is from mongodb driver
	 */
	exports.newCollection = function(databaseName, collectionName, callback) {
		connect(databaseName, function(database) {
			database.createCollection(collectionName, function (error, result) {
				callback({ error: error });
			});
		});
	}

	/**
	 * List all documents from a collection in a database
	 * calls "callback([{ _id: document-id, name: name|email|id }])"
	 */
	exports.getDocumentList = function(databaseName, collectionName, callback) {
		connect(databaseName, function(database) {
			var out = [];
			database.collection(collectionName).find().each(function(error, document) {
				if (error == null && document != null) {
					out.push({
						_id: document._id,
						name: getDescriptor(document)
					});
					console.log(out);
				} else {
					callback(out);
				}
			});
		});
	};

	/**
	 * Deletes a collection from a database
	 * calls "callback({ result: result, error: error })" where result and error are from mongodb driver
	 */
	exports.deleteCollection = function(databaseName, collectionName, callback) {
		connect(databaseName, function(database) {
			database.dropCollection(collectionName, function(error, result) {
				callback({ result: result, error: error });
			});
		});
	}

	/**
	 * Creates a new document in a given collection in a give database
	 * calls "callback(documentContent)"
	 */
	exports.newDocument = function(databaseName, collectionName, documentContent, callback) {
		connect(databaseName, function(database) {
			database.collection(collectionName).insert(documentContent, function(error, result) {
				callback(documentContent);
			});
		});
	}

	/**
	 * Read the content of a given documents from a collection in a Database
	 * calls "callback(document)"
	 */
	exports.getContent = function(databaseName, collectionName, documentId, callback) {
		connect(databaseName, function(database) {
			database.collection(collectionName).findById(documentId, function(error, document) {
				callback(document);
			});
		});
	};

	/**
	 * Updates a document in a given collection in a give database
	 * calls "callback(documentContent)"
	 */
	exports.updateDocument = function(databaseName, collectionName, documentId, documentContent, callback) {
		connect(databaseName, function(database) {
			database.collection(collectionName).updateById(documentId, documentContent, function(error, result) {
				callback(documentContent);
			});
		});
	}

	/**
	 * Deletes a document from a collection from a database
	 * calls "callback({ result: result, error: error })" where result and error are from mongodb driver
	 */
	exports.deleteDocument = function(databaseName, collectionName, documentId, callback) {
		connect(databaseName, function(database) {
			database.collection(collectionName).removeById(documentId, function(error, result) {
				callback({ result: result, error: error });
			});
		});
	}

	var getDescriptor = function(document) {
		if (document.name) return document.name;
		if (document.email) return document.email;
		return document._id;
	}
}(exports));

