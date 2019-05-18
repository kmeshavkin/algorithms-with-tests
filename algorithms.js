/**
 * Returns true if number is prime, otherwise returns false.
 * @param {Integer} n Number to check.
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
 * @param {Integer} n Number to get all Prime Factors from
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
 * @param {Integer} n nth number to get Fibonacci value from
 * @return {Integer} nth Fibonacci value
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
 * @param {Integer} a Number 1
 * @param {Integer} b Number 2
 * @return {Integer} Return greatest common divisor if possible, otherwise return 1
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
