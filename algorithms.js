/**
 * Returns true if number is prime, otherwise returns false.
 * @param {number} n Number to check.
 * @return {boolean} Returns if number is prime or not.
 */
export function isPrime(n) {
  if (n < 4) return false;
  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0) return true;
  }
  return false;
}

/**
 * Returns all Prime Factors from number
 * @param {number} n Number to get all Prime Factors from
 * @return {Array} The array that contains all Prime Factors
 */
export function getPrime(n) {
  const primeArr = [];
  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0) primeArr.push(i);
  }
  return primeArr;
}

/**
 * Returns nth Fibonacci number
 * @param {number} n nth number to get Fibonacci value from
 * @return {number} nth Fibonacci value
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
 * Finds greatest common divisor of two numbers
 * @param {number} a Number 1
 * @param {number} b Number 2
 * @return {number} Return greatest common divisor if possible, otherwise return 1
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
 * Removes duplicates from copy of provided number array, returning modified array
 * @param {Array} arr Number array to remove duplicates from
 * @return {Array} Array without duplicates
 */
export function removeDuplicates(arr) {
  const memoryArr = [];
  const returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!memoryArr[arr[i]]) {
      memoryArr[arr[i]] = true;
      returnArr.push(arr[i]);
    }
  }
  return returnArr;
}

/**
 * Merges two sorted arrays and returns another sorted array
 * @param {Array} arr1 First sorted array
 * @param {Array} arr2 Second sorted array
 * @return {Array} Merged sorted array
 */
export function mergeSortedArrays(arr1, arr2) {
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
 * Swap variable without temp. I modified this task a bit so it also returns testable code and made it a bit harder
 * @param {Array} arr Input array
 * @param {number} i Second index to swap
 * @param {number} j First index to swap
 * @return {Array} Resulting array
 */
export function swapVariables([...arr], i = 1, j = 0) {
  if (i < arr.length && j < arr.length) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
/**
 * Reverses all characters in string. It actually works for any type that has length (String or Array)
 * @param {string|Array} input Input string
 * @return {string|Array} Reversed string
 */
export function valuesReverse(input) {
  const output = [...input];
  for (let i = 0, j = output.length - 1; i < j; i++, j--) {
    [output[i], output[j]] = [output[j], output[i]];
  }
  if (typeof input == 'string') return output.join(''); else return output;
}

/**
 * Reverses words positions in a string
 * @param {string} str Input string
 * @return {string} String with words reversed
 */
export function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}

/**
 * Reverses characters in every word in input string
 * @param {string} str Input string
 * @return {string} String with reversed words
 */
export function reverseInPlace(str) {
  return str
      .split(' ')
      .map((x) => x
          .split('')
          .reverse()
          .join(''))
      .join(' ');
}

/**
 * Find one missing number in unsorted array.
 * @param {Array} arr Array with missing number.
 * @return {number} Missing number.
 */
export function missingNumber(arr) {
  const fullSum = (arr.length + 2) * (arr.length + 1) / 2;
  let missingSum = 0;
  for (let i = 0; i < arr.length; i++) {
    missingSum += arr[i];
  }
  return fullSum - missingSum;
}

/**
 * From a unsorted array, check whether there are any two numbers that will sum up to a given number.
 * @param {Array} arr Array to find pairs in.
 * @param {number} num Sum to find in array.
 * @return {boolean} Found pair or not.
 */
export function sumOfTwo(arr, num = 0) {
  const hash = [];
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) return true;
    hash[num - arr[i]] = true;
  }
  return false;
}