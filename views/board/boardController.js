angular.module('boardApp').controller('boardController', [
	'issueService',
	'$route',
	function(issueService, $route) {
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
					vm.create_status = "error saving in the db";
				}else{

					vm.create_status = issue.title + " save in the db with trhe status: " + issue.status;
					$route.reload();
				}
			});
		};
	}

]);
