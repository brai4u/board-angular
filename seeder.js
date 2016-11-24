var db = new PouchDB('http://localhost:5984/board');
var doc = {
	  "_id": "2",
	  "title": "el scroll se esconde debajo del footer",
	  "description": "esta es la descripcion",
	  "status": "to-do"
	};


	db.put(doc);

	var doc2 = {
	  "_id": "25",
	  "title": "En 1280 x 800 se buguea el div rojo",
	  "description": "esta es la descripcion",
	  "status": "to-do"
	};


	db.put(doc2);

	var doc3 = {
	  "_id": "5",
	  "title": "ajustar los margenes de todos div",
	  "description": "esta es la descripcion",
	  "status": "in-progress"
	};


	db.put(doc3);

	var doc4 = {
	  "_id": "15",
	  "title": "No anda nada",
	  "description": "esta es la descripcion",
	  "status": "done"
	};


	db.put(doc4);