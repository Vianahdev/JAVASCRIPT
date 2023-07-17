function insertAluno(name, age) {
  return { name, age }
}

let alunos = [
  insertAluno("Matheus", 22),
  insertAluno("Gabriel", 22),
  insertAluno("Paulo", 25),
  insertAluno("Ana", 15),
  insertAluno("José", 13),
]

function mediaIdade(total, aluno){
  return total + aluno.age;
}

document.write(alunos.reduce(mediaIdade, 0));