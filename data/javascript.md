JavaScript (ES2015)
===================

* Bundle: programming
* Highlight: javascript

Functions
---------

### Defining functions

    function greet(hi, name) {
      console.log(`#{hi}, ${name}`);
    }

### Invoking

    greet('Hello', 'John');

### Returning values

    function square(n) {
      return n * n;
    }

### Anonymous functions

    var addOne = function(n) { return n + 1; }
    addOne(20);

### Splat

    function greet (hi, ...names) {
      //=> names == ['Moe', 'Curly']
    }

    greet('hi', 'Moe', 'Curly');

Variables
---------

### Local variables

    var myvar = 1;
    // ---
    let myvar = 1;
    const myvar = 1;

See: [Block scoping](http://babeljs.io/docs/learn-es2015/#let-const).

### Global variables

    window.gvar = 1;

The global context is in `window` (browser) or `global` (Node.js).

### Assignment

    myvar = 1;

This assumes `myvar` was declared using `var`.

Destructuring
-------------

### Assignments

    let [first, last] = ['Nikola', 'Tesla'];
    let {title, artist} = { title: 'Help', artist: 'Beatles' };

### Spreading

    let [ first, ...rest, last ] = list;

### Loops

    for (let {title, artist} in songs) {
    }

### Functions

    function greet({ name, greeting }) {
      // ...
    }

    greet({ name: 'Larry', greeting: 'Ahoy' });

Classes
-------

### Defining classes

    class Shape {
      area () {
        return this.width * this.height;
      }
    }

### Basic instanciation

    instance = new Shape();

### Constructors

    class Shape {
      constructor () {
        // ...
      }
    }

### Attributes

    class Shape {
      setDimensions (width, height) {
        this.width = width;
        this.height = height;
      }
    }

### Setter/Getter

    class Shape {
      get circumference () {
        return this.radius * Math.PI * 2
      }

      set circumference (value) {
        this.radius = value / (Math.PI * 2)
        return value
      }
    }

### Inheritance

    class Rectangle extends Shape {
      // ...
    }

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

    obj['method_name'](arg1, arg2);

Singletons
----------

### Singleton pattern

    var AppConfig = {
      read: function () {
        // ...
      }
    };

    AppConfig.read();

Arrays
------

### Initializing

    list = [];
    list = ['a', 'b', 'c', 'd', 'e'];

### Assigning

    list[0] = 'a';

### Accessing

    list[0]  //=> 'a'

### Length

    list.length

### Adding items

    list.unshift(X);       //=> [X _ _ _ _]
    list.splice(2, 0, X);  //=> [_ _ X _ _]
    list.push(X);          //=> [_ _ _ _ X]

### Removing items

    //! First:
    list.shift()      //=>  a
    list              //=> [  b c d e]
    // ---
    //! Middle:
    list.splice(2,1)  //=> [    c    ]
    list              //=> [a b   d e]
    // ---
    //! Last:
    list.pop()        //=>          e
    list              //=> [a b c d  ]

### Removing ranges

    list.splice(2, 2)  //=> [    c d  ]
    list               //=> [a b     e]

### Subsets

    list.slice(0, 1)  //=> [a        ]
    list.slice(1)     //=> [  b c d e]
    list.slice(2, 1)  //=> [    c    ]

### Finding index

    list = [ a, b, c, d, a ];
    list.indexOf(a)      //=> 0
    list.lastIndexOf(a)  //=> 4 (IE9+)

### Checking for presence

    if ([1, 2, 3].indexOf(2) > -1)

### Filtering

    users.filter((user) => user.age > 18) //! IE9+

### Iteration

    list.forEach((item) => {
      console.log(item);
    });

Types
-----

### Primitives

    23                    // Number
    23.0                  // Number
    [ 1, 2, 3]            // Array
    true, false           // Boolean
    new Date(2015, 1, 1)  // Date
    'hello'               // String
    {name: 'John'}        // Object
    /^abc/                // RegExp
    function () {}        // Function

### Booleans

    true
    false

### Null

    null //! (a non-value)
    undefined //! (a value is not present)

### Type checking

    if (typeof obj === 'string')
    //! also: object, function, undefined

    if (Array.isArray(obj))

### Casting

    parseInt('10')
    parseFloat('3.14')
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

### Equality

    '2' == 2   //=> true
    '2' === 2  //=> false
    // ---
    '2' != 2   //=> false
    '2' !== 2  //=> true

### Switch-case

    switch (day) {
      case 'Monday':
        work();
        break;

      case 'Tuesday':
      case 'Wednesday':
        train();
        break;

      default:
        sleep();
    }

### And-or

    if (a && b)
    if (c || d)

### Ternary

    name == 'john' ? 'yes' : 'no'

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
    `mundo`

### Interpolation

    `Hello, ${name}`

### Concatenation

    'Hello, ' + name

### Formatting

    var format = require('util').format;
    format('Hello, %s from %s', name, city);

[format](http://nodejs.org/api/util.html#util_util_format_format) is only available on Node.js.

### Length

    'Hello'.length

### Substring

    'Hi world'.substr(0, 2)  //=> 'Hi'
    'Hi world'.substr(3)     //=> 'world'
    'Hi world'.substr(3, 2)  //=> 'wo'

### Search

    'Hi'.indexOf('i')  //=> 4
    'Hi'.indexOf('x')  //=> -1

### Case

    'Hello'.toUpperCase()
    'Hello'.toLowerCase()

### Replace

    'Hi'.replace('i', 'ello')   //! (string)
    'Hi'.replace(/i/, 'ello')   //! (regex)
    'Hi'.replace(/i/g, 'ello')  //! (replace all)

### Advanced replace

    str.replace(/age: (\d+)/g, (_, n) => `edad: ${n}`)
    //! Changes `'age: 12'` to `'edad: 12'`

Dictionaries
-----------

### Type

    Object

### Literals

    colors = {
      apple: 'red',
      grape: 'purple'
    };

### Access

    colors['banana']
    colors.banana

### Setting

    colors['banana'] = 'yellow';
    colors.banana = 'yellow';

### List keys

    Object.keys(colors)

### Shorthand

    exports = { read, write };
    //! Same as `{ read: read, write: write }`

### Computed property names

    result = {
      [ 'prop_' + n ]: 42
    }

### Functions

    obj = {
      hide () {
        this.hidden = true;
      }
    };
    // ---
    //! `hide() { ... }` is the same as `hide: function () { ... }`.

### Setters and getters

    obj = {
      get hidden () {
        return this.visibliity === 'hidden';
      }
      set hidden (val) {
        this.visibility = val ? 'hidden' : 'visible';
      }
    }

### Iterating

    for (var key in colors) {
      if (colors.hasOwnProperty(key)) {
        var val = colors[key];
        // ...
      }
    }

Be sure to always check
[hasOwnProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty).

Modules
-------

### Importing

    import Express from 'express';

### Importing a symbol

    import { Router } from 'express';

### Importing a symbol as an alias

    import { Router as ExRouter } from 'express';

### Exporting

    export default function () { /* ... */ };

### Exporting symbols

    export item = function () { /* ... */ };

String representation
---------------------

### Getting

    obj.toString()
    '' + obj
    String(obj)

Iterables
---------

### Iterating

    list.forEach(function (item) {
      // doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
      // ...
    });
    // ---
    list.every(/* ... */);
    list.some(/* ... */);

### Foreach loops

    for (var i = 0, len = list.length; i < len; i++) {
      var item = list[i];
      // ...
    }

### Map

    list.map(function (item) {
      return use(item);
    });

### Reduce

    list.reduce(function (result, item) {
      result += item;
      return result;
    });

Printing
--------

### Printing

    console.log('hello');
    process.stdout.write('hello\n'); //! Node.js

### Error output

    console.error('oh no');
    process.stderr.write('oh no\n'); //! Node.js

File API
--------

### Require

    var fs = require('fs');

### Reading

    d = fs.readFileSync('file.txt', 'utf-8');
    // ---
    //! Asynchronous:
    fs.readFile('file.txt', 'utf-8',
      function (err, data) { /* ... */ });

### Writing

    fs.writeFileSync('file.txt', 'utf-8', data);
    // ---
    //! Asynchronous:
    fs.writeFile('file.txt', 'utf-8', data,
      function (err) { /* ... */ });
