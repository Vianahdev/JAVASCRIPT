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