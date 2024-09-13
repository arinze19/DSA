### Happy Numbers

A happy number is defined by the following process. Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers.


### Input 
Your program should read lines of text from standard input. Each line contains a single positive integer, `n`.

### Output
If the number is a happy number, print `1` to standard output. Otherwise, print `0`.

### Example
For the curious, here's why `7` is a happy number: `7 -> 49 -> 16 -> 37 -> 58 -> 89 -> 145 -> 42 -> 20 -> 4 -> 16 -> 37` and at this point you've visited this number before, so the process ends.

