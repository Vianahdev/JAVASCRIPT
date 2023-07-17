let url = "https://economia.awesomeapi.com.br/last/USD-BRL"


function convert(){
  let input = document.querySelector('input#valor');
  let valor = input.value;


  fetch(url)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      let rate = data.USDBRL.bid;
      document.querySelector('h1#result').innerHTML = Math.round(rate * valor);
    })
  }