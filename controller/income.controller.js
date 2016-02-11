app.controller('incomeController',['$scope','incomeFactory', function($scope,incomeFactory) {


        $scope.incomeData = incomeFactory.getIncome();

    }]);
