app.controller('reportController', ['$scope', 'incomeFactory', function($scope, incomeFactory) {

  var reportincdata2 = incomeFactory.getIncomeFromLocal();
  var reportexpedata = incomeFactory.getExpense();
  var reportincdata = [];
  incomeFactory.getIncomeFromHTTP()
    .then(function(result) {
      reportincdata = result.data;
      $scope.reportData = reportincdata.concat(reportincdata2, reportexpedata);
    });
}]);
