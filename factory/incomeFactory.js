angular.module('myApp').factory('incomeFactory', ['$http', '$q', '$window', function($http, $q, $window) {

  var masterIncome = [];
  var masterExpense = [];

  return {
    addIncome: function(incomedata) {
      masterIncome.push(incomedata);
    },

    getIncomeFromHTTP: function() {
      return $http.get('http://demo9464688.mockable.io/transactions')
    },

    getIncomeFromLocal: function() {
      return masterIncome;
    },

    addExpenses: function(incomedata) {
      masterExpense.push(angular.copy(incomedata));
    },

    getExpense: function() {
      return masterExpense;
    }
  }

}]);
