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

RecordStore.prototype.sellRecord = function(recordSelling){
  var remainingStock = [];
  this.inventory.forEach(function(record){
    if (recordSelling.title != record.title){
      remainingStock.push(record);
    }
  });
  this.inventory = remainingStock;
  this.balance += recordSelling.price;
  return recordSelling;
}

RecordStore.prototype.calcAssets = function(){
  var inventoryValues = [];
  this.inventory.forEach(function(record){
    inventoryValues.push(record.price);
  })
  var inventoryTotalValue = inventoryValues.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
  })
  return inventoryTotalValue += this.balance;
}

RecordStore.prototype.findGenreStock = function(genreSelection){
var genreStock = [];
this.inventory.forEach(function(record){
  if (record.genre === genreSelection.genre){
    genreStock.push(record);
  }
});
  return genreStock;
}
// RecordStore.prototype.displayRecordsOfGenre = function(genre){
//   var genreInventory = [];
//   var found = this.inventory.find(function(record) {
//   return record.title === "Pop";
//   genreInventory.push(record);
// });
// console.log(genreInventory);
// return genreInventory;
// }


module.exports = RecordStore;
