app.controller('mainController', ['incomeFactory', '$scope', '$http', '$location', 'Notification',
  function(incomeFactory, $scope, $http, $location, Notification) {
    $scope.add = function(data) {

      if (data.type == 'income') {

        incomeFactory.addIncome(data);
        Notification.success('income Added');
        $location.path('/view/income');

      } else {

        incomeFactory.addExpenses(data);
        Notification.success('expense Added');
        $location.path('/view/expense');
      }
      $scope.data = "";

    };
  }
]);
