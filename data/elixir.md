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

    [ first | rest ] = list
    first

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

### Conditions

    cond do
      2 + 2 == 5 ->
        "not true"
      1 + 1 == 3 ->
        "also not true"
      true ->
        "default value"
    end

This is the equivalent of if/else if clauses.

### Single-line syntax

    if true, do: 1 + 2
    if true, do: :this, else: :that

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

    colors['banana']
