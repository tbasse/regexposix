$(document).ready(function() {

  module("Match");

  test("[:alnum:]", function() {
    same(regexposix.match(/[:alnum:]/, 'abcd'), ['a'], 'match single alphanumeric');
    same(regexposix.match(/[:alnum:]/, '1234'), ['1'], 'match single alphanumeric');
    same(regexposix.match(/[:alnum:]+/, 'abcd1234'), ['abcd1234'], 'match mutiple alphanumeric');
    same(regexposix.match(/^[:alnum:]+$/, 'abcd1234-'), null, 'fail matching only alphanumeric');
    // var result = (function(){ return _.first(arguments); })(4, 3, 2, 1);
    // equals(result, 4, 'works on an arguments object.');
  });
  
  test("[:alpha:]", function() {
    same(regexposix.match(/[:alpha:]/, 'abcd'), ['a'], 'match single alpha');
    same(regexposix.match(/[:alpha:]/, '1234'), null, 'fail matching on only digits');
    same(regexposix.match(/[:alpha:]+/, 'abcd1234'), ['abcd'], 'match multiple alpha');
    same(regexposix.match(/^[:alpha:]+$/, 'abcd'), ['abcd'], 'match if only alphanumeric');
    same(regexposix.match(/^[:alpha:]+$/, 'abcd1234'), null, 'fail match if only alphanumeric');
    // var result = (function(){ return _.first(arguments); })(4, 3, 2, 1);
    // equals(result, 4, 'works on an arguments object.');
  });
  
  test("[:blank:]", function() {
    same(regexposix.match(/[:blank:]/, 'ab cd'), [' '], 'match single alphanumeric');
    same(regexposix.match(/[:blank:]/, 'ab\tcd'), ['\t'], 'match single alphanumeric');
    same(regexposix.match(/[:blank:]/, '1234'), null, 'match single alphanumeric');
    same(regexposix.match(/[:blank:]+/, 'ab  cd1234'), ['  '], 'match single alphanumeric');
    same(regexposix.match(/^[:blank:]+$/, '\t\t '), ['\t\t '], 'match single alphanumeric');
    same(regexposix.match(/^[:blank:]+$/, 'abcd1234'), null, 'match single alphanumeric');
    // var result = (function(){ return _.first(arguments); })(4, 3, 2, 1);
    // equals(result, 4, 'works on an arguments object.');
  });
  
  test("[:digit:]", function() {
    same(regexposix.match(/[:digit:]/, 'abcd'), null, 'match single alphanumeric');
    same(regexposix.match(/[:digit:]/, 'ab1cd'), ['1'], 'match single alphanumeric');
    same(regexposix.match(/[:digit:]/, '1234'), ['1'], 'match single alphanumeric');
    same(regexposix.match(/[:digit:]+/, 'abcd1234'), ['1234'], 'match single alphanumeric');
    same(regexposix.match(/^[:digit:]+$/, '1234'), ['1234'], 'match single alphanumeric');
    same(regexposix.match(/^[:digit:]+$/, 'abcd1234'), null, 'match single alphanumeric');
    same(regexposix.match(/[:digit:]+/g, 'abcd1234efgh1234'), ["1234","1234"], 'match single alphanumeric');
    // var result = (function(){ return _.first(arguments); })(4, 3, 2, 1);
    // equals(result, 4, 'works on an arguments object.');
  });

});
