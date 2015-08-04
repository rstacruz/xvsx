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
    addOne(20)

### Splat

    greet = (hi, names...) ->

    greet 'hi', 'Moe', 'Curly'
    #=> names == ['Moe', 'Curly']
