var app = angular.module('colorsApp', ['ngResource']);

app.controller('MisterController', function($scope, Color) {
  $scope.colors = [
    { name:"red",   value:"#f00" },
    { name:"green", value:"#0f0" },
    { name:"blue",  value:"#00f" }
  ];

  $scope.remove = function(index) {
    $scope.colors.splice(index, 1);
  }

  $scope.save = function() {
    var newColor = new Color({name:'yellow', value: '#ff0'});
    newColor.name = "yellow";
    newColor.$save();
    // Color.$save({
    //   'name': 'yello',
    //   'value': '#ff0'
    // });
  }
});

app.directive('favoriteColor', function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div style="background-color:{{color.value}}">{{color.name}} <button ng-click="remove()">remove</button></div>',
    scope: {
      color:'=color',
      remove:'&'
    }
  }
});

app.factory('Color', function($resource){
    return $resource("/colors");
});