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
      def initialize(width, height)
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
    list                #=> ["a", "b", "c", "d"]

    list.unshift "X"
    list                #=> ["X", "a", "b", "c", "d"]

### Removing items

    list.pop      #=> "d" (last item)
    list          #=> ["X", "a", "b", "c"]

    list.shift    #=> "X" (first item)
    list          #=> ["a", "b", "c"]

### Checking for presence of items

    if [1, 2, 3].include?(2)
