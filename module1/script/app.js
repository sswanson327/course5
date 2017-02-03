(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.CheckIfToMuch = function () {
      var msg;
      var NumberOfDishes=CountIt();
      if (NumberOfDishes>0 && NumberOfDishes<4) {
        msg="Enjoy!";
        $scope.BorderColor = "GreenBorderColor";
        $scope.FontColor = "GreenFontColor";
      } else if (NumberOfDishes>3) {
        msg="Too Much!";
        $scope.BorderColor = "GreenBorderColor";
        $scope.FontColor="GreenFontColor";
      } else {
        msg="Please enter data first";
        $scope.BorderColor = "RedBorderColor";
        $scope.FontColor = "RedFontColor";
      }
      $scope.message=msg;
  }
  function CountIt() {
    var counter=0;var dishInput;
    dishInput=$scope.dishes;
    if (typeof dishInput!='undefined') {
      dishInput = dishInput.split(',');
      for (var dish of dishInput) {
        if (dish.trim().length>0)
          counter++;
      }
    }
    return counter;
  }
}

})();
