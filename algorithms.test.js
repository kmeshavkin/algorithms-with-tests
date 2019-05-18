import {
  isPrime,
  getPrime,
  fibonacci,
  greatestCommonDivisor as gcd,
  removeDuplicates,
  mergeSortedArrays as msa,
} from './algorithms';

describe('isPrime', () => {
  test('not number is NOT a prime', () => expect(isPrime('abc')).toBeFalsy());
  test('0 is NOT a prime', () => expect(isPrime(0)).toBeFalsy());
  test('1 is NOT a prime', () => expect(isPrime(1)).toBeFalsy());
  test('negative number is NOT a prime', () => expect(isPrime(-1)).toBeFalsy());
  test('3 is a prime', () => expect(isPrime(3)).toBeFalsy());
  test('4 is NOT a prime', () => expect(isPrime(4)).toBeTruthy());
});

describe('getPrime', () => {
  test('not number returns no primes', () => expect(getPrime('abc')).toEqual([]));
  test('3 has no primes', () => expect(getPrime(3)).toEqual([]));
  test('4 has prime [2]', () => expect(getPrime(4)).toEqual([2]));
  test('24 has primes [2, 3, 4, 6, 8, 12]', () => expect(getPrime(24)).toEqual([2, 3, 4, 6, 8, 12]));
});

describe('fibonacci', () => {
  test('not number returns undefined', () => expect(fibonacci('abc')).toBeUndefined());
  test('zero returns undefined', () => expect(fibonacci(0)).toBeUndefined());
  test('negative returns undefined', () => expect(fibonacci(-1)).toBeUndefined());
  test('1 returns 1', () => expect(fibonacci(1)).toBe(1));
  test('2 returns 1', () => expect(fibonacci(2)).toBe(1));
  test('5 returns 5', () => expect(fibonacci(5)).toBe(5));
  test('10 returns 55', () => expect(fibonacci(10)).toBe(55));
});

describe('greatestCommonDivisor', () => {
  test('not number returns undefined', () => expect(gcd('abc', 1)).toBeUndefined());
  test('zero or negative returns 1', () => expect(gcd(0, -1)).toBe(1));
  test('(3, 6) returns 3', () => expect(gcd(3, 6)).toBe(3));
  test('(18, 24) returns 6', () => expect(gcd(18, 24)).toBe(6));
});

describe('removeDuplicates', () => {
  test('Removes duplicate correctly', () => expect(removeDuplicates([1, 2, 2, 3, 1, 6])).toEqual([1, 2, 3, 6]));
  test('Does not modifies source array', () => {
    const testArr = [1, 2, 2, 3];
    const tempArr = [...testArr];
    removeDuplicates(testArr);
    expect(testArr).toEqual(tempArr);
  });
});

describe('mergedSortedArray', () => {
  test('Merges arrays and stays sorted', () => expect(msa([1, 3, 7], [4, 5, 9])).toEqual([1, 3, 4, 5, 7, 9]));
  test('Merges arrays with different lengths', () => {
    expect(msa([1, 3], [4, 5, 9])).toEqual([1, 3, 4, 5, 9])
      && expect(msa([1, 3, 7], [4, 5])).toEqual([1, 3, 4, 5, 9]);
  });
  test('Merges empty arrays', () => {
    expect(msa([1, 3, 7], [])).toEqual([1, 3, 7])
      && expect(msa([], [4, 5, 9])).toEqual([4, 5, 9])
      && expect(msa([], [])).toEqual([]);
  });
});

