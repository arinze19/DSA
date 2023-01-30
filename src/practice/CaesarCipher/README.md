# Caesar Cipher

Write a caesar cipher program.
Given a non-empty string of lowercase letters and non-negative
integer representing a key, write a function that returns a
new string obtained by shifting every letter in the input string by k
positions in the alphabet, where k is the key

Note that letters should wrap around the alphabet; In other words
the letter z shifted by 1 would end up being a

**Sample Input**

```javascript
const input = 'xyz';
const shifts = 2;
```

**Sample Output**

```javascript
'zab';
```

**Runtime & Space Complexity**

```
O(n)
```
