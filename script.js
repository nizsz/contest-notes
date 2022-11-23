/*


  Principais pontos abordados nesse desafio:

- Estrutura de dados com objetos;
- Estrutura de repetição;
- Criação de funções;
- Operadores comparativos;

Nesse desafio você irá criar uma lista de estudantes e, cada 
estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma função que irá calcular a média das notas de 
cada aluno;
- [ ]  Supondo que a média, para esse concurso é 7, verifique se
 cada aluno obteve sucesso ou não para entrar no concurso, e mostre 
 uma mensagem na tela.

*/

let studentsAndYourNotes = [
  {
    name: "Pedro",
    firstNote: 9,
    secondNote: 10
  },

  {
    name: "Ana",
    firstNote: 4,
    secondNote: 3
  },

  {
    name: "Fernanda",
    firstNote: 10,
    secondNote: 7
  },

  {
    name: "Gustavo",
    firstNote: 5,
    secondNote: 10
  },

  {
    name: "Luíza",
    firstNote: 8,
    secondNote: 4
  },
]


function calculatingAverageOfTests (firstNote, secondNote) {
  return (firstNote + secondNote) / 2
}

function resultOfAverage (students) {
 return calculatingAverageOfTests(students.firstNote , students.secondNote) 
}

for(let students of studentsAndYourNotes) {
  let messageResult = resultOfAverage(students)
  
  if(messageResult >= 7) {
    alert(`
    Parabéns ${students.name} você foi aprovado(a) no concurso!
    A sua nota média nas duas provas foi de: ${resultOfAverage(students)} 
    Na primeira prova você tirou ${students.firstNote} e na segunda prova ${students.secondNote}
    `)
  } else if (messageResult <= 7) {
    alert(`
    ${students.name} infelizmente você não foi aprovado(a) no concurso,
    A sua nota média das duas provas foi de: ${resultOfAverage(students)}
    Na primeira prova você tirou ${students.firstNote} e na segunda prova ${students.secondNote}
    `)
  }
}