JavaScript
==========

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

```js
instance = new Shape();
```

### Attributes

    function Shape() {
    }

    Shape.prototype.setDimensions = function(width, height) {
      this.width = width;
      this.height = height;
    };
