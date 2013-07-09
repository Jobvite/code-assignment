describe('Solution3 Module', function() {

	var obj = {
			app: {
				person: {
					account: {
						email: 'test@test.com'
					}
				}
			}
		},
		$o, $scope;

	beforeEach(module('Solution3'));
	beforeEach(inject(function($injector) {
		$o = $injector.get('$o');
		$scope = $injector.get('$rootScope').$new();
	}));

	describe('$o()', function() {

		it('should return an object with a .prop() method', function() {
			expect($o(obj).prop).toBeDefined();
		});

		describe('.prop()', function() {

			it('should return a nested property on an object', function() {
				var val = $o(obj).prop('app.person.account.email');
				expect(val).toEqual(obj.app.person.account.email);
			});

			it("should return undefined if the property doesn't exist", function() {
				var val = $o(obj).prop('app.person.location.zip');
				expect(val).toBeUndefined();
			});

			it('should set a nested property on an object', function() {
				var zip = 55555;
				$o(obj).prop('app.person.location.zip', zip);
				expect(obj.app.person.location.zip).toEqual(zip);
			});

		});

	});

});