app.controller('reportController', ['$scope', 'DataFactory', function($scope, DataFactory) {

  var reportincdata2 = DataFactory.getIncomeFromLocal();
  var reportexpedata = DataFactory.getExpense();
  var reportincdata = [];
  DataFactory.getIncomeFromHTTP()
    .then(function(result) {
      reportincdata = result.data;
      $scope.reportData = reportincdata.concat(reportincdata2, reportexpedata);
    });
}]);
