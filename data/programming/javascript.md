Variables
---------

### Local variables

Use `var` to define local variables.

    var myvar = 1;
    myvar

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

Arrays
------

### Initializing (empty)

    list = [];

### Initializing (with contents)

    list = ["a", "b", "c"];

### Length

    list.length //=> 3

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
