(function() {
  var app = angular.module('store', []);
  
  app.controller('StoreController', function(){
    this.products = bikes;});

  var bikes = [
    {manufacturer: "Surly", model: "Long Haul Trucker", price: "1300", canPurchase: true, soldOut: false},
    {manufacturer: "Salsa", model: "Casserole", price: "1200", canPurchase: true, soldOut: false},
    {manufacturer: "All City", model: "Nature Boy", price: "900", canPurchase: true, soldOut: false},
  ];
})();

