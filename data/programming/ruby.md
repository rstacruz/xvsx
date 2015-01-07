Variables
---------

### Local variables

    myvar = 1

### Global variables

See: [Global variables](http://www.rubyist.net/~slagell/ruby/globalvars.html).

    $gvar = 1

### Safe assignment

    myvar ||= 1

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

### Initializing (empty)

    list = []

### Initializing (with contents)

    list = ["a", "b", "c"]

### Shorthand

    %w[red blue]  # [ "red", "blue" ]
    %I[red blue]  # [ :red, :blue ]

### Length

    list.size

    list.empty?
    list.any?

### Adding items

    list << "d"
    # ["a", "b", "c", "d"]

    list.unshift "X"
    # ["X", "a", "b", "c", "d"]

### Removing items

    # last
    list.pop     # "d"
    list         # ["X", "a", "b", "c"]

    # first
    list.shift   # "X"
    list         # ["a", "b", "c"]

### Checking for presence of items

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

### Length

    "Hello".size

### Substring

    "Hi world"[0...2]  # "Hi"
    "Hi world"[6..-1]  # "world"
    "Hi world"[3..5]   # "wo"

### Search

    "Hello".index("o")  # 4
    "Hello".index("x")  # nil

    "Hello".include?("llo")  # true
    "Hello" =~ /llo/         # true

### Case

    "Hello".upcase
    "Hello".downcase

### Replace

    "Hello".gsub(/o/, "a")     # replace all
    striing.gsub!(/o/, "a")    # in place

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

File API
--------

### Reading

    d = File.read('file.txt')

### Writing

    File.write('file.txt', data)
    File.write('file.txt') { data }
