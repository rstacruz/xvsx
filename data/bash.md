Bash
====

* Bundle: programming
* Highlight: bash

Functions
---------

### Defining functions

    greet () {
      local hi=$1
      local name=$2
      echo "${hi}, ${name}"
    }

### Invoking

    greet "Hello" "John Watson"

### Returning values

    square () {
      result=$(echo "${n} * ${n}" | bc)
      echo result
    }


Variables
---------

### Local variables

    local myvar="1"

Only works inside functions.

### Global variables

    myvar="1"

### Assignment

    myvar="1"

Arrays
------

### Initializing

    declare -a list=('a' 'b' 'c')

### Assigning

    list[0]="a"

### Accessing

    ${list[0]}  #=> "a"

### Length

    ${#list[@]}

### Iteration

    for i in "${list[@]}"; do
      echo $i
    done

Types
-----

### Primitives

    String

Everything is a string.

### Booleans

    "1"
    "0"

Since everything is a string, `"1"` and `"0"` are conventionally used for true/false.

Conditionals
------------

### If-then-else

    if [[ "$a" == "$b" ]]; then
      # ...
    elif [[ "$b" != "$c" ]]; then
      # ...
    else
      # ...
    fi

### Equality

    [[ "2" == "2" ]]  #=> true
    [[ "2" != "2" ]]  #=> false

### Switch-case

    case "$day" in
      Monday)
        work
        ;;

      Tuesday | Wednesday)
        train
        ;;

      *)
        sleep
        ;;
    esac

Strings
-------

### Literals

    "hello"
    'world'

### Interpolation

    "Hello, ${name}"

### Formatting

    printf "Hello, %s from %s" "$name" "$city"

### Length

    `echo $string | wc -c`

### Case

    $(echo $string | awk '{print toupper($0)}')
    $(echo $string | awk '{print tolower($0)}')

Printing
--------

### Printing

    echo "hello"

### Error output

    echo "hello" 2>&1
