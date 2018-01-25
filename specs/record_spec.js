var assert = require('assert');
var Record = require('../record.js');

describe('Record', function(){

  var record1;

  beforeEach(function(){
    record1 = new Record("Elton John", "Goodbye Yellow Brick Road", "Pop", 10);
  })

  it("should return a record a string", function(){
    assert.strictEqual(record1.toString(), "Name: Elton John, Title: Goodbye Yellow Brick Road, Genre: Pop, Price: 10");
  })


})
