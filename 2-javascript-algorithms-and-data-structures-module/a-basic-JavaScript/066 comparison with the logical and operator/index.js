/*Sometimes you will need to test more than one thing at a time. 
The _logical and_ operator (`&&`) returns `true` if and only if 
the _operands_ to the left and right of it are true.

The same effect could be achieved by nesting an if statement inside another if:
```javascript
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
```
will only return "Yes" if `num` is greater than `5` and less than `10`. 
The same logic can be written as:

```javascript
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```
Combine the two `if` statements into one statement which will return
 `"Yes"` if `val` is less than or equal to `50` and greater than or equal
  to `25`. Otherwise, will return `"No"`.*/

function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
  
    // Only change code above this line
    return "No";
  }
  
  // Change this value to test
  testLogicalAnd(10);