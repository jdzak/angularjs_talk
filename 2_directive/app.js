var app = angular.module('colorsApp', []);

app.controller('MisterController', function($scope) {
  $scope.colors = [
    { name:"red",   value:"#f00" },
    { name:"green", value:"#0f0" },
    { name:"blue",  value:"#00f" }
  ];

  $scope.remove = function(index) {
    $scope.colors.splice(index, 1);
  }
});

app.directive('favoriteColor', function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div style="background-color:{{color.value}}">{{color.name}} <button ng-click="remove()">remove</button></div>',
    scope: {
      color:'=color'
    }
  }
});