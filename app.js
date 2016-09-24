(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST #1 - controller
ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyList.buy = function (itemIndex) {
    ShoppingListCheckOffService.buy(itemIndex);
  };
}


// LIST #2 - controller
AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var itemBoughtList = this;

  itemBoughtList.items = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyListItems = [{ name: "cookies", quantity: 10 },{ name: "apple", quantity: 5 }];
  var boughtItems = [];



  service.buy= function (itemIdex) {
    var boughtItem = toBuyListItems.splice(itemIdex, 1);
    this.boughtItems.push(boughtItem);
  };
  service.getBoughtItems = function () {
    return this.boughtItems;
  };
  service.getToBuyItems = function () {
    return toBuyListItems;
  };
}

})();
