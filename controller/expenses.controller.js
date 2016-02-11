app.controller('expenseController', ['incomeFactory','$scope',function(incomeFactory,$scope) {

    $scope.expenseData = incomeFactory.getExpense();

  }]);
