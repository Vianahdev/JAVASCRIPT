# ESTRUTURA DE REPETIÇÃO (LOOP)
Na programação em forma geral, as estrutura de repetição, também chamada de laços ou loops, são estruturas que permite que façamos a repetição de um comando ou um bloco de código até atingirmos um determinado ponto.

### WHILE
A declaração `while` cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução da rotina. 

  ```js
  let x = 0;

  //Estrutura de repetição While
  while(x <= 10){ //Verificação da condição da variavel 'x'
    document.write(x + '<br/>');
    //Incremento de valor na variavel 'x'
    x++;
  }
  ```
  Podemos utilizar o `break` para intemrromper completametne o laço de repeticão.

  * **Exemplo**

    ```js
    let x = 0;

    //Estrutura de repetição While
    while(x <= 10){
      document.write(x + '<br/>');
      //Condição para utilização do break
      if(x == 5){
        break;
      }
      //Incremento de valor na variavel 'x'
      x++;
    }
    ```
<br>

### DO WHILE

A instrução `do while` cria um loop que executa uma instrução especificada até que a condição de teste seja avaliada como falsa. A condição é avaliada após a execução da instrução, resultando na execução da instrução especificada pelo menos uma vez.

```js
  let x = 11;

  do{
    document.write(x + '<br/>');
  }while(x <= 10);
```

<br>

### FOR

A instrução `for` cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência.

```js
  for(let x = 0; x <= 10; x++){
    document.write(x+'<br/>');
  }
```
<br>

# UTILIZANDO LOOP EM ARRAY

Podemos utilizar laço de repetição para percorrer uma variavel do tipo `Array`, utilizando o operado `length` para determinarmos o tamanho do `Array`, podemos coletar os valores de cada índice.

* **Exemplo**

  ```js
    let l_array = ['Banana', 'Morango', 'Uva', 'Manga', 'Maçã', 'Laranja'];

    for(let x = 0; x <= l_array.length;x++){
      document.write(l_array[x] + '<br/>');
    }
  ```  
<br>

# FOR IN / FOREACH

### FOR IN
A instrução `For in` e uma união do laço `for` com o operador `in`.

```js
  let l_listConvidados = ['Jorge', 'Matheus' , 'Roberto', 'Mauricio', 'Gabriel', 'Maria', 'Ana'];

  console.log(l_listConvidados);

  for( let x in l_listConvidados){
    console.log('Índice ' + x + ' valor ' + l_listConvidados[x]);
}
```
<br>

### FOREACH

A intrução `foreach` no Javascript e uma função que fica abaixo do objeto `Array`, no contexto do Javascript e aplicado como uma função e não uma laço de repetição, porém ele serve para este proposito.

```js
  let l_listFuncionarios = ['Jorge', 'Matheus' , 'Roberto', 'Mauricio', 'Gabriel', 'Maria', 'Ana'];

  console.log(l_listFuncionarios)

  l_listFuncionarios.forEach(function(valor, indice, array){
    //Lógica
    console.log('indice ' + indice + ' | valor ' + valor);
    
    if(valor == 'Jorge'){
      array[indice] = 'José'
    }
  })


  //Tecnica de Wrapper
  let l_verifica = function (valor, indice, array){
    console.log("indice " + indice + " | valor " + valor);

    if(valor == 'Jorge'){
      array[indice] = 'José'
    }
  }

  l_listFuncionarios.forEach(l_verifica);
```