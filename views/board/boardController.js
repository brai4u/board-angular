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

			var db = new PouchDB('http://localhost:5984/board');
			
			db.get(issue._id).then(function (doc) {
			  doc.status = status;
			  return db.put(doc);
			});
		};

		vm.submit = function(){
			var db = new PouchDB('http://localhost:5984/board');
			var issue = {
			  "title": vm.title,
			  "description": vm.description,
			  "status": vm.status
			};

			db.post(issue, function (error){
				if(error){
					alert("error saving in de db");
				}
			});
		};
	}

]);
