//Reverse a String
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

function reverseString(str) {
  /**
   *     Reversing string using built-in functions
   */
  return str
    .split("")
    .reverse()
    .join("");

  /**
   * Reversing string using decrementing for loop
   */
  //   let newString = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     newString += str[i];
  //   }

  //   return newString;

  /**
   * Reversing string with recursion
   */
  //   if (str === "") return str;
  //   else return reverseString(str.substr(1) + str.charAt(0));
}

console.log(reverseString("hello"));
