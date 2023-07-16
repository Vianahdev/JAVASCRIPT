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
  
  document.write(alunos.map(nameAge))
  