angular.module('mydirective', ['ngRoute'])
  .directive('MainReport', [function() {
    var newtemplate = function() {
      var template = '<div class="home"></div>';
      return template;

      return {
        restrict: 'E',
        template: newtemplate,
        scope: {
          data: 'homeData'
        }
        link: function(scope, element, attrs) {




        }
      }
    }
  }]);
