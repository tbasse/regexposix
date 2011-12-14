$(document).ready(function() {

  module("Match");

  test("[:alnum:]", function() {
    equals(regexposix.match(/[:alnum:]/, 'abcd'), 'a', 'match single alphanumeric');
    equals(regexposix.match(/[:alnum:]/, '1234'), '1', 'match single alphanumeric');
    equals(regexposix.match(/[:alnum:]+/, 'abcd1234'), 'abcd1234', 'match single alphanumeric');
    equals(regexposix.match(/^[:alnum:]+$/, 'abcd1234-'), null, 'match single alphanumeric');
    // var result = (function(){ return _.first(arguments); })(4, 3, 2, 1);
    // equals(result, 4, 'works on an arguments object.');
  });
  
  test("[:alpha:]", function() {
    equals(regexposix.match(/[:alpha:]/, 'abcd'), 'a', 'match single alphanumeric');
    equals(regexposix.match(/[:alpha:]/, '1234'), null, 'match single alphanumeric');
    equals(regexposix.match(/[:alpha:]+/, 'abcd1234'), 'abcd', 'match single alphanumeric');
    equals(regexposix.match(/^[:alpha:]+$/, 'abcd'), 'abcd', 'match single alphanumeric');
    equals(regexposix.match(/^[:alpha:]+$/, 'abcd1234'), null, 'match single alphanumeric');
    // var result = (function(){ return _.first(arguments); })(4, 3, 2, 1);
    // equals(result, 4, 'works on an arguments object.');
  });
  
  test("[:blank:]", function() {
    equals(regexposix.match(/[:blank:]/, 'ab cd'), ' ', 'match single alphanumeric');
    equals(regexposix.match(/[:blank:]/, 'ab\tcd'), '\t', 'match single alphanumeric');
    equals(regexposix.match(/[:blank:]/, '1234'), null, 'match single alphanumeric');
    equals(regexposix.match(/[:blank:]+/, 'ab  cd1234'), '  ', 'match single alphanumeric');
    equals(regexposix.match(/^[:blank:]+$/, '\t\t '), '\t\t ', 'match single alphanumeric');
    equals(regexposix.match(/^[:blank:]+$/, 'abcd1234'), null, 'match single alphanumeric');
    // var result = (function(){ return _.first(arguments); })(4, 3, 2, 1);
    // equals(result, 4, 'works on an arguments object.');
  });
  
  test("[:digit:]", function() {
    equals(regexposix.match(/[:digit:]/, 'abcd'), null, 'match single alphanumeric');
    equals(regexposix.match(/[:digit:]/, 'ab1cd'), '1', 'match single alphanumeric');
    equals(regexposix.match(/[:digit:]/, '1234'), '1', 'match single alphanumeric');
    equals(regexposix.match(/[:digit:]+/, 'abcd1234'), '1234', 'match single alphanumeric');
    equals(regexposix.match(/^[:digit:]+$/, '1234'), '1234', 'match single alphanumeric');
    equals(regexposix.match(/^[:digit:]+$/, 'abcd1234'), null, 'match single alphanumeric');
    equals(regexposix.match(/[:digit:]+/g, 'abcd1234efgh1234'), ["1234","1234"], 'match single alphanumeric');
    // var result = (function(){ return _.first(arguments); })(4, 3, 2, 1);
    // equals(result, 4, 'works on an arguments object.');
  });

});
