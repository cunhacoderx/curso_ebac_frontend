//Criando o array ddos alunos com nome e notas
const alunos = [
  { nome: 'Adão', nota: 5.5 },
  { nome: 'Bruno', nota: 7.0 },
  { nome: 'Carlos', nota: 6.2 },
  { nome: 'Daiane', nota: 3.8 },
  { nome: 'Eliana', nota: 9.1 }
];

//Função com arrow function que filtrará os alunos aprovados
const filtrarAprovados = (lista) => {
  return lista.filter(aluno => aluno.nota >= 6);
};

//Uma variável que armazena o resultado do filtro
const aprovados = filtrarAprovados(alunos);

//Exibir o resultado dos alunos aprovados
console.log("Alunos aprovados:", aprovados);
