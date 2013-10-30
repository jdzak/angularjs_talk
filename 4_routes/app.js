var app = angular.module('colorsApp', []);
app.config(function($routeProvider){
  $routeProvider.when("/one", {
    template: "{{model.message}}",
    controller: "OneCtrl"
  });
  $routeProvider.when("/two", {
    template: "{{model.message}}",
    controller: "TwoCtrl"
  });
});

app.controller("OneCtrl", function($scope){
  $scope.model = {
    message: "This is page ONE!!!"
  }
});

app.controller("TwoCtrl", function($scope){
  $scope.model = {
    message: "This is page Two!!!"
  }
});