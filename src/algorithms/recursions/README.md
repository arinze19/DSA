# Recursions

Recursion is a sequence initiated when a function calls itself. I like to imagine it as a russion doll being opened up to find yet another smaller doll. Recursions are heavily used in the implementation of various algorithms like binary search and quick sort.

The computer allocates a space in memory for variables each time a recursive context/function is initiated.

Because a recursive function calls itself so much, it's quite easy to create a recursive function that enters an infinite loop like so

```javascript
function countdown(num) {
  console.log(num - 1);
}

countdown(5); // 5, 4, 3, 2, 1, 0, -1, -2, .....
```

Which is why every good recursive function must have two parts: the `base-case` and the `recursive-case` with the `base-case` signalling the end of the recursive function call.
