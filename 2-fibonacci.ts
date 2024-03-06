function pertenceFibonacci(n: number): boolean {
  let a = 0, b = 1, temp;
  while (a < n) {
      temp = a;
      a = b;
      b = temp + b;
  }
  return a === n;
}

const numero = 34;
if (pertenceFibonacci(numero)) {
  console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}