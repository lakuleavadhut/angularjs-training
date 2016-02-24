var app = angular.module('myApp', ['ngRoute', 'ui-notification']);

app.config(['$routeProvider', function($routeProvider) {

  $routeProvider

    .when('/view/main', {

      templateUrl: '/view/main.html',
      controller: 'mainController'
    })
    .when('/view/income', {

      templateUrl: '/view/income.html',
      controller: 'incomeController',
      resolve: {
        income: function(DataFactory) {
          return DataFactory.getIncomeFromHTTP();
        }
      }
    })
    .when('/view/expense', {

      templateUrl: '/view/expense.html',
      controller: 'expenseController'
    })
    .when('/view/report', {

      templateUrl: '/view/report.html',
      controller: 'reportController'
    })
    .when('/view/Home', {

      templateUrl: '/view/Home.html',
      controller: 'homeController'
    })

  .otherwise({
    redirectTo: "/view/main"
  });
}]);
