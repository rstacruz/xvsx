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
      return this;
    }

    Shape.prototype.area = function () {
      return this.width * this.height;
    };

### Basic instanciation

    instance = new Shape();

### Attributes

    function Shape() {
    }

    Shape.prototype.setDimensions = function(width, height) {
      this.width = width;
      this.height = height;
    };

Arrays
------

### Initializing (empty)

    list = [];

### Initializing (with contents)

    list = ["a", "b", "c"];

### Length

    list.length      //=> 3

### Adding items

    list.push("d");
    // list == ["a", "b", "c", "d"]

    list.unshift("X");
    // list == ["X", "a", "b", "c", "d"]

### Removing items

    list.pop()    //=> "d" (last item)
    // list == ["X", "a", "b", "c"]

    list.shift()  //=> "X" (first item)
    // list == ["a", "b", "c"]

### Checking for presence of items

    if ([1, 2, 3].indexOf(2) > -1) { ... }
