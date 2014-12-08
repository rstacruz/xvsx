# Ruby

## Variables

### Local variables

```rb
myvar = 1
myvar
```

### Global variables

Global variables are prefixed with `$`.

[Read](http://www.rubyist.net/~slagell/ruby/globalvars.html)

```rb
$gvar = 1
```

## Classes

### Defining classes

```rb
class Shape
  def area
    width * height
  end
end
```

### Basic instanciation

```rb
instance = Shape.new
```

### Constructors

```rb
class Shape
  def initialize(width, height)
  end
```

### Attributes

```rb
class Shape
  attr_accessor :width
  attr_accessor :height

  def set_dimensions(width, height)
    self.width = width
    self.height = height
  end
```

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
