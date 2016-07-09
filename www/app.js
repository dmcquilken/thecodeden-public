angular.module('mySite', []);
angular.module('mySite').controller('MainCtrl', ['$scope', '$log', '$interval', function($scope, $log, $interval) {


	var timeout = 3500;
	$scope.index = 0;
    $scope.roles = ['Sales Engineer', 'Business Developer', 'Solutions Brainstormer', 'Value Creator', 'Code Hacker'];

	$interval(function()	{
	    $scope.index = $scope.index + 1;
	    if($scope.index === $scope.roles.length)
	    	$scope.index = 0;
	}, timeout);

}]);