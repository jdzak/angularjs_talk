describe("MisterController", function() {
  beforeEach(module('colorsApp'));

  it("removes correctly", inject(function($controller, $rootScope) {
    var scope = $rootScope.$new();
    var ctrl = $controller('MisterController', {$scope: scope});

    expect(scope.colors.length).toBe(3);
    scope.remove(1);
    expect(scope.colors.length).toBe(2);
  }));
});
