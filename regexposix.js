(function(){
  var root = this,
  character_classes = {
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
  },
  _regexToClassString = function(regex) {
    return String(regex).replace(/^[\/]|[\/].*?$/g, '');
  },
  _regexToObject = function(regex) {
    var rarr = String(regex).match(/^\/(.*?)\/([a-z]{0,10})$/);
    var robj = {string: rarr[1], modifier: rarr[2]};
    return robj;
  },
  _replacePosix = function(regex) {
    var robj = _regexToObject(regex);
    var posixfound = robj.string.match(/\[:([a-z\d]+):\]/ig);
    for(var p in posixfound) {
      robj.string = robj.string.replace(posixfound[p], character_classes[posixfound[p].replace(/[\[\]\:]/g,'')]);
    }
    return new RegExp(robj.string, robj.modifier);
  };
  rxp = {
    VERSION: '0.1',
    add: function(regex, id) {
      character_classes[id] = _regexToClassString(regex);
    },
    match: function(regex, string) {
      return String(string).match(_replacePosix(regex));
    },
    test: function(regex, string) {
      return _replacePosix(regex).test(String(string));
    },
    replace: function(regex, string, replacement) {
      if( typeof string === 'string' ) {
        return String(string).replace(_replacePosix(regex), replacement);
      }
      return string;
    },
    replaceInArray: function(regex, array, replacement) {
      if( Object.prototype.toString.call(array) === '[object Array]' ) {
        for( var i in array ) {
          array[i] = String(array[i]).replace(_replacePosix(regex), replacement);
        }
        return array;
      }
      return array;
    },
    replaceCallback: function(regex, string, cb) {
      var ro = _regexToObject(regex);
      var s = String(string).match(_replacePosix('/'+ro.string+'/g'));
      if( s ) {
        for( var l in s ) {
          string = string.replace(s[l], cb(s[l]));
        }
        return string;
      }
      return string;
    },
    replaceInArrayCallback: function(regex, array, cb) {
      if( Object.prototype.toString.call(array) === '[object Array]' ) {
        var ro = _regexToObject(regex);
        for( var i in array ) {
          var s = String(array[i]).match(_replacePosix('/'+ro.string+'/g'));
          array[i] = String(array[i]).replace(_replacePosix(regex), cb(s));
        }
        return array;
      }
      return array;
    },
    exec: function(regex, string) {
      return _replacePosix(regex).exec(String(str));
    },
    search: function(regex, string) {
      return String(string).search(_replacePosix(regex));
    }
  };

  // Export the for **Node.js** and **"CommonJS"**, with
  // backwards-compatibility for the old `require()` API. If we're not in
  // CommonJS, add `regexposix` to the global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = rxp;
    }
    exports = rxp;
  } else if (typeof define === 'function' && define.amd) {
    // Register as a named module with AMD.
    define('regexposix', function() {
      return rxp;
    });
  } else {
    // Exported as a string, for Closure Compiler "advanced" mode.
    root['regexposix'] = rxp;
  }

})();
