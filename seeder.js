var db = new PouchDB('http://localhost:5984/board');
var doc = {
	  "title": "el scroll se esconde debajo del footer",
	  "description": "esta es la descripcion",
	  "status": "to-do"
	};


	db.post(doc);

	var doc2 = {
	  "title": "En 1280 x 800 se buguea el div rojo",
	  "description": "esta es la descripcion",
	  "status": "to-do"
	};


	db.post(doc2);

	var doc3 = {
	  "title": "ajustar los margenes de todos div",
	  "description": "esta es la descripcion",
	  "status": "in-progress"
	};


	db.post(doc3);

	var doc4 = {
	  "title": "No anda nada",
	  "description": "esta es la descripcion",
	  "status": "done"
	};


	db.post(doc4);