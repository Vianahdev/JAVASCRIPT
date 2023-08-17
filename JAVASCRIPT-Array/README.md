# ARRAY

Um `Array` são listas ordenadas, são variáveis que permitem relacionar itens a índex (chaves). Uma variável do tipo `Array` podemos associar as posições (index) a seu elemento.

Para criação de um `Array` em Javascript e declarar uma variável que receba um objeto do tipo `Array`.

* **Exemplo 1**

  ```js
  let l_listFrutas = Array();

  l_listFrutas[1] = 'Abacate';
  l_listFrutas[2] = 'Maçã';
  l_listFrutas[3] = 'Morango';
  l_listFrutas[4] = 'Uva';

  console.log(l_listFrutas[1]);
  ```

  Um `Array` pode receber qualquer tipo de dados (String, Bolean e Number).

* **Exemplo 2**

  ```js
  let l_listFrutas = Array('Abacate', 'Maçã', 'Morango', 'Uva');

  console.log(l_listFrutas[0]);
  ```

  Neste modo de atribuiação de um `Array` o Javascript atribui um index pre-determinado que começa no valor 0.

* **Exemplo 3**

  ```js
  let l_listFrutas = ['Abacate', 'Maçã', 'Morango', 'Uva'];

  console.log(l_listFrutas[0]);
  ```

  Podemos utilizar `"[ ]"` para atribuição de um `Array` o Javascript irá entender que isso e uma variavel do tipo `Array`.

<br><br>

# ARRAY (LENGTH)
A função `Length` e utilizada para verificar o tamanho do `Array`, porém ao utilizar a função `Length` e necessario analisar como o `Array` foi declarado, pois pode ocorrer problema na contagem dos elementos dentro do proprio `Array`.

* **Exemplo**
  ```js
  let l_listFrutas = ['Abacate', 'Maçã', 'Morango', 'Uva'];

  console.log(l_listFrutas.length);
  ```

<br><br>

# ARRAY (MULTIDIMENSIONAL / BIDIMENSIONAL)
O que são `Array Multidimensional` ou `Array Bidimensional`?

Estes tipos de `Array` são simplemente um `Array` dentro de outro `Array`.

* **Exemplo**
  ```js
  let l_listCoisas = [];

  l_listCoisas['Frutas'] = ['Abacate', 'Maçã', 'Morango', 'Uva'];
  l_listCoisas['Pessoas'] = ['Matheus', 'Gabriel', 'João', 'José'];

  console.log(l_listCoisas);
  ```


<br><br>

# ARRAY (FUNÇÃO DE INCLUSÃO E EXCLUSÃO)

### INCLUSÃO DE ELEMENTOS
* A função `Push()` e utilizada para inclusão de um novo elemento no final de um Array.

* A função `Unshift()` e utilizada para inclusão de um novo elemento no inicio de um Array.

### EXCLUSÃO DE ELEMENTOS

* A função `Pop()` e utilizada para exclusão de um elemento no final de um Array.

* A função `Shift()` e utilizada para exclusão de um elemento no inicio de um Array.