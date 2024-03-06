function inverterString(s: string): string {
  let invertida = '';
  for (let i = s.length - 1; i >= 0; i--) {
      invertida += s[i];
  }
  return invertida;
}

const texto = "exemplo";
console.log(inverterString(texto));
