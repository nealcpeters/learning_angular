(function() {
  var bike = {manufacturer: "Surly", model: "Long Haul Trucker", price: "$1,000"}
  var app = angular.module('store', []);
  app.controller('StoreController', function(){
    this.product = bike;});
})();

