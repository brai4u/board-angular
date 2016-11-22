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
			vm.issues = issues;
		}, function(issues) {
			console.log(issues)
		});


		vm.changestatus = function(status, issue){
			issue.status = status;
		};
	}

]);
