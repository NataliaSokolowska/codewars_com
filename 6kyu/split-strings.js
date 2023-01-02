/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

const solution = (str) => {
  const arr = [];
  const splitStrings = str.split("");

  for (let i = 0; i < splitStrings.length; i += 2) {
    const newLetters = splitStrings[i] + (splitStrings[i + 1] || "_");
    arr.push(newLetters);
  }

  return arr;
};
