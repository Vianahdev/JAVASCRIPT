function insertAluno(name, age){
    return {name, age}
  }
  
  let alunos = [
    insertAluno('Matheus', 24),
    insertAluno('Gabriel', 22),
    insertAluno('Paulo', 25),
    insertAluno('Ana', 15),
    insertAluno('José', 13),
  ]
  
  function nameAge(aluno){
    return aluno.name + " tem " + aluno.age + " anos" + '<br>';
  }
  
  document.write(alunos.map(nameAge));


  /*VALOR E REFERENCIA*/

  let turmaA = [
    insertAluno('Matheus', 24),
    insertAluno('Gabriel', 17),
    insertAluno('Paulo', 24),
    insertAluno('Mariana', 27),
    insertAluno('Ana', 13)
  ]

/*
  let turmaB = turmaA.slice();

  turmaB.push(insertAluno("Igor", 35));
*/

  let turmaB = Object.assign({}, turmaA);

  turmaB.push(insertAluno("Igor", 35));

  

  
