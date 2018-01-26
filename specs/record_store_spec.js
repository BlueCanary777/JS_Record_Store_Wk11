var assert = require('assert');
var Record = require('../record.js');
var RecordStore = require('../record_store.js');

describe('Record Store', function(){

  var record1;
  var record2;
  var record3;
  var record4;
  var recordStore;

  beforeEach(function(){
    record1 = new Record("Elton John", "Goodbye Yellow Brick Road", "Pop", 10);
    record2 = new Record("Iron Maiden", "The Number of the Beast", "Heavy Metal", 12);
    record3 = new Record("Pink Floyd", "Dark Side of the Moon", "Rock", 15);
    record4 = new Record("Madonna", "Best Of", "Pop", 9);
    recordStore = new RecordStore("JS Record Store", "Edinburgh", 500);
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
    recordStore.addRecord(record4);
  })

  xit("should be empty", function(){
    assert.strictEqual(recordStore.inventory.length, 0);
  })

  it("should contain one record", function(){
    recordStore.addRecord(record1);
    assert.strictEqual(recordStore.inventory.length, 5);
  })

  it("should be able to display inventory", function(){
    assert.deepEqual(recordStore.displayInventory(), [record1, record2, record3, record4]);
  })

  it("should be able to sell record and update balance", function(){
    recordStore.sellRecord(record1);
    assert.strictEqual(recordStore.inventory.length, 3);
    assert.strictEqual(recordStore.balance, 510);
  })

  it("should be able to report total assets of store", function(){
    assert.strictEqual(recordStore.calcAssets(), 546);
  })

  // it("should allow the store to view all Records of a given Genre", function(){
  //   assert.deepEqual(recordStore.displayRecordsOfGenre("Pop"), [record1, record4]);
  // })


})
