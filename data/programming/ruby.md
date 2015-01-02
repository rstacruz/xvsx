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

    list.pop     #=> "d" (last item)
    list         #=> ["X", "a", "b", "c"]

    list.shift   #=> "X" (first item)
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
