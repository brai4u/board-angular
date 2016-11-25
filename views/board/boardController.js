angular.module('boardApp').controller('boardController', [
	'issueService',
	'$route',
	function(issueService, $route) {
		vm = this;
		issueService.getTicketProcessed().then(function(issues){
			vm.issues = issues;

		}, function(issues) {
			
		});


		vm.changestatus = function(status, issue){
			issue.status = status;

			var db = new PouchDB(dburl);
			
			db.get(issue._id).then(function (doc) {
			  doc.status = status;
			  return db.put(doc);
			});
		};

		vm.submit = function(){
			var db = new PouchDB(dburl);
			var issue = {
			  "title": vm.title,
			  "description": vm.description,
			  "status": vm.status
			};

			db.post(issue, function (error){

				if(error){
					vm.classAlert = "alert alert-danger text-center"
					vm.create_status = "error saving in the db";
				}else{
					vm.classAlert = "alert alert-success text-center"
					vm.create_status = "issue created"
					$route.reload();
				}
			});
		};
	}

]);
