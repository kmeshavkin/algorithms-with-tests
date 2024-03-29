/**
 * Returns true if number is prime, otherwise returns false.
 * @param {number} n Number to check.
 * @return {boolean} Returns if number is prime or not.
 */
export function isPrime(n) {
  if (isNaN(+n) || (n <= 1)) return false;
  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

/**
 * Returns all Prime Factors from number.
 * @param {number} n Number to get all Prime Factors from.
 * @return {Array} The array that contains all Prime Factors.
 */
export function getPrime(n) {
  const primeArr = [];
  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0) primeArr.push(i);
  }
  return primeArr;
}

/**
 * Returns nth Fibonacci number.
 * @param {number} n nth number to get Fibonacci value from.
 * @return {number} nth Fibonacci value.
 */
export function fibonacci(n) {
  if (isNaN(+n) || (n < 1)) return undefined;
  let curr = 1;
  let prev = 1;
  for (let i = 3; i <= n; i++) {
    curr += prev;
    prev = curr - prev;
  }
  return curr;
}

/**
 * Finds greatest common divisor of two numbers.
 * @param {number} a Number 1.
 * @param {number} b Number 2.
 * @return {number} Return greatest common divisor if possible, otherwise return 1.
 */
export function greatestCommonDivisor(a, b) {
  let div = 2;
  let gcdiv = 1;
  if (isNaN(+a) || isNaN(+b)) return undefined;
  if ((a < 2) || (b < 2)) return 1;
  while ((a >= div) && (b >= div)) {
    if ((a % div == 0) && (b % div == 0)) gcdiv = div;
    div++;
  }
  return gcdiv;
}

/**
 * Removes duplicates from copy of provided array, returning modified array.
 * @param {Array} input Array to remove duplicates from.
 * @return {Array} Array without duplicates.
 */
export function removeDuplicates(input) {
  if (!(input instanceof Array)) return undefined;
  const memoryArr = [];
  const output = [];
  for (let i = 0; i < input.length; i++) {
    if (!memoryArr[input[i]]) {
      memoryArr[input[i]] = true;
      output.push(input[i]);
    }
  }
  return output;
}

/**
 * Merges two sorted arrays and returns another sorted array.
 * @param {Array} arr1 First sorted array.
 * @param {Array} arr2 Second sorted array.
 * @return {Array} Merged sorted array.
 */
export function mergeSortedArrays(arr1, arr2) {
  if (!(arr1 instanceof Array) || !(arr2 instanceof Array)) return undefined;
  const returnArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length || j < arr2.length) {
    if ((arr1[i] < arr2[j]) || arr2[j] === undefined) {
      returnArr.push(arr1[i]);
      i++;
    } else {
      returnArr.push(arr2[j]);
      j++;
    }
  }
  return returnArr;
}

/**
 * Swaps variable without temp.
 * I modified this task a bit so it also returns testable code and made it a bit harder.
 * @param {Array|string} input Input Array/string.
 * @param {number} i Second index to swap.
 * @param {number} j First index to swap.
 * @return {Array|string} Resulting array/string.
 */
export function swapVariables(input, i = 1, j = 0) {
  if (((typeof input != 'string') && !(input instanceof Array))
    || (typeof i != 'number') || (typeof j != 'number')) return undefined;
  const output = [...input];
  if (i >= 0 && j >= 0 && i < output.length && j < output.length) {
    [output[i], output[j]] = [output[j], output[i]];
  }
  return (input instanceof Array) ? output : output.join('');
}
/**
 * Reverses all characters in string. It actually works for any type that has length (String or Array).
 * @param {Array|string} input Input string.
 * @return {Array|string} Reversed string.
 */
export function valuesReverse(input) {
  if ((typeof input != 'string') && !(input instanceof Array)) return undefined;
  const output = [...input];
  for (let i = 0, j = output.length - 1; i < j; i++, j--) {
    [output[i], output[j]] = [output[j], output[i]];
  }
  if (typeof input == 'string') return output.join(''); else return output;
}

/**
 * Reverses words positions in a string.
 * @param {string} str Input string.
 * @return {string} String with words reversed.
 */
export function reverseWords(str) {
  if (typeof str != 'string') return undefined;
  return str.split(' ').reverse().join(' ');
}

/**
 * Reverses characters in every word in input string.
 * @param {string} str Input string.
 * @return {string} String with reversed words.
 */
export function reverseInPlace(str) {
  if (typeof str != 'string') return undefined;
  return str
      .split(' ')
      .map((x) => x
          .split('')
          .reverse()
          .join(''))
      .join(' ');
}

/**
 * Finds first non repeating char in string (case sensitive).
 * @param {string} str Input string.
 * @return {string} First non repeating char.
 */
export function firstNonRepeatingChar(str) {
  if (typeof str != 'string') return undefined;
  const hash = [];
  for (let i = 0; i < str.length; i++) {
    hash[str[i]] = (hash[str[i]] + 1) || 1;
  }
  for (const el in hash) {
    if (hash[el] == 1) return el;
  }
  return undefined;
}

/**
 * Removes duplicate chars from string (case sensitive).
 * @param {string} str Input string.
 * @return {string} Resulting string with removed duplicates.
 */
export function removeDuplicateChar(str) {
  if (typeof str != 'string') return undefined;
  const hash = [];
  let outputStr = '';
  for (let i = 0; i < str.length; i++) {
    hash[str[i]] = (hash[str[i]] + 1) || 1;
    if (hash[str[i]] == 1) outputStr += str[i];
  }
  return outputStr;
}

/**
 * Verifies if a word a palindrome. Can be also done with for loop, but this is more consise.
 * @param {string} str Input string.
 * @return {boolean} True if palindrome, otherwise false.
 */
export function checkPalindrome(str) {
  if (typeof str != 'string') return undefined;
  return (str.split('').reverse().join('') == str);
}

/** Finds one missing number in unsorted array.
 * @param {Array} arr Array with missing number.
 * @return {number} Missing number.
 */
export function missingNumber(arr) {
  if (!(arr instanceof Array)) return undefined;
  const fullSum = (arr.length + 2) * (arr.length + 1) / 2;
  let missingSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != 'number') return undefined;
    missingSum += arr[i];
  }
  return fullSum - missingSum;
}

/**
 * Checks whether there are any two numbers that will sum up to a given number in a unsorted array.
 * @param {Array} arr Array to find pairs in.
 * @param {number} num Sum to find in array.
 * @return {boolean} Found pair or not.
 */
export function sumOfTwo(arr, num = 0) {
  if (!(arr instanceof Array) || (typeof num != 'number')) return undefined;
  const hash = [];
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) return true;
    hash[num - arr[i]] = true;
  }
  return false;
}

/**
 * Finds the largest sum of any two elements.
 * @param {Array} arr Array to find sum from.
 * @return {number} Biggest sum.
 */
export function biggestSum(arr) {
  if (!(arr instanceof Array)) return undefined;
  let biggest = (arr[0] > arr[1]) ? arr[0] : arr[1];
  let bigger = (arr[0] > arr[1]) ? arr[1] : arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > biggest) {
      bigger = biggest;
      biggest = arr[i];
    } else if (arr[i] > bigger) {
      bigger = arr[i];
    }
  }

  return (biggest || 0) + (bigger || 0);
}

/**
 * Counts Total number of zeros from 1 upto n.
 * I found that mathematical solution instead of loop-based is better, so I chose it.
 * @param {number} n Number to count zeros from.
 * @return {number} Number of zeros in n.
 */
export function countZeros(n) {
  if (typeof n != 'number') return undefined;
  const arr = [...String(n)];
  let accumulator = 0;
  for (let i = arr.length - 2; i >= 0; i--) {
    accumulator += arr[i] * (+'1'.repeat(arr.length - i - 1));
  }
  return accumulator;
}

/**
 * Matches substring of a string.
 * I'd just use .search(), but here's solution without it or any other find method.
 * @param {string} str String to find substring from.
 * @param {string} substr Substring to find in str.
 * @return {number} Index of substring if found, otherwise -1.
 */
export function subString(str, substr) {
  if ((typeof str != 'string') || (typeof substr != 'string')) return undefined;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < substr.length; j++) {
      if (substr[j] != str[i + j]) break;
      else {
        if (j == substr.length - 1) return i;
      }
    }
  }
  return -1;
}

/**
 * Creates all permutations of a string.
 * @param {string} str String to create permutations from.
 * @return {Array} All possible permutations of string.
 */
export function permutations(str) {
  if (typeof str != 'string') return undefined;
  if (str.length < 2) return [str];
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str.length > 2) {
      const retArr = permutations(str.slice(0, i) + str.slice(i + 1, str.length));
      arr = arr.concat(retArr.map((x) => str[i] + x));
    } else {
      return [str, str[1] + str[0]];
    }
  }
  return arr;
}
