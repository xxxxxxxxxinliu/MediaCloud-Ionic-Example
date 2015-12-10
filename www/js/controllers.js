angular.module('mc.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('HomeCtrl', function($scope, $ionicModal, MediaCloud) { 
  $scope.search = {keyword: 'puppie'};
  $scope.data = {};
  $scope.service = MediaCloud;
  $scope.data.sentenceCount = null;
  MediaCloud.recentMentions($scope.search.keyword);
  $scope.$watch('service.results', function(results){
    if(results!=null){
      console.log("watch got results = "+results.count);
      $scope.data.sentenceCount = results.count;
    } else {
      console.log("watch go null");
    }
  });
  console.log("Calling MC from ctrl");

})

.controller('SearchCtrl', function($scope, $stateParams, MediaCloud){
  $scope.keyword = $stateParams.keyword;
  $scope.data = {};
  $scope.service = MediaCloud;
  $scope.data.sentenceCount = null;
  $scope.$watch('service.results', function(results){
  	if(results!=null){
  		console.log("watch got results = "+results.count);
  		$scope.data.sentenceCount = results.count;
  	} else {
  		console.log("watch go null");
  	}
  });
  console.log("Calling MC from ctrl");
  MediaCloud.recentMentions($scope.keyword);
})

;
