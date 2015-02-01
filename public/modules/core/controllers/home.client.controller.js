'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		
		$scope.alerts = [
			{
				icon: 'glyphicon-user',
				colour: 'btn-success',
				total: 'News',
				description: 'Neuigkeiten'				
			},
			{
				icon: 'glyphicon-calendar',
				colour: 'btn-primary',
				total: 'Tutorials',
				description: 'Viel Wissen'				
			},
			{
				icon: 'glyphicon-edit',
				colour: 'btn-success',
				total: 'PHP',
				description: 'php...'				
			},
			{
				icon: 'glyphicon-record',
				colour: 'btn-info',
				total: 'Laravel',
				description: 'PHP Framework'				
			},
			{
				icon: 'glyphicon-eye-open',
				colour: 'btn-warning',
				total: 'Mean',
				description: 'MongoDB, Express.js, Angular, Node'				
			},
			{
				icon: 'glyphicon-flag',
				colour: 'btn-danger',
				total: 'JavaScript',
				description: 'Moo'				
			}
		];
	}
]);