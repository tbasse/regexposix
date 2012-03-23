$(document).ready(function() {

  module(".match()");

  test("", function() {
    same(regexposix.match(/[:alnum:]/, 'abcde'), ['a'], 'single alnum in abcde');
    same(regexposix.match(/[:alnum:]+/, 'abcde'), ['abcde'], 'multiple alnum in abcde');
    same(regexposix.match(/[:alnum:]/, 'ab123'), ['a'], 'multiple alnum in ab123');
    same(regexposix.match(/[:alnum:]+/, 'ab123'), ['ab123'], 'multiple alnum in ab123');
    same(regexposix.match(/[:alnum:]/, '!§$%&._,'), null, 'single alnum in !§$%&._,');
    same(regexposix.match(/[:alnum:]+/, '!§$%&._,'), null, 'multiple alnum in !§$%&._,');
    same(regexposix.match(/^[:alnum:]+$/, 'ab123'), ['ab123'], 'match if completely alnum on ab123');
    same(regexposix.match(/^[:alnum:]+$/, 'ab.23'), null, 'match if completely alnum on ab-23');
    
    same(regexposix.match(/[:alpha:]/, 'abcd'), ['a'], 'single alpha in abcd');
    same(regexposix.match(/[:alpha:]/, '1234'), null, 'single alpha in 1234');
    same(regexposix.match(/[:alpha:]+/, 'abcd1234'), ['abcd'], 'multiple alpha in abcd1234');
    same(regexposix.match(/^[:alpha:]+$/, 'abcd'), ['abcd'], 'match if only alpha on abcd');
    same(regexposix.match(/^[:alpha:]+$/, 'abcd1234'), null, 'match if only alpha on abcd1234');

    same(regexposix.match(/[:blank:]/, 'ab cd'), [' '], 'match single alphanumeric');
    same(regexposix.match(/[:blank:]/, 'ab\tcd'), ['\t'], 'match single alphanumeric');
    same(regexposix.match(/[:blank:]/, '1234'), null, 'match single alphanumeric');
    same(regexposix.match(/[:blank:]+/, 'ab  cd1234'), ['  '], 'match single alphanumeric');
    same(regexposix.match(/^[:blank:]+$/, '\t\t '), ['\t\t '], 'match single alphanumeric');
    same(regexposix.match(/^[:blank:]+$/, 'abcd1234'), null, 'match single alphanumeric');

    same(regexposix.match(/[:digit:]/, 'abcd'), null, 'match single alphanumeric');
    same(regexposix.match(/[:digit:]/, 'ab1cd'), ['1'], 'match single alphanumeric');
    same(regexposix.match(/[:digit:]/, '1234'), ['1'], 'match single alphanumeric');
    same(regexposix.match(/[:digit:]+/, 'abcd1234'), ['1234'], 'match single alphanumeric');
    same(regexposix.match(/^[:digit:]+$/, '1234'), ['1234'], 'match single alphanumeric');
    same(regexposix.match(/^[:digit:]+$/, 'abcd1234'), null, 'match single alphanumeric');
    same(regexposix.match(/[:digit:]+/g, 'abcd1234efgh1234'), ["1234","1234"], 'match single alphanumeric');
  });
  
  module(".test()");

  test("", function() {
    equals(regexposix.test(/[:alnum:]/, 'abcd'), true, 'match single alphanumeric');
    equals(regexposix.test(/[:alnum:]/, '1234'), true, 'match single alphanumeric');
    equals(regexposix.test(/[:alnum:]+/, 'abcd1234'), true, 'match mutiple alphanumeric');
    equals(regexposix.test(/^[:alnum:]+$/, 'abcd1234-'), false, 'fail matching only alphanumeric');

    equals(regexposix.test(/[:alpha:]/, 'abcd'), true, 'match single alpha');
    equals(regexposix.test(/[:alpha:]/, '1234'), false, 'fail matching on only digits');
    equals(regexposix.test(/[:alpha:]+/, 'abcd1234'), true, 'match multiple alpha');
    equals(regexposix.test(/^[:alpha:]+$/, 'abcd'), true, 'match if only alphanumeric');
    equals(regexposix.test(/^[:alpha:]+$/, 'abcd1234'), false, 'fail match if only alphanumeric');

    equals(regexposix.test(/[:blank:]/, 'ab cd'), true, 'match single alphanumeric');
    equals(regexposix.test(/[:blank:]/, 'ab\tcd'), true, 'match single alphanumeric');
    equals(regexposix.test(/[:blank:]/, '1234'), false, 'match single alphanumeric');
    equals(regexposix.test(/[:blank:]+/, 'ab  cd1234'), true, 'match single alphanumeric');
    equals(regexposix.test(/^[:blank:]+$/, '\t\t '), true, 'match single alphanumeric');
    equals(regexposix.test(/^[:blank:]+$/, 'abcd1234'), false, 'match single alphanumeric');

    equals(regexposix.test(/[:digit:]/, 'abcd'), false, 'match single alphanumeric');
    equals(regexposix.test(/[:digit:]/, 'ab1cd'), true, 'match single alphanumeric');
    equals(regexposix.test(/[:digit:]/, '1234'), true, 'match single alphanumeric');
    equals(regexposix.test(/[:digit:]+/, 'abcd1234'), true, 'match single alphanumeric');
    equals(regexposix.test(/^[:digit:]+$/, '1234'), true, 'match single alphanumeric');
    equals(regexposix.test(/^[:digit:]+$/, 'abcd1234'), false, 'match single alphanumeric');
    equals(regexposix.test(/[:digit:]+/g, 'abcd1234efgh1234'), true, 'match single alphanumeric');
  });
  
  module(".add()");
  
  regexposix.add(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/, 'uuid');  
  test("[:uuid:]", function() {
    equals(regexposix.test(/[:uuid:]/, 'abcd'), false, 'is not uuid');
    equals(regexposix.test(/[:uuid:]/, 'b940e15a-c8b1-4740-9db0-27f33a8b8d55'), true, 'is uuid');
    equals(regexposix.test(/[:uuid:]/, '12345678-1234-1234-1234-123456789123'), true, 'is uuid');
  });
  
  module(".replace()");
  
  test("", function() {
    equals(regexposix.replace(/[:digit:]/, 'ab1cd', '_'), 'ab_cd', 'replace 1 with _');
    equals(regexposix.replace(/[a-z]+/, 'ab1cd', '_'), '_1cd', 'replace 1 with _');
    equals(regexposix.replace(/[a-z]+/g, 'ab1cd', '_'), '_1_', 'replace 1 with _');
  });

});
