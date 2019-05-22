import {
  isPrime,
  getPrime,
  fibonacci,
  greatestCommonDivisor as gcd,
  removeDuplicates,
  mergeSortedArrays as msa,
  swapVariables,
  valuesReverse,
  reverseWords,
  reverseInPlace,
  firstNonRepeatingChar as fnrc,
  removeDuplicateChar as rdc,
  checkPalindrome,
  missingNumber,
  sumOfTwo,
  biggestSum,
  countZeros,
  subString,
  permutations,
} from './algorithms';

describe('isPrime', () => {
  test('not a number is NOT a prime', () => expect(isPrime('abc')).toBe(false));
  test('0 is NOT a prime', () => expect(isPrime(0)).toBe(false));
  test('1 is NOT a prime', () => expect(isPrime(1)).toBe(false));
  test('negative number is NOT a prime', () => expect(isPrime(-1)).toBe(false));
  test('finds primes', () => expect(isPrime(3)).toBe(true));
  test('finds non-primes', () => expect(isPrime(4)).toBe(false));
});

describe('getPrime', () => {
  test('not a number returns empty array', () => expect(getPrime('abc')).toEqual([]));
  test('returns empty array for non-primes', () => expect(getPrime(3)).toEqual([]));
  test('finds prime for simple numbers', () => expect(getPrime(4)).toEqual([2]));
  test('works with more complex numbers', () => expect(getPrime(24)).toEqual([2, 3, 4, 6, 8, 12]));
});

describe('fibonacci', () => {
  test('not a number returns undefined', () => expect(fibonacci('abc')).toBeUndefined());
  test('zero returns undefined', () => expect(fibonacci(0)).toBeUndefined());
  test('negative returns undefined', () => expect(fibonacci(-1)).toBeUndefined());
  test('1 returns 1', () => expect(fibonacci(1)).toBe(1));
  test('2 returns 1', () => expect(fibonacci(2)).toBe(1));
  test('returns correct fibonacci number', () => expect(fibonacci(10)).toBe(55));
});

describe('greatestCommonDivisor', () => {
  test('not a number returns undefined', () => expect(gcd('abc', 1)).toBeUndefined());
  test('zero or negative returns 1', () => expect(gcd(0, -1)).toBe(1));
  test('works with prime numbers', () => expect(gcd(3, 6)).toBe(3));
  test('works with non-prime numbers', () => expect(gcd(18, 24)).toBe(6));
});

describe('removeDuplicates', () => {
  test('not an array returns undefined', () => expect(removeDuplicates('abc')).toBeUndefined());
  test('removes duplicates in array', () => expect(removeDuplicates([1, 2, 2, 3, 1, 6])).toEqual([1, 2, 3, 6]));
  test('does not modifies source array', () => {
    const testArr = [1, 2, 2, 3];
    const tempArr = [...testArr];
    removeDuplicates(testArr);
    expect(testArr).toEqual(tempArr);
  });
});

describe('mergedSortedArray', () => {
  test('not an array returns undefined', () => expect(msa('abc', {a: 1})).toBeUndefined());
  test('merges arrays and stays sorted', () => expect(msa([1, 3, 7], [4, 5, 9])).toEqual([1, 3, 4, 5, 7, 9]));
  test('merges arrays with different lengths', () => {
    expect(msa([1, 3], [4, 5, 9])).toEqual([1, 3, 4, 5, 9]);
    expect(msa([1, 3, 7], [4, 5])).toEqual([1, 3, 4, 5, 7]);
  });
  test('merges empty arrays', () => {
    expect(msa([1, 3, 7], [])).toEqual([1, 3, 7]);
    expect(msa([], [4, 5, 9])).toEqual([4, 5, 9]);
    expect(msa([], [])).toEqual([]);
  });
});

describe('swapVariables', () => {
  test('not an array or a string as a first argument returns undefined', () => expect(swapVariables({a: 1})).toBeUndefined());
  test('not a number as a second argument returns undefined', () => expect(swapVariables([1, 2, 3], 'a')).toBeUndefined());
  test('not a number as a third argument returns undefined', () => expect(swapVariables([1, 2, 3], 1, 'a')).toBeUndefined());
  test('swaps first two elements', () => expect(swapVariables([1, 2])).toEqual([2, 1]));
  test('swaps first element with specified element', () => expect(swapVariables([1, 2, 3, 4], 2)).toEqual([3, 2, 1, 4]));
  test('swaps two specified elements', () => expect(swapVariables([1, 2, 3, 4], 1, 3)).toEqual([1, 4, 3, 2]));
  test('works with string', () => expect(swapVariables('abcd', 1, 3)).toEqual('adcb'));
  test('does NOT swap if indexes are outside of boundaries', () => {
    expect(swapVariables([1, 2], 0, 2)).toEqual([1, 2]);
    expect(swapVariables([1, 2], -1, 1)).toEqual([1, 2]);
    expect(swapVariables([1, 2], -1, 2)).toEqual([1, 2]);
    expect(swapVariables('ab', -1, 2)).toEqual('ab');
  });
});

describe('valuesReverse', () => {
  test('not an array or a string returns undefined', () => expect(valuesReverse({a: 1})).toBeUndefined());
  test('should reverse characters in string', () => expect(valuesReverse('Hello')).toBe('olleH'));
  test('should reverse characters in array', () => expect(valuesReverse([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]));
});

describe('reverseWords', () => {
  test('not a string returns undefined', () => expect(reverseWords([1, 'a'])).toBeUndefined());
  test('reverses words correctly', () => expect(reverseWords('Hello new beautiful world!')).toBe('world! beautiful new Hello'));
  test('should not do anything if only one word is present', () => expect(reverseWords('Word')).toBe('Word'));
});

describe('reverseInPlace', () => {
  test('not a string returns undefined', () => expect(reverseInPlace([1, 'a'])).toBeUndefined());
  test('reverses characters in words correctly', () => expect(reverseInPlace('Hello new beautiful world!')).toBe('olleH wen lufituaeb !dlrow'));
  test('reverses correctly if there\'s only one word', () => expect(reverseInPlace('Word')).toBe('droW'));
});

describe('firstNonRepeatingChar', () => {
  test('not a string returns undefined', () => expect(fnrc([1, 'a'])).toBeUndefined());
  test('finds first non repeating char correctly', () => expect(fnrc('the quick brown fox jumps then quickly blow air')).toBe('f'));
  test('returns undefined if found none', () => expect(fnrc('aabbbccdd')).toBeUndefined());
  test('should be case sensitive', () => expect(fnrc('aAb')).toBe('a'));
});

describe('removeDuplicateChar', () => {
  test('not a string returns undefined', () => expect(rdc([1, 'a'])).toBeUndefined());
  test('removes all duplicates correctly', () => expect(rdc('the quick brown fox jumps then quickly blow air')).toBe('the quickbrownfxjmpslya'));
  test('should be case sensitive', () => expect(rdc('abAabbBcDd')).toBe('abABcDd'));
});

describe('checkPalindrome', () => {
  test('not a string returns undefined', () => expect(checkPalindrome([1, 'a'])).toBeUndefined());
  test('returns true if word is a palindrome', () => expect(checkPalindrome('abcba')).toBe(true));
  test('returns false if word is NOT a palindrome', () => expect(checkPalindrome('abcb')).toBe(false));
  test('returns true if string has length of 1', () => expect(checkPalindrome('a')).toBe(true));
});

describe('missingNumber', () => {
  test('not an array returns undefined', () => expect(missingNumber('abc')).toBeUndefined());
  test('finds missing number', () => expect(missingNumber([1, 5, 4, 2, 6])).toBe(3));
  test('any non number values in array return undefined', () => expect(missingNumber([1, 3, '1', 4, 2, 6])).toBeUndefined());
});

describe('sumOfTwo', () => {
  test('not an array as a first argument returns undefined', () => expect(sumOfTwo('abc', 5)).toBeUndefined());
  test('not a number as a second argument returns undefined', () => expect(sumOfTwo([1, 2, 3, 4, 5], 'a')).toBeUndefined());
  test('returns true if pair is in array', () => expect(sumOfTwo([1, 3, 3, 4, 6, 0], 5)).toBe(true));
  test('returns false if there\'s no pairs in array', () => expect(sumOfTwo([1, 3, 3, 4, 6, 0], 2)).toBe(false));
  test('works with negative numbers', () => expect(sumOfTwo([-1, 3, 3, 4, 6, 0], 2)).toBe(true));
});

describe('biggestSum', () => {
  test('not an array returns undefined', () => expect(biggestSum('abc')).toBeUndefined());
  test('finds biggest sum', () => expect(biggestSum([1, 6, 3, 9, 5, 5, 7])).toBe(16));
  test('works with negative numbers', () => expect(biggestSum([-7, -11, -5, 4])).toBe(-1));
  test('works if array has length of 1', () => expect(biggestSum([6])).toBe(6));
  test('works if array has length of 0', () => expect(biggestSum([])).toBe(0));
});

describe('countZeros', () => {
  test('not a number returns undefined', () => expect(countZeros('abc')).toBeUndefined());
  test('Should find corect amount of zeros', () => {
    expect(countZeros(10)).toBe(1);
    expect(countZeros(145)).toBe(15);
    expect(countZeros(2014)).toBe(223);
  });
  test('Should return 0 for 1-digit numbers', () => expect(countZeros(9)).toBe(0));
});

describe('subString', () => {
  test('not a string as a first argument returns undefined', () => expect(subString([1, 2, 3], 'a')).toBeUndefined());
  test('not a string as a second argument returns undefined', () => expect(subString('abc', 1)).toBeUndefined());
  test('Matches substring correctly', () => expect(subString('abcdefg', 'cd')).toBe(2));
  test('Matches substring of one symbol', () => expect(subString('abcdefg', 'd')).toBe(3));
  test('Matches substring in the start', () => expect(subString('abcdefg', 'abc')).toBe(0));
  test('Matches substring in the end', () => expect(subString('abcdefg', 'g')).toBe(6));
  test('Returns -1 if no substring found', () => expect(subString('abcdefg', 'gh')).toBe(-1));
});

describe('permutations', () => {
  test('not a string returns undefined', () => expect(permutations([1, 2, 3])).toBeUndefined());
  test('Correctly returns all permutations of a string', () => {
    expect(permutations('1a').sort()).toEqual(['1a', 'a1'].sort());
    expect(permutations('abc').sort()).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'].sort());
    expect(permutations('1234').sort()).toEqual([
      '1234', '1243', '1324', '1342', '1423', '1432',
      '2134', '2143', '2314', '2341', '2413', '2431',
      '3124', '3142', '3214', '3241', '3412', '3421',
      '4123', '4132', '4213', '4231', '4312', '4321',
    ].sort());
  });
  test('Permutation of string of length 1 is the string itself in array', () => expect(permutations('a')).toEqual(['a']));
});
