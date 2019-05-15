export function isPrime(n) {
  if (n < 4) return false;
  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0) return true;
  }
  return false;
}

export function getPrime(n) {
  let primeArr = [];
  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0) primeArr.push(i);
  }
  return primeArr;
}