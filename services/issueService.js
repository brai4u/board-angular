angular.module('boardApp').service('issueService', [
	'$http',
	'$q',
	function($http, $q){
		this.getTicket = function(){
			return $http.get("http://private-52da20-board4.apiary-mock.com/issues");
		};

		/**
		 * To add specific logic i need to use the $q service.
		 */
		this.getTicketProcessed = function() {
			var defer = $q.defer();
			var db = new PouchDB('http://localhost:5984/board');
			
			db.allDocs({
			  include_docs: true,
			  attachments: true
			}).then(function (results) {
				var cleanrow = [];

				angular.forEach(results.rows, function(row){	
					cleanrow.push(row.doc)
				});
				
				defer.resolve(cleanrow)
			});
			
			/*$http.get("http://private-52da20-board4.apiary-mock.com/issues").then(function(response){
				angular.forEach(response.data, function(issues) {
					defer.resolve(issues.issues);
				});
			});
*/
			// Run the following if i want the promise to break
			//defer.reject()

			return defer.promise;
		};
	}
]);