Variables
---------

### Local variables

    var myvar = 1;

### Global variables

The global context is in `window` (browser) or `global` (Node.js).

    window.gvar = 1;

Classes
-------

### Defining classes

JavaScript doesn't have classes, it has prototypes.

    function Shape() {
    }

    Shape.prototype.area = function () {
      return this.width * this.height;
    };

### Basic instanciation

    instance = new Shape();

### Constructors

    function Shape() {
      // code here
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
      // other stuff here
    }

    Rectangle.prototype =
      Object.create(Shape.prototype);

### Type checking

    if (obj instanceof ClassName)

Singletons
----------

### Singleton pattern

    var AppConfig = {
      read: function() {
        # ...
      }
    };

    AppConfig.read();

Arrays
------

### Initializing (empty)

    list = [];

### Initializing (with contents)

    list = ["a", "b", "c"];

### Length

    list.length

### Adding items

    list.push("d");
    // ["a", "b", "c", "d"]

    list.unshift("X");
    // ["X", "a", "b", "c", "d"]

### Removing items

    // last
    list.pop()    //=> "d"
    list          //=> ["X", "a", "b", "c"]

    // first
    list.shift()  //=> "X"
    list          //=> ["a", "b", "c"]

### Checking for presence of items

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
        break();

      default:
        sleep();
    }

### And-or

    if (a && b)
    if (c || d)

Numbers
-------

### Rounding off

    parseInt(2.5)       // 2
    Math.floor(2.5)     // 2
    Math.ceil(2.5)      // 3
    Math.round(2.5)     // 3
    (3.141).toFixed(2)  // 3.14

### Minimum and maximum

    Math.min(2, 4)   // 2
    Math.max(2, 4)   // 4

### Exponents

    Math.pow(2, 8)   // 256

### Trigonometry

    Math.sin(theta)
    Math.PI

Strings
-------

### Literals

    "hello"
    'world'

### Length

    "Hello".length

### Substring

    "Hi world".substr(0, 2)  // "Hi"
    "Hi world".substr(6)     // "world"
    "Hi world".substr(3, 2)  // "wo"

### Search

    "Hello".indexOf("o")  // 4
    "Hello".indexOf("x")  // -1

### Case

    "Hello".toUpperCase()
    "Hello".toLowerCase()

### Replace

    "Hello".replace(/o/g, "a")  // "Hella"

Hash tables
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
