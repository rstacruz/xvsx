Variables
---------

### Local variables

```rb
myvar = 1
myvar
```

### Global variables

Global variables are prefixed with `$`. [docs](http://www.rubyist.net/~slagell/ruby/globalvars.html)

    $gvar = 1

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

Arrays
------

### Initializing (empty)

    list = Array.new

### Initializing (with contents)

    list = ["a", "b", "c"]
    arr = %w[red green blue]

### Length

    list.size      #=> 3
    list.empty?
    list.any?

### Adding items

    list << "d"
    # ["a", "b", "c", "d"]

    list.unshift "X"
    # ["X", "a", "b", "c", "d"]

### Removing items

    # last
    list.pop     #=> "d"
    list         #=> ["X", "a", "b", "c"]

    # first
    list.shift   #=> "X"
    list         #=> ["a", "b", "c"]

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

    (2.5).to_i    #=> 2
    (2.5).floor   #=> 2
    (2.5).ceil    #=> 3
    (2.5).round   #=> 3

### Minimum and maximum

    [2, 4].min   #=> 2
    [2, 4].max   #=> 4

### Exponents

    2**8   #=> 256

### Trigonometry

    Math.sin(theta)
    Math::PI
