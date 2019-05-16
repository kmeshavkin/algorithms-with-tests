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
