
function fibo(n) { 
  return n < 2 ? ([0, 1])[n] : fibo(n - 1) + fibo(n - 2); 
}

console.log(fibo(5));