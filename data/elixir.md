Elixir
======

* Bundle: programming
* Highlight: elixir

Functions
---------

### Defining functions

    defmodule Greeter do
      def greet(hi, name) do
        IO.puts "#{hi}, #{name}"
      end
    end

### Invoking

    Greeter.greet("Hello", "John")
    Greeter.greet "Hello", "John"  # parens optional

### Returning values

    def square(n) do
      n * n
    end

Returns are always implicit (last statement returns)

### Anonymous functions

    addOne = (fn n -> n + 1; end)
    addOne.(20)

    addOne = &(&1 + 1)  # &1 is the first argument
    addOne.(20)

    add = &+/2
    add.(2, 3)

Variables
---------

### Local variables

    myvar = 1

Actually the *pattern matching operator*.

### Assignment

    myvar = 1

Destructuring
-------------

### Assignments

    {first, last} = {"Nikola", "Tesla"}

### Spreading

    [ head | tail ] = [1, 2, 3, 4]
    head  #=> 1
    tail  #=> [2, 3, 4]

Types
-----

### Primitives

    :atom        # atom
    "bitstring"  # bitstring
    true, false  # boolean
    fn x -> end  # function
    23           # integer (number)
    23.0         # float (number)

    <<1,2>>          # binary
    [1,2]            # list
    %{name: "John"}  # map
    {:a, :b}         # tuple

    nil      # is_nil

### Booleans

    true
    false

### Null

    nil

### Type checking

    is_atom/1
    is_bitstring/1
    is_boolean/1
    is_function/1
    is_function/2
    is_integer/1
    is_float/1

    is_binary/1
    is_list/1
    is_map/1
    is_tuple/1

    is_nil/1
    is_number/1
    is_pid/1
    is_port/1
    is_reference/1

Conditionals
------------

### If-then-else

    if a == b do
      # ...
    else
      # ...
    end

There's no `else if`. Use Conditions (`cond do`).

### Conditions

    cond do
      2 + 2 == 5 ->
        "not true"
      1 + 1 == 3 ->
        "also not true"
      true ->
        "default value"
    end

This is the equivalent of `else if` clauses.

### Single-line syntax

    if true, do: 1 + 2
    if true, do: :this, else: :that

### Equality

    2 == 2     #=> true
    2 == 2.0   #=> true
    2 === 2.0  #=> false

`===` is stricter when comparing integers and floats.

### Switch-case

    case day do
      :Monday ->
        work()
      :Tuesday ->
        train()
      _ ->  # matches any value
        sleep()
    end

Uses pattern-matching.

### And-or

    if a and b do
    if c or d do
    !e

Numbers
-------

### Operations

    1 + 1
    10 - 5
    5 * 2
    11 / 2      #=> 5.5
    div(11, 2)  #=> 5
    rem(11, 2)  #=> 1

Strings
-------

### Literals

    "hola"  #=> <<?h, ?o, ?l, ?a>>
    'hola'  #=> [?h, ?o, ?l, ?a]

Double-quotes are for bitstrings (binary), single-quotes are for char lists.

### Symbols

    :hello

They are called Atoms.

### Concatenation

    "Hello, " ++ name

Dictionaries
------------

### Type

    map

### Literals

    colors = %{
      :apple => "red",
      :grape => "purple"
    }

### Access

    colors.apple

Exceptions
----------

### Try/catch

    try do
      throw(:hello)
    } catch (e) {
      puts "Caught error: #{e.message}"
    }

Modules
-------

### Importing

    import Ecto

System
------

### Environment variables

    System.get_env("DATABASE_URL")
    System.put_env("DATABASE_URL", "url")

### Arguments parsing

    System.argv
