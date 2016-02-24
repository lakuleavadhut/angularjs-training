app.controller('incomeController', ['$scope', 'income', 'DataFactory', 'Notification', function($scope, income, DataFactory, Notification) {

  var incomeFromHttp = income.data;
  var incomeFromLocal = DataFactory.getIncomeFromLocal();
  $scope.incomeData = incomeFromHttp.concat(incomeFromLocal);
  $scope.editingData = {};

  for (var i = 0, length = $scope.incomeData.length; i < length; i++) {
    $scope.editingData[$scope.incomeData[i].transactionId] = false;
  }

  $scope.modify = function(incomeData) {
    $scope.editingData[incomeData.transactionId] = true;
  };

  $scope.update = function(incomeData) {
    Notification.success('Updated');
    $scope.editingData[incomeData.transactionId] = false;
  };

  $scope.delete = function(inc) {
    angular.forEach($scope.incomeData, function(val, key) {
      if (inc.transactionId === val.transactionId) {
        Notification.success('Deleted');
        $scope.incomeData.splice(key, 1);
      }
    });
  }

}]);
