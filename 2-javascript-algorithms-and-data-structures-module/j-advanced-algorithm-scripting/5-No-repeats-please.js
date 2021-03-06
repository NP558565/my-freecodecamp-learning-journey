/*No repeats please
Return the number of total permutations of the provided string that don't have repeated consecutive letters.

For example, 'aab' should return 2 because it has 6 total permutations, but only 2 of them don't have the same letter (in this case 'a') repeating.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Permutations
RegExp
*/

function permAlone(str) {

  // Create a regex to match repeated consecutive characters.
  let regex = /(.)\1+/g;

  // Split the string into an array of characters.
  let arr = str.split('');
  let permutations = [];
  let tmp;

  // FUnction to swap letiables' content.
  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  //Generate arrays of permutations using the algorithm.
  function generate(int) {
    if (int === 1) {
      // Make sure to join the characters as we create  the permutation arrays
      permutations.push(arr.join(''));
    } else {
      for (let i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }

  generate(arr.length);

  // Filter the array of repeated permutations.
  let filtered = permutations.filter(function(string) {
    return !string.match(regex);
  });

  //Return how many have no repetitions.
  return filtered.length;
}

permAlone('aab');
