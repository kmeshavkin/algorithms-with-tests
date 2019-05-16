import {isPrime, getPrime, fibonacci} from './algorithms';

describe('isPrime', () => {
  test(`not number is NOT a prime`, () => expect(isPrime('abc')).toBe(false));
  test(`0 is NOT a prime`, () => expect(isPrime(0)).toBe(false));
  test(`1 is NOT a prime`, () => expect(isPrime(1)).toBe(false));
  test(`negative number is NOT a prime`, () => expect(isPrime(-4)).toBe(false));
  test(`3 is a prime`, () => expect(isPrime(3)).toBe(false));
  test(`4 is NOT a prime`, () => expect(isPrime(4)).toBe(true));
});

describe('getPrime', () => {
  test(`not number returns no primes`, () => expect(getPrime('abc')).toEqual([]));
  test(`3 has no primes`, () => expect(getPrime(3)).toEqual([]));
  test(`4 has prime [2]`, () => expect(getPrime(4)).toEqual([2]));
  test(`24 has primes [2, 3, 4, 6, 8, 12]`, () => expect(getPrime(24)).toEqual([2, 3, 4, 6, 8, 12]));
});
