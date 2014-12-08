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

