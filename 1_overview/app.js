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