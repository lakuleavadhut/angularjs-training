app.controller('expenseController', ['incomeFactory', '$scope', '$window', 'Notification', function(incomeFactory, $scope, $window, Notification) {

  $scope.expenseData = incomeFactory.getExpense();
  $scope.editingData = {};

  for (var i = 0, length = $scope.expenseData.length; i < length; i++) {
    $scope.editingData[$scope.expenseData[i].transactionId] = false;
  }

  $scope.modify = function(expenseData) {
    $scope.editingData[expenseData.transactionId] = true;
  };

  $scope.update = function(expenseData) {
    Notification.success('updated');
    $scope.editingData[expenseData.transactionId] = false;
  };

  $scope.delete = function(exp) {

    angular.forEach($scope.expenseData, function(val, key) {
      if (exp.transactionId === val.transactionId) {
        Notification.success('Deleted');
        $scope.expenseData.splice(key, 1);
      }

    });

  }

}]);
