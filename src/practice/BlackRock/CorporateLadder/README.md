### Coroprate Ladder 

A company wants to track change in their organization by knowing how many levels exist between any two employees. This number will help them know who is being promoted and who is not. 
For Example:
If Susan reports to John and John reports to Amy. Then there are 2 levels between Susan and Amy.

Write a program that will count how many levels exist between any two names in a hierarchy of employees. The program must read a list of name pairs that represent an employee and their manager. 

**HINT:** The two names to compare may be in different parts of the organiztional tree and not have a direct managerial line.

### INPUT
The first line will be the pair of names to compare.
All subsequent lines will be employee/manager pairs. The company's comlete hierarchy will be inducted so no incomplete trees will exist. 

For Example:

```
Susan/Amy
Susan/John
John/Amy
```

### OUTPUT
The number of levels between the pair requested, including the top manager's level. In the example above, the output would be `2`.