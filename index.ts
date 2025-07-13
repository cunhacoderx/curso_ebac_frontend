function multiplicar(x: number, y: number): number {
  return x * y;
}

function saudacao(nome: string): string {
  return `Olá ${nome}`;
}

const resultado = multiplicar(3, 5);
console.log('O resultado da multiplicação é:', resultado);

const mensagem = saudacao('Leonardo');
console.log(mensagem);
