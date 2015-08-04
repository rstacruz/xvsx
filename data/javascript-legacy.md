JavaScript (legacy)
==================

* Bundle: programming
* Highlight: javascript

Functions
---------

### Defining functions

    function greet(hi, name) {
      console.log(hi + ", " + name);
    }

### Invoking

    greet("Hello", "John");

### Returning values

    function square(n) {
      return n * n;
    }

### Anonymous functions

    var addOne = function(n) { return n + 1; }
    addOne(20);

### Splat

    function work(hi) {
      var names = [].slice.call(arguments, 1);
    }

    greet('hi', 'Moe', 'Curly');
    //=> names == ['Moe', 'Curly']

Variables
---------

### Local variables

    var myvar = 1;

### Global variables

    window.gvar = 1;

The global context is in `window` (browser) or `global` (Node.js).

Classes
-------

### Defining classes

    function Shape() {
    }

    Shape.prototype.area = function () {
      return this.width * this.height;
    };

JavaScript doesn't have classes, it has prototypes.

### Basic instanciation

    instance = new Shape();

### Constructors

    function Shape() {
      // ...
    }

### Attributes

    function Shape() {
    }

    Shape.prototype.setDimensions =
      function(width, height) {
        this.width = width;
        this.height = height;
      };

### Inheritance

    function Rectangle() {
      Shape.apply(this, arguments);
      // ...
    }

    Rectangle.prototype =
      Object.create(Shape.prototype);
    Rectangle.prototype.constructor = Shape;

[Object.create](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) is not supported on IE8.

### Type checking

    if (obj instanceof ClassName)

Methods
-------

### Defining

    MyClass.prototype.method = function () {
      // ...
    }

### Class methods

    MyClass.method = function () {
      // ...
    }

    MyClass.method();

### Running a method with an arbitrary name

    obj["method_name"](arg1, arg2);

Singletons
----------

### Singleton pattern

    var AppConfig = {
      read: function() {
        // ...
      }
    };

    AppConfig.read();

Arrays
------

### Initializing

    list = [];
    list = ["a", "b", "c", "d", "e"];

### Accessing

    list[0]  // "a"

### Length

    list.length

### Adding items

    list.unshift(X);       //=> [X _ _ _ _]
    list.splice(2, 0, X);  //=> [_ _ X _ _]
    list.push(X);          //=> [_ _ _ _ X]

### Removing items

    // first
    list.shift()      //=>  a
    list              //=> [  b c d e]

    // middle
    list.splice(2,1)  //=> [    c    ]
    list              //=> [a b   d e]

    // last
    list.pop()        //=>          e 
    list              //=> [a b c d  ]

### Removing ranges

    list.splice(2, 2)  //=> [    c d  ]
    list               //=> [a b     e]

### Subsets

    list.slice(0, 1)  //=> [a        ]
    list.slice(1)     //=> [  b c d e]
    list.slice(2, 1)  //=> [    c    ]

### Checking for presence

    if ([1, 2, 3].indexOf(2) > -1)

Types
-----

### Primitives

    Number
    Array
    Boolean
    Date
    String
    RegExp

### Booleans

    true
    false

### Null

    null
    undefined

### Type checking

    if (typeof obj === 'string')
    // also: object, function, undefined

    if (Array.isArray(obj))

### Casting

    parseInt("10")
    parseFloat("3.14")
    String(obj)
    Number(obj)

Conditionals
------------

### If-then-else

    if (a === b) {
      // ...
    } else if (b !== c) {
      // ...
    } else {
      // ...
    }

### Switch-case

    switch (day) {
      case "Monday":
        work();
        break;

      case "Tuesday":
      case "Wednesday":
        train();
        break;

      default:
        sleep();
    }

### And-or

    if (a && b)
    if (c || d)

Numbers
-------

### Rounding off

    parseInt(2.5)       //=> 2
    Math.floor(2.5)     //=> 2
    Math.ceil(2.5)      //=> 3
    Math.round(2.5)     //=> 3
    (3.141).toFixed(2)  //=> 3.14

### Minimum and maximum

    Math.min(2, 4)   //=> 2
    Math.max(2, 4)   //=> 4

### Exponents

    Math.pow(2, 8)   //=> 256

### Trigonometry

    Math.sin(theta)
    Math.PI

Strings
-------

### Literals

    "hello"
    'world'

### Formatting

    var format = require('util').format;
    format("Hello, %s from %s", name, city);

[format](http://nodejs.org/api/util.html#util_util_format_format) is only available on Node.js.

### Length

    "Hello".length

### Substring

    "Hi world".substr(0, 2)  // "Hi"
    "Hi world".substr(3)     // "world"
    "Hi world".substr(3, 2)  // "wo"

### Search

    "Hi".indexOf("i")  // 4
    "Hi".indexOf("x")  // -1

### Case

    "Hello".toUpperCase()
    "Hello".toLowerCase()

### Replace

    "Hi".replace(/i/g, "ello")  // "Hello"

Dictionaries
-----------

### Type

    Object

### Literals

    colors = {
      apple: "red",
      grape: "purple"
    };

### Access

    colors["banana"] = "yellow";
    colors.banana = "yellow";

### List keys

    Object.keys(colors)

### Iterating

    for (var key in colors) {
      if (colors.hasOwnProperty(key)) {
        var val = colors[key];
        // ...
      }
    }

Be sure to always check
[hasOwnProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty).

String representation
---------------------

### Getting

    obj.toString()
    "" + obj
    String(obj)

Iterables
---------

### Iterating

    list.forEach(function(item) {
      // ...
    });

### Foreach loops

    for (var i = 0, len = list.length; i < len; i++) {
      var item = list[i];
      // ...
    }

### Map

    list.map(function(item) {
      return use(item);
    });

### Reduce

    list.reduce(function(result, item) {
      result += item;
      return result;
    });

Printing
--------

### Printing

    console.log("hello");
    process.stdout.write("hello\n"); // Node

### Error output

    console.warn("oh no");
    process.stderr.write("oh no\n"); // Node

File API
--------

### Require

    var fs = require('fs');

### Reading

    d = fs.readFileSync('file.txt', 'utf-8')

    // Asynchronous:
    fs.readFile('file.txt', 'utf-8',
      function(err, data) { /* ... */ });

### Writing

    fs.writeFileSync('file.txt', 'utf-8', data);

    // Asynchronous:
    fs.writeFile('file.txt', 'utf-8', data,
      function(err) { /* ... */ });