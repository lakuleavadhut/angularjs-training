
angular.module('myApp').factory('incomeFactory',[function() {

     var masterIncome = [];
     var masterExpense=[];
     //var obj={}
    return{
      addIncome: function (incomedata)
      {
    		    masterIncome.push(incomedata);
      },
      getIncome: function()
      {
        return masterIncome;
      },
      addExpenses: function(incomedata)
      {
            masterExpense.push(incomedata);
      },
      getExpense: function()
      {
        return masterExpense;
      }
    }

}]);
