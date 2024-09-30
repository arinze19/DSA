## Chapter 3: Expression and Interactivity

**The CIN object**

1. The `cin` object is used to read input from the keyboard.
2. The `cin` object automatically converts the user input into the required data type of the variable it streams into.
3. when the `cin` object is used to read multiple inputs, the inputs must be separated by at least a space, a tab, or a newline character.

> keyboard buffer
> The keyboard buffer is a temporary storage area in memory that holds the characters that have been typed on the keyboard but have not yet been read by the program.

**Mathematical Expressions**

1. An expression is a programming statement that has a value
2. Unlike other languguages, C++ does not have a built-in exponentiation operator. Instead, you must use the pow() function from the cmath library.
3. Multiplication (`*`), division (`/`), and modulus (`%`) have higher precedence than addition (`+`) and subtraction (`-`).
4. C++ does not have an exponent operator, instead we use the `pow()` function from the `cmath` library. (Note: values passed into the `pow()` function must be of type `double`)
5. When an operator’s operands are of different data types, C++ will automatically convert them to the same data type. This can affect the results of mathematical expressions.

- Just like officers in the military, data types are ranked. One data type outranks another if it can hold a larger number. For example, a float outranks an int. Table 3-7 lists the data types in order of their rank, from highest to lowest.

| Data Type          | Rank |
| ------------------ | ---- |
| long double        | 1    |
| double             | 2    |
| float              | 3    |
| unsigned long long | 4    |
| long long          | 5    |
| unsigned long      | 6    |
| long               | 7    |
| unsigned int       | 8    |
| int                | 9    |

When a value is converted to a higher data type, it is said to be promoted. To demote a value means to convert it to a lower data type. Let’s look at the specific rules that govern the evaluation of mathematical expressions.

rule 1: chars, shorts and unsigned shorts are promoted to int before any operation is performed
rule 2: when an operation takes place, the lower ranking value is promoted to the same as the upper ranking value
rule 3: when final value is computer, the value is then converted again to the data type it's variable was/is assigned

**Type Casting**
Type casting allows you to perform manual data type conversions. It let's you manually promote or demote a value. The general format of a type cast conversion is

```cpp
static_cast<DataType>(value)
```

**Stream Manipulators**

1. By default the system prints out floating point values with 6 significant numbers
2. std::fixed stream manipulator forces the system to print values in decimal point notation (may default to scientific notation in some cases)
