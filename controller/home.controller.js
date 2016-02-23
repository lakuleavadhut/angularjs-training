app.controller('homeController', ['incomeFactory', '$scope', function(incomeFactory, $scope) {

  var homeincome = incomeFactory.getIncomeFromLocal();
  var homeexpense = incomeFactory.getExpense();
  var homeincome2 = [];

  incomeFactory.getIncomeFromHTTP()
    .then(function(result) {
      homeincome2 = result.data;
      $scope.homeData = homeincome2.concat(homeincome);
    });


}]);
