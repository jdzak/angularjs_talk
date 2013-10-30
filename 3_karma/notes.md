Testing
=======

What is karma...
----------------
> Karma’s main reason for existence is to make your test-
> driven development (TDD) workflow simple, fast, and fun. It 
> uses NodeJS and SocketIO (you don’t need to know what they 
> are, just assume that they are awesome, cool libraries) to 
> allow running your code, and tests in multiple browsers at 
> insanely fast speeds.
> -- <cite> Brad Green, Angularjs (S.l.: O'Reilly Media, 2013), 52-53.</cite>


Example
-------
1. `sudo npm install -g karma`
  * Install Karma
2. `karma run`
3. karma.conf.js
  * Magic configuration
4. `beforeEach(module('colorsApp'))`
  * Loads application
5. `$controller('MisterController', {$scope: scope})`
  * Get controller and inject scope
6. `scope.remove(1)`
  * Method under test