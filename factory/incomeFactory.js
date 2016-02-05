
angular.module('myApp').factory('incomeFactory', function() {

     var master = [];

    return function(user)
    {
  		    master.push(user);
    }
});
