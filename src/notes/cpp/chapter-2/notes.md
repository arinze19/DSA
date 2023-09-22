# Chapter Two: Introduction to C++

## Parts of a C++ program

1. The #include directive causes the preprocessor to include the contents of another file in the program (The word inside the brackets, example `<iostream>`, is the name of the file that is to be included). This is called a header file and is included at the very top of the file
2. `int main()` this sends a value back to the operating system once the program has finished running
3. You can think of the funtions `cout` and `cin` as meaning `console out` and `console in` respectively
4. `cout` is classified as a stream object which means it works with streams of data

```cpp
cout << "Programming is great fun!"
cout << "Programming is " << "great fun!"
```

> when the symbol `<<` is used with `cout` it is called the **stream insertion operator**. \
> The stream operator can be used to send in more than one piece of data at a time

**Stream Manipulators**:
In C++, a stream manipulator, also known as a stream manipulator function or just manipulator, is a function that modifies the behavior of input or output streams. These manipulators are used with stream objects like `cin` (for input) and `cout` (for output) to control various formatting and configuration options.

Stream manipulators are often used with the insertion (`<<`) and extraction (`>>`) operators to modify how data is formatted during input and output operations.

Some commonly used stream manipulators in C++ include:

1. **`std::endl`:** Inserts a newline character (`'\n'`) into the output stream and flushes the stream. It is often used to end a line of output.

   ```cpp
   std::cout << "Hello, World!" << std::endl;
   ```

2. **`std::setw(int width)`:** Sets the minimum field width for the next output value. It is often used to align output in columns.

   ```cpp
   #include <iomanip>
   std::cout << std::setw(10) << "Name" << std::setw(5) << "Age" << std::endl;
   ```

3. **`std::fixed` and `std::setprecision(int precision)`:** Used to control the formatting of floating-point numbers. `std::fixed` ensures that floating-point numbers are displayed in fixed-point notation, and `std::setprecision` sets the number of decimal places to display.

   ```cpp
   #include <iomanip>
   double value = 123.456789;
   std::cout << std::fixed << std::setprecision(2) << value << std::endl;
   ```

4. **`std::boolalpha`:** Controls the formatting of Boolean values. When used, it displays `true` or `false` instead of numeric values.

   ```cpp
   bool isTrue = true;
   std::cout << std::boolalpha << isTrue << std::endl;
   ```

These stream manipulators, among others, provide flexibility in controlling the appearance and behavior of data when reading from or writing to streams. They are part of the `<iostream>` and `<iomanip>` standard library headers in C++ and are often used to format input and output for various purposes, such as user interfaces and data file handling.

**Variables and Literals**:

1. Literals are pieces of data that are written into a program's code

**Data Types**:

1. **Numeric**
   - Integer -> this stores whole numbers
   - Floating Point -> this stores numbers with decimal points

| Type               | Size (bytes) | Range                                                   |
| ------------------ | ------------ | ------------------------------------------------------- |
| short              | 2            | -32,768 to 32,767                                       |
| int                | 4            | -2,147,483,648 to 2,147,483,647                         |
| long               | 4            | -2,147,483,648 to 2,147,483,647                         |
| long long          | 8            | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| unsigned short     | 2            | 0 to 65,535                                             |
| unsigned int       | 4            | 0 to 4,294,967,295                                      |
| unsigned long      | 4            | 0 to 4,294,967,295                                      |
| unsigned long long | 8            | 0 to 18,446,744,073,709,551,615                         |
| float              | 4            | 3.4E +/- 38 (7 digits)                                  |
| double             | 8            | 1.7E +/- 308 (15 digits)                                |
| long double        | 8            | 1.7E +/- 308 (15 digits)                                |

2. **Character**
   - this can store only one character at a time

- characters should be declared using single quotes

```cpp
char letter = 'g' // correct
char letter = "g" // incorrect
```

Although the char data type is used for storing characters, it is actually an integer data type that typically uses 1 byte of memory. (The size is system dependent. On some systems, the char data type is larger than 1 byte.)

In C++ an extra byte is appended to the end of string literals when they are stored in memory. In this last byte, the number 0 is stored. It is called the null terminator or null character, and it marks the end of the string.
