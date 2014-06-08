(function(){

	var app = angular.module('store-directives', []);

	//Custom directive of new HTML Element, hence restrict: 'E'
	//<product-description></product-description>
	app.directive("productDescription", function(){
		return {
			restrict: 'E',
			templateUrl: 'product-description.html'
		};
	});
	//<product-reviews></product-reviews>
	app.directive("productReviews", function(){
		return {
			restrict: 'E',
			templateUrl: 'product-reviews.html'
		};
	});

	//Custom directive of new HTML Attribute, hence restrict: 'A'
	//<div product-specs>
	app.directive("productSpecs", function(){
		return {
			restrict: 'A',
			templateUrl: 'product-specs.html'
		};
	});

	//Custom directives with controller
	//<product-tabs>
	app.directive("productTabs", function(){
		return {
			restrict: 'E',
			templateUrl: 'product-tabs.html',
			controller: function(){
				this.tab = 1;
				this.setTab = function(newTab){
					this.tab = newTab;
				};
				this.isSetTab = function(tabName){
					return this.tab === tabName;
				};
			},
			controllerAs: 'tabs'
		};
	});
	//<product-gallery>
	app.directive("productGallery", function(){
		return {
			restrict: 'E',
			templateUrl: 'product-gallery.html',
			controller: function(){
				this.current = 0;
				this.setCurrent = function(newCurrent){
					this.current = newCurrent || 0;
				};
			},
			controllerAs: 'gallery'
		}
	});

})();