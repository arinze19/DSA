# Chapter One: Introduction to Computers and Programming

## Computers as an orchestra of devices

A computer, as we generally think of it, is not an individual device, but a system of devices. Like the instruments in a symphony orchestra, each device plays its own part. A typical computer system consists of the following major components:

1. Central Processing Unit (CPU) - Basically the brain of the computer
   - Arithmetic and Logic Unit (ALU) - Performs arithmetic and logical operations
   - Control Unit (CU) - Controls the flow of data and instructions to and from the CPU
2. Main Memory (RAM) - The computer's short-term memory
3. Secondary Storage Devices - The computer's long-term memory
   - Magnetic Disks (Disk Drives)
   - Optical Disks (CDs, DVDs, Blu-Ray)
   - Solid-State Storage Devices (USB Flash Drives)
4. Input Devices
5. Output Devices

## Types of software

1. **System software:** Programs that control and manage the basic operations of a computer
   - Operating system
   - Utility programs: A utility program performs a specialized task that enhances the computer’s operation or safeguards data. Examples of utility programs are virus scanners, file-compression programs, and data-backup programs.
   - Development software such as compilers and interpreters are also considered system software
2. **Application software:**

## Programming languages and Programs (Software)

1. An algorithm is a set of well-defined steps for performing a task or solving a problem
2. CPU's have different machine languages, so programs written for one CPU will not run on another

**Source code, object code, and executable code**:

1. **Source code**: A program written in a high-level language
2. **Source file**: A file containing a program written in a high-level language

The journey from source code to executable code is as follows:

1. source file is executed
2. pre-processor searches for lines with a preceeding # and performs the necessary actions
3. compiler translates the source code into object code [syntax errors are detected at this stage]
4. linker combines the object code with other necessary object code to create an executable file

**KEY WORDS AND SYNTAXES OF CPP**

1. `# - preprocessor directive`: A preprocessor directive is a line in a program that begins with a # symbol. Preprocessor directives are instructions to the preprocessor, which is a program that performs preliminary operations on source code files before they are passed to the compiler.
2. `variable definition`: defined a variable

```cpp
double radius;
double rate, hours, pay;
```

> Variable definitions and variable declarations are not the same thing. A variable definition is a statement that creates a new variable and specifies its type, whereas a variable declaration is a statement that specifies the type and name of a variable that has already been defined.

**The progamming process**:
When you want to write a progam, it is essential that you follow the following framework to result in as little errors as possible:

1. Clearly define what the program is to do
2. Visualize the program running on the computer
3. Use design tools such as flow charts or pseudo-code to create a model of the program
4. Type code, save and compile
5. Correct any syntax-errors found during compilation. Repeat steps 5 and 6 as many times as necessary
6. Run the program with test data for input
7. Correct any runtime-errors found while running the program, repeat step 5 and 6 as many times as necessary
8. Validate the results of the program

**Miscellaneous**:

> The use of floppy disk drives has declined dramatically in recent years, in favor of superior devices such as USB drives. USB drives are small devices that plug into the computer’s USB (universal serial bus) port and appear to the system as a disk drive
