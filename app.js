var app = angular.module('myApp',[]).controller('myControl',function($scope){

                      $scope.incomeData = [
                 {
                     name: 'Sam',
                     income: 30000,
                     sources: 'Salary'

                 },
                 {
                     name: 'John',
                     income: 80000,
                     sources: 'Business'
                 }
             ];            
              $scope.expenseData = [
                 {
                     name: 'Sam',
                     hra: 14000,
                     lta: 1020,
                     medical: 1050,
                     party:4000
                 },
                 {
                     name: 'John',
                     hra: 7000,
                     lta: 7200,
                     medical: 8500,
                     party:5000
                 }
             ];





});
