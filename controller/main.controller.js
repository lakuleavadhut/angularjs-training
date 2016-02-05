app.controller('ExampleController', ['$scope','incomeFactory',function($scope,incomeFactory) {

  $scope.user=[];

  $scope.add = function(user){

              incomeFactory(user);

      };
