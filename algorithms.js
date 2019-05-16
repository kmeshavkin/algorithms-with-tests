/**
 * Returns true if number is prime, otherwise returns false.
 * @param {Number} n Number to check.
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
 * @param {Number} n Number to get all Prime Factors from
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
 * @param {Number} n nth number to get Fibonacci value from
 * @return {Number} nth Fibonacci value
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
 * @param {Number} a Number 1
 * @param {Number} b Number 2
 * @return {Number} Return greatest common divisor if possible, otherwise return 1
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