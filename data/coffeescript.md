CoffeeScript
============

* Bundle: programming

Functions
---------

### Defining functions

    greet = (hi, name) ->
      console.log "#{hi}, #{name}"

### Invoking

    greet "Hello", "John"
    greet("Hello", "John")

### Returning values

    square = (n) ->
      return n * n

### Implicit returns
   
    square = (n) ->
      n * n

The last statement's value is always returned.

### Anonymous functions

    addOne = (n) -> n + 1
    # ---
    addOne(20)

### Splat

    greet = (hi, names...) ->
      #=> names == ['Moe', 'Curly']

    greet 'hi', 'Moe', 'Curly'

Methods
-------

### Defining

    MyClass::method = ->
      # ...

### Class methods

    MyClass.method = ->
      # ...

    MyClass.method()

### Running a method with an arbitrary name

    obj['method_name'](arg1, arg2)

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

    true, on
    false, off

### Null

    null
    undefined

Conditionals
------------

### If-then-else

    if a == b
      # ...
    else if b != c
      # ...
    else
      # ...

### Equality

    '2' == 2   #=> false
    '2' is 2
    # ---
    '2' != 2   #=> false
    '2' isnt 2

The `==` and `!=` operators are equivalent to JavaScript's `===` and `!==` respectively.
