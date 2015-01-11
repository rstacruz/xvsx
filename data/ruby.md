Ruby
====

* Bundle: programming

Functions
---------

### Defining functions

    def greet(hi, name)
      puts "#{hi}, #{name}"
    end

### Invoking

    greet "Hello", "John"
    greet("Hello", "John")

### Returning values

    def square(n)
      return n * n
    end

### Implicit returns
   
    def square(n)
      n * n
    end

The last statement's value is always returned.

### Implicit returns (2)
   
    def divide(a, b)
      if b == 0
        raise "Divide by 0"
      else
        a / b
      end
    end

### Anonymous functions

    add_one = -> (n) { n + 1 }
    add_one = lambda { |n| n + 1 }  # Ruby 1.8-

    add_one.call(20)
    add_one[20]

### Default values

    def greet(name = 'Larry')

### Splat

    def greet(hi, *names)
      # names == ['Moe', 'Curly']
    end

Variables
---------

### Local variables

    myvar = 1

### Global variables

See: [Global variables](http://www.rubyist.net/~slagell/ruby/globalvars.html).

    $gvar = 1

### Safe assignment

    myvar ||= 1

### Instance variables

    @var

### Class variables

    @@var

Classes
-------

### Defining classes

    class Shape
      def area
        width * height
      end
    end

### Basic instanciation

    instance = Shape.new

### Constructors

    class Shape
      def initialize
        # code here
      end
    end

### Attributes

    class Shape
      attr_accessor :width
      attr_accessor :height

      def set_dimensions(width, height)
        self.width = width
        self.height = height
      end
    end

See: [Accessors](http://www.rubyist.net/~slagell/ruby/accessors.html). Also: `attr_reader` and `attr_writer`.

### Inheritance

    class Rectangle < Shape
      def initialize
        super
        # other stuff here
      end
    end

### Type checking

    if instance.is_a?(ClassName)
    if instance.kind_of?(ClassName)

Methods
-------

### Defining

    class MyClass
      def method
        # ...
      end
    end

### Static methods

    class MyClass
      def self.method
        # ...
      end
    end

    MyClass.method

### Running a method with an arbitrary name

    obj.send :method_name, arg1, arg2

Singletons
----------

### Singleton pattern

    module AppConfig
      extend self

      def read
        # ...
      end
    end

    AppConfig.read

See: [extend self](http://stackoverflow.com/questions/3358047/ruby-modules-and-extend-self)

Arrays
------

### Initializing

    list = []
    list = ["a", "b", "c", "d", "e"]

Assume all examples start with this.

### Accessing

    list[0]  # "a"

### Shorthand

    %w[red blue]  # [ "red", "blue" ]
    %I[red blue]  # [ :red, :blue ]

### Length

    list.size

    list.empty?
    list.any?

### Adding items

    list <<  X       # [_, _, _, _, _, X]
    list.unshift X   # [X, _, _, _, _, _]
    list[2..0] = X   # [_, _, X, _, _, _]

### Removing items

    # last
    list.pop     # e
    list         # [a, b, c, d]

    # first
    list.shift   # a
    list         # [b, c, d, e]

### Subsets

    list[0...1]  # [a]
    list[1..-1]  # [b, c, d, e]
    list[3...4]  # [c]

### Subsets (destructive)

    re = list.slice!(3...4)
    # re   = [c]
    # list = [a, b, d, e]

### Checking for presence

    if [1, 2, 3].include?(2)

Types
-----

### Primitives

    Fixnum
    Bignum
    String
    Integer
    Time
    RegExp
    Symbol

### Booleans

    true
    false

### Null

    nil

### Type checking

    if obj.is_a? Fixnum

### Casting

    obj.to_s
    obj.to_i
    obj.to_f

Conditionals
------------

### If-then-else

    if a == b
      # ...
    elsif b != c
      # ...
    else
      # ...
    end

### Negative

    unless list.empty?
      # ...
    end

### Postfix syntax

    return if a == b

### Switch-case

    case day
      when "Monday"
        work
      when "Tuesday"
      when "Wednesday"
        train
      else
        sleep
    end

### And-or

    if a && b
    if c || d

Numbers
-------

### Rounding off

    (2.5).to_i    # 2
    (2.5).floor   # 2
    (2.5).ceil    # 3
    (2.5).round   # 3

### Minimum and maximum

    [2, 4].min   # 2
    [2, 4].max   # 4

### Exponents

    2**8   # 256

### Trigonometry

    Math.sin(theta)
    Math::PI

Strings
-------

### Literals

    "hello"
    'world'
    %[hello]

### Symbols

    :hello

### Interpolation

    "Hello, #{name}"

### Formatting

    "Hello, %s from %s" % [ name, city ]

### Length

    "Hello".size

### Substring

    "Hi world"[0...2]  # "Hi"
    "Hi world"[3..-1]  # "world"
    "Hi world"[3..5]   # "wo"

### Search

    "Hi".index("o")  # 4
    "Hi".index("x")  # nil

    "Hello".include?("llo")  # true
    "Hello" =~ /llo/         # true

### Case

    "Hello".upcase
    "Hello".downcase

### Replace

    "Hi".gsub(/o/, "ello")  # replace all
    str.gsub!(/o/, "ello")  # in place

Hash tables
-----------

### Type

    Hash

See: [Hash](http://www.ruby-doc.org/core-2.2.0/Hash.html).

### Literals

    colors = {
      apple: "red",
      grape: "purple"
    }

### String keys

    colors = {
      "apple" => "red",
      "grape" => "purple"
    }

### Access

    colors[:banana] = "yellow"

### List keys

    colors.keys

### List values

    colors.values

### Iterating

    colors.each do |key, val|
      # ...
    end

See: [Hash#each](http://www.ruby-doc.org/core-2.2.0/Hash.html#method-i-each)

Iterables
---------

### Iterating

    list.each do |item|
      # ...
    end

### Map

    list.map do |item|
      expr(item)
    end

### Reduce

    list.inject do |acc, item|
      acc += item
      acc
    list

String representation
---------------------

### Getting

    obj.to_s
    obj.inspect

### Overriding

    def to_s
    def inspect

Printing
--------

### Printing

    puts "hello"
    $stdout << "hello\n"

## Error output

    $stderr << "oh no\n"

File API
--------

### Reading

    d = File.read('file.txt')

### Writing

    File.write('file.txt', data)
    File.write('file.txt') { data }