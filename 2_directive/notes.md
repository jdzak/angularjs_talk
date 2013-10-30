Directives
==========

What are directives...
----------------------

> Directives extend HTML syntax, and are the way to associate 
> behavior and DOM trans‐formations with custom elements and 
> attributes. Through them, you can create reusable UI
> components, configure your application, and do almost 
> anything else you can imag‐ine wanting to do in your UI 
> template.
> -- <cite> Brad Green, Angularjs (S.l.: O'Reilly Media, 2013), 43.

Example
-------
1. `<favorite-color color="color"/>`
  * Custom directive with semantic relavance
2. `restrict: 'E'`
  * Elements only
3. `replace: true`
  * Removes directive from and DOM and replaces with template
4. `template:'...'`
  * Some html
  * Alternative is to use templateUrl
5. `scope:{}`
  * creates internal scope to prevent poluting parent scope
6. `color:'=color'`
  * attribute color will be passed and bound from parent scope
