var app =angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider){

    $routeProvider

    .when('/view/main',{

          templateUrl:'view/main.html',
          controller: 'mainController'
    })
    .when('/view/income',{

        templateUrl:'view/income.html',
        controller: 'incomeController'
    })
    .when('/view/expense',{

        templateUrl:'view/expense.html',
        controller: 'expenseController'
    })

    .otherwise({redirectTo: "/view/main"});
}]);
