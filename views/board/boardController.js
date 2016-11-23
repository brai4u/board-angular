angular.module('boardApp').controller('boardController', [
	'issueService',
	function(issueService) {
		vm = this;
/*
		issueService.getTicket().then(function(response){
			angular.forEach(response.data, function(issues) {
				vm.issues = issues.issues;
			});
		});
*/
		issueService.getTicketProcessed().then(function(issues){
			//console.log(issues);
			vm.issues = issues;

		}, function(issues) {
			
		});


		vm.changestatus = function(status, issue){
			issue.status = status;

			var db = new PouchDB('http://192.168.88.42:5984/board');
			
			db.get(issue._id).then(function (doc) {
			  doc.status = status;
			  return db.put(doc);
			});
		};
	}

]);
