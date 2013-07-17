(function(exports) {
	"use strict";

	var mongoskin = require('mongoskin');

	var connect = function(databaseName, callback) {
		var database = mongoskin.db('localhost/' + databaseName, {safe: true});
		callback(database);
	}

	//------------------------------
	// List all databases
	// calls "callback([{name: db1},{name: db2}, ... ])"
	//
	exports.getDatabaseList = function(callback) {
		connect('admin', function(database) {
			database.admin.listDatabases(function(err, result) {
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

	//------------------------------
	// List all collections in a database
	// calls "callback([{name: coll1},{name: coll2}, ... ])"
	//
	exports.getCollectionList = function(databaseName, callback) {
		connect(databaseName, function(database) {
			database.collectionNames(function(err, collectionNames) {
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

	//------------------------------
	// List all documents from a collection in a database
	// calls "callback([{ _id: document-id, name: name|email|id }])"
	//
	exports.getDocumentList = function(databaseName, collectionName, callback) {
		connect(databaseName, function(database) {
			var out = [];
			database.collection(collectionName).find().each(function(err, document) {
				if (err == null && document != null) {
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

	//------------------------------
	// Read the content of a given documents from a collection in a Database
	// calls "callback({ content: document })"
	//
	exports.getContent = function(databaseName, collectionName, documentId, callback) {
		connect(databaseName, function(database) {
			database.collection(collectionName).findById(documentId, function(err, document) {
				callback({ doc: document });
			});
		});
	};

	var getDescriptor = function(document) {
		if (document.name) return document.name;
		if (document.email) return document.email;
		return document._id;
	}
}(exports));

