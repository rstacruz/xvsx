Python
======

* Bundle: programming

Functions
---------

### Defining functions

    def greet(hi, name):
      print "%s, %s" % ( hi, name )

### Invoking

    greet("Hello", "John")

### Returning values

    def square(n):
      return n * n

### Anonymous functions

    add_one = lambda n: n + 1
    add_one(20)

### Default values

    def greet(name = 'Larry'):

### Splat

    def greet(hi, *names):
      # ...

    greet('hi', 'Moe', 'Curly')
    # names == ['Moe', 'Curly']

### Keyword arguments

    def greet(**kwargs):
      # ...

    greet(name="Moe", time="now")

Variables
---------

### Local variables

    myvar = 1

Classes
-------

### Defining classes

    class Shape:
      def get_area(self):
        return width * height

### Basic instanciation

    instance = Shape.new

### Constructors

    class Shape:
      def __init__(self):
        # code here

### Attributes

    class Shape:
      def set_dimensions(self, width, height):
        self.width = width
        self.height = height

### Inheritance

    class Rectangle(Shape):
      def __init__(self):
        super
        # other stuff here

Methods
-------

### Defining

    class MyClass:
      def method(self):
        # ...

`self` is a reference to the instance.

### Class methods

    class MyClass:
      @classmethod
      def method(cls):
        # ...

### Running a method with an arbitrary name

    getattr(obj, 'method_name')(arg1, arg2)

Arrays
------

### Initializing

    list = []
    list = ["a", "b", "c", "d", "e"]

Assume all examples start with this.

### Accessing

    list[0]  # "a"

