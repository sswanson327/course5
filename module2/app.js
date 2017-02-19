(function () {
'use strict';


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.boughtItem = function(itemIndex) {
      ShoppingListCheckOffService.boughtItem(itemIndex);
  };


}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought=this;
  alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}


// If not specified, maxItems assumed unlimited
function ShoppingListCheckOffService() {
  var service = this;
  var toBuyList = [
    {name: "Milk", quantity: 2}, {name:"Donuts", quantity: 12}, {name:"Cookies", quantity:10}, {name:"Chocolate",quantity:3}, {name: "Peanut Butter", quantity:2}
  ];
  var alreadyBoughtList = [];

  service.boughtItem = function(itemIndex) {
    var item = toBuyList[itemIndex];
    alreadyBoughtList.push(item);
    toBuyList.splice(itemIndex,1);
  };

  service.getToBuyItems = function () {
    return toBuyList;
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtList;
  };

}


})();
