var app = angular.module('myApp',[]).controller('myControl',function($scope){

                      $scope.incomeData = [
                        {
                        transactionId:1,
                        payer: 'globant',
                        payee : 'Sam',
                        category: 'Salary',
                        subCategory:'',
                        amount:30000,
                        date: '1st,jan 2016',
                        modeOfPayment :'cash',
                        notes:'',
                        type : 'Income'
                      },
                 {
                   transactionId:2,
                   payer: 'globant',
                   payee : 'John',
                   category: 'Salary',
                   subCategory:'',
                   amount:30000,
                   date:'1st,jan 2016',
                   modeOfPayment :'cash',
                   notes:'',
                   type : 'Income'
                 }
             ];
              $scope.expenseData = [
                 {
                   transactionId:1,
                   payer: 'globant',
                   payee : 'Sam',
                   category: 'Salary',
                   subCategory:'',
                   amount:30000,
                   date: '1st,jan 2016',
                   modeOfPayment :'cash',
                   notes:'',
                   type : 'Expense'
                 },
                 {
                   transactionId:1,
                   payer: 'globant',
                   payee : 'Sam',
                   category: 'Salary',
                   subCategory:'',
                   amount:30000,
                   date: '1st,jan 2016',
                   modeOfPayment :'cash',
                   notes:'',
                   type : 'expense'
                 }
             ];





});
