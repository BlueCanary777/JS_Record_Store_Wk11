var RecordStore = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = balance;
}

RecordStore.prototype.addRecord = function(record){
  this.inventory.push(record);
}

RecordStore.prototype.displayInventory = function(){
  var inventoryDisplay = [];
  this.inventory.forEach(function(record){
    inventoryDisplay.push(record);
  });
  return inventoryDisplay;
}

RecordStore.prototype.sellRecord = function(recordToSell){
  var remainingStock = [];
  this.inventory.forEach(function(record){
    if (recordToSell.title != record.title){
      remainingStock.push(record);
    }
  });
  this.inventory = remainingStock;
  return recordToSell;
}


module.exports = RecordStore;
