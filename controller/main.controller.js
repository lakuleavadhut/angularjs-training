app.controller('mainController', ['DataFactory', '$scope', '$http', '$location', 'Notification',
  function(DataFactory, $scope, $http, $location, Notification) {
    $scope.add = function(data) {

      if (data.type == 'income') {

        DataFactory.addIncome(data);
        Notification.success('income Added');
        $location.path('/view/income');

      } else {

        DataFactory.addExpenses(data);
        Notification.success('expense Added');
        $location.path('/view/expense');
      }
      $scope.data = "";

    };
  }
]);
