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

<br>

# ARRAY (LENGTH)
A função `Length` e utilizada para verificar o tamanho do `Array`, porém ao utilizar a função `Length` e necessario analisar como o `Array` foi declarado, pois pode ocorrer problema na contagem dos elementos dentro do proprio `Array`.

* **Exemplo**
  ```js
  let l_listFrutas = ['Abacate', 'Maçã', 'Morango', 'Uva'];

  console.log(l_listFrutas.length);
  ```

<br>

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

<br>

# ARRAY (FUNÇÃO DE INCLUSÃO E EXCLUSÃO)

### INCLUSÃO DE ELEMENTOS
* A função `Push()` e utilizada para inclusão de um novo elemento no final de um Array.
  ```js
  let l_listFrutas = ['Abacate', 'Maçã', 'Morango', 'Uva'];

  l_listFrutas.push('Laranja');

  console.log(l_listFrutas);
  ```

* A função `Unshift()` e utilizada para inclusão de um novo elemento no inicio de um Array.
  ```js
  let l_listFrutas = ['Abacate', 'Maçã', 'Morango', 'Uva'];

  l_listFrutas.unshift('Laranja');

  console.log(l_listFrutas);
  ```

### EXCLUSÃO DE ELEMENTOS

* A função `Pop()` e utilizada para exclusão de um elemento no final de um Array.
  ```js
  let l_listFrutas = ['Abacate', 'Maçã', 'Morango', 'Uva', 'Laranja'];

  l_listFrutas.pop('Laranja');

  console.log(l_listFrutas);
  ```

* A função `Shift()` e utilizada para exclusão de um elemento no inicio de um Array.
  ```js
  let l_listFrutas = ['Abacate', 'Maçã', 'Morango', 'Uva', 'Laranja'];

  l_listFrutas.shift('Abacate');

  console.log(l_listFrutas);
  ```

<br>

# ARRAY (MÉTODO DE PESQUISA)
Para podermos identificar a posição de um elemento dentro de um `Array` utilizamos a função `indexOf`.

* **Exemplo**
  ```js
  let l_listFrutas = ['Banana', 'Maçã', 'Morango', 'Uva'];

  console.log(l_listFrutas.indexOf('Morango'));
  ```

Caso realize uma pesquisa de um elemento que não existe dentro do `Array` o Javascript irá retornar um valor negativo `"-1"`.

<br>

# ARRAY (ORDENAÇÃO)
Podemos utilizar o método `Sort()` para realizarmos uma ordenção em um `Array` para tipo alfanumericos.

* **Exemplo**
  ```js
  let l_listFrutas = ['Uva', 'Maçã', 'Banana', 'Morango'];

  console.log(l_listFrutas.sort());
  ```

Para realizarmos uma ordenação de um `Array` para tipo numericos, iremos utilziar uma função de `Callback`, pois sera necessario executar a função de acordo com o método `sort()`.

* **Exemplo**
  ```js
  let l_listNumber = [30,4,3,65,32,0,1];

  function order(a, b){
    return a - b;
  }

  console.log(l_listNumber.sort(order));
  ```
