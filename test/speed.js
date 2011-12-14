(function() {



  JSLitmus.test('match', function() {
    var str = 'abcdefgh1234\tabcdefgh1234 abcdefgh1234-';
    var res = regexposix.match(/[:alpha:]/, str);
    return res;
  });

  // JSLitmus.test('_(list).each()', function() {
  //   var timesTwo = [];
  //   _(numbers).each(function(num){ timesTwo.push(num * 2); });
  //   return timesTwo;
  // });
  // 
  // JSLitmus.test('jQuery.each()', function() {
  //   var timesTwo = [];
  //   jQuery.each(numbers, function(){ timesTwo.push(this * 2); });
  //   return timesTwo;
  // });
  // 
  // JSLitmus.test('_.map()', function() {
  //   return _.map(objects, function(obj){ return obj.num; });
  // });
  // 
  // JSLitmus.test('jQuery.map()', function() {
  //   return jQuery.map(objects, function(obj){ return obj.num; });
  // });
  // 
  // JSLitmus.test('_.pluck()', function() {
  //   return _.pluck(objects, 'num');
  // });
  // 
  // JSLitmus.test('_.uniq()', function() {
  //   return _.uniq(randomized);
  // });
  // 
  // JSLitmus.test('_.uniq() (sorted)', function() {
  //   return _.uniq(numbers, true);
  // });
  // 
  // JSLitmus.test('_.sortBy()', function() {
  //   return _.sortBy(numbers, function(num){ return -num; });
  // });
  // 
  // JSLitmus.test('_.isEqual()', function() {
  //   return _.isEqual(numbers, randomized);
  // });
  // 
  // JSLitmus.test('_.keys()', function() {
  //   return _.keys(objects);
  // });
  // 
  // JSLitmus.test('_.values()', function() {
  //   return _.values(objects);
  // });
  // 
  // JSLitmus.test('_.intersect()', function() {
  //   return _.intersect(numbers, randomized);
  // });
  // 
  // JSLitmus.test('_.range()', function() {
  //   return _.range(1000);
  // });

})();