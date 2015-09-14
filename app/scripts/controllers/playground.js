'use strict';

/**
 * @ngdoc function
 * @name playgroundSearchApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the playgroundSearchApp
 */
angular.module('playgroundSearchApp')
  .controller('AboutCtrl', function ($scope,$http,$sce,geolocation) {
	geolocation.getLocation().then(function(data){
		
	$scope.lat = data.coords.latitude ;
	$scope.long = data.coords.longitude;
	  console.log('lat '+$scope.lat,'long '+$scope.long);
	  
/*
node
  (around:2000,43.617423, 1.304044);
(
way
  (around:2000)
  ["leisure"="playground"];
node
  (around:2000)
  ["leisure"="playground"];
  );
(._;>;);
out body;*/	  
	  $scope.IframeSrcUrl = $sce.trustAsResourceUrl('http://overpass-turbo.eu/map.html?Q=node%0A%20%20%28around%3A2000%2C%20'+$scope.lat+'%2C%20'+$scope.long+'%29%3B%0A%28%0Away%0A%20%20%28around%3A2000%29%0A%20%20[%22leisure%22%3D%22playground%22]%3B%0Anode%0A%20%20%28around%3A2000%29%0A%20%20[%22leisure%22%3D%22playground%22]%3B%0A%20%20%29%3B%0A%28._%3B%3E%3B%29%3B%0Aout%20body%3B%0A');
    });

		
/*
node["name"="Bures-sur-Yvette"];
(
way
  (around:5000)
  ["leisure"="playground"];
node
  (around:5000)
  ["leisure"="playground"];
  );
(._;>;);
out body;*/

$scope.update = function(ville) {
	$scope.IframeSrcUrl = $sce.trustAsResourceUrl('http://overpass-turbo.eu/map.html?Q=node[%22name%22%3D%22'+ville+'%22]%3B%0A%28%0Away%0A%20%20%28around%3A5000%29%0A%20%20[%22leisure%22%3D%22playground%22]%3B%0Anode%0A%20%20%28around%3A5000%29%0A%20%20[%22leisure%22%3D%22playground%22]%3B%0A%20%20%29%3B%0A%28._%3B%3E%3B%29%3B%0Aout%20body%3B%0A');
	console.log('updated');
};	
	
	
	
	
	
	

	
		

	

  });
