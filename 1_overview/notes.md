Overview
========

What is Angular.js...
---------------------

> AngularJS lets you write client-side web applications as if you
> had a smarter browser. It lets you use good old HTML as your 
> template language and lets you extend HTML’s syntax to express your 
> application’s components clearly and succinctly. It automatically 
> synchronizes data from your UI (view) with your JavaScript 
> objects (model) through 2-way data binding. To help you structure 
> your application better and make it easy to test, AngularJS teaches 
> the browser how to do dependency injection and inversion of control. 
> Oh yeah and it also helps with server-side communication, taming 
> async callbacks with promises and deferreds; and make client-side 
> navigation and deeplinking with hashbang urls or HTML5 pushState a 
> piece of cake. The best of all: it makes development fun!
> -- <cite>https://github.com/angular/angular.js</cite>

Example
-------
1. ng-app="colorsApp"
  * Tells angular where it should manage page
2. ng-controller="MisterController"
  * Controllers manage parts of the page
  * Dependency injection through $scope
3. ng-model="searchText"
  * Bind input to $scope.searchText
4. ng-repeat="color in colors"
  * Copy DOM inside div once for every element in colors
5. filter:searchText
  * Filter colors by searchText
6. {{color.value}} and {{color.name}}
  * Evaluate expression by copying value into DOM
7. ng-click="remove()"
  * Directive to call remove() on click