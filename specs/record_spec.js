var assert = require('assert');
var Record = require('../record.js');

describe('Record', function(){

  var record1;
  var record2;


  beforeEach(function(){
    record1 = new Record("Elton John", "Goodbye Yellow Brick Road", "Pop", 10);
    record2 = new Record("Iron Maiden", "The Number of the Beast", "Heavy Metal", 12);
  })

  it("should return a record a string", function(){
    assert.strictEqual(record1.toString(), "Name: Elton John, Title: Goodbye Yellow Brick Road, Genre: Pop, Price: 10");
    assert.strictEqual(record2.toString(), "Name: Iron Maiden, Title: The Number of the Beast, Genre: Heavy Metal, Price: 12");
  })


})
