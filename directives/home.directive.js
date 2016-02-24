app.directive('mainReport', ['DataFactory', function(DataFactory) {
  return {
    restrict: 'E',
    template: '<label>Total Expense: {{totalExpenseAmount}}  Total Income: {{totalIncomeAmount}} Balance:{{totalBalanceAmount}}</label>',
    scope: true,
    replace: true,
    link: function(scope, element, attrs) {

      var homeexpense2 = DataFactory.getExpense();

      for (var i = 0; i < homeexpense2.length; i++) {
        scope.totalExpenseAmount += parseInt(homeexpense2[i].Amount);
      }

      var homeIncome1 = DataFactory.getIncomeFromLocal();
      var homeIncome2 = [];
      DataFactory.getIncomeFromHTTP()
        .then(function(result) {
          homeIncome2 = result.data;
          scope.HomeIncomeData = homeIncome2.concat(homeIncome1);

          for (var j = 0; j < scope.HomeIncomeData.length; j++) {
            scope.totalIncomeAmount += parseInt(scope.HomeIncomeData[j].Amount);
          }

          scope.totalBalanceAmount = scope.totalIncomeAmount - scope.totalExpenseAmount;

        });

    }
  }
}]);
