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