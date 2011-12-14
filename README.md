# regexposix #

regexposix provides regular expression functions with POSIX character classes.

## Methods ##

**add** `regexposix.add(regex, identifier)`  
  
Adds a new character class [:identifier:] for the given regular expression.

	regexposix.add(/[0-9]{4}/, 'fourdigits');
	regexposix.test(/[:fourdigits:]/, 'foo2011bar')
	// => true
  
**match** `regexposix.match(regex, string)`  

Equals JavaScripts `RegExp.match()`.
  
**test** `regexposix.test(regex, string)`  

Equals JavaScripts `RegExp.test()`.
  
**replace** `regexposix.replace(regex, string, replacement_string)`  

Equals JavaScripts `RegExp.replace()`.
  
**replaceInArray** `regexposix.replaceInArray(regex, array, replacement_string)`  

Similar to **replace** but for arrays.
  
	regexposix.replaceInArray(/[:digit:]+/, ['foo', 'bar', '2001', 'foo2011bar'], '-');
	// => ['foo', 'bar', '-', 'foo-bar']

**replaceCallback** `regexposix.replaceCallback(regex, array, function)`  

This function is almost identical to **replace** but instead replacing the matches with a string they will be replaced by the result of the callback function.

	regexposix.replaceCallback(/[:digit:]+/, 'foo2011bar, function(n) {
		return Number(n)*2;
	});
	// => foo4022bar
  
**search** `regexposix.search(regex, string)`  

Equals JavaScripts `RegExp.search()`.
  
**exec** `regexposix.exec(regex, string)`  

Equals JavaScripts `RegExp.exec()`.

## Predefined Character Classes ##

	alnum:  "[A-Za-z0-9]",
	alpha:  "[A-Za-z]",
	blank:  "[ \\t]",
	cntrl:  "[\\x00-\\x1F\\x7F]",
	digit:  "[0-9]",
	graph:  "[\\x21-\\x7E]",
	lower:  "[a-z]",
	print:  "[\\x20-\\x7E]",
	punct:  "[!\"#$%&'()*+,\\-./:;<=>?@[\\\\\\]^_`{|}~]",
	space:  "[ \\t\\r\\n\\v\\f]",
	upper:  "[A-Z]",
	word:   "[A-Za-z0-9_]",
	xdigit: "[A-Fa-f0-9]",
	nonspace:  "[^ \\t\\r\\n\\v\\f]",
	nondigit:  "[^0-9]",
	email: "(?:[\\w\\!\\#\\$\\%\\&\\'\\*\\+\\-\\/\\=\\?\\^\\`\\{\\|\\}\\~]+\\.)*[\\w\\!\\#\\$\\%\\&\\'\\*\\+\\-\\/\\=\\?\\^\\`\\{\\|\\}\\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\\-](?!\\.)){0,61}[a-zA-Z0-9]?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\\[(?:(?:[01]?\\d{1,2}|2[0-4]\\d|25[0-5])\\.){3}(?:[01]?\\d{1,2}|2[0-4]\\d|25[0-5])\\]))",
	uuid: "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}"

## License ##

Released under the [MIT license](http://www.opensource.org/licenses/mit-license.php).

