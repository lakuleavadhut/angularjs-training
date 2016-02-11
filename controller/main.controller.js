app.controller('mainController',['incomeFactory','$scope',function(incomeFactory,$scope) {


    $scope.add = function(incomedata){

        debugger;
        if(incomedata.type == 'income'){

              incomeFactory.addIncome(incomedata);

              }else
              {
              incomeFactory.addExpenses(incomedata);
            }
            debugger;
            };
    }]);
