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

**Type Conversions**
