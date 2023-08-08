 let l_areaColor = document.querySelector('div#area');

function validaEstilo(color){
  if(color == 'Red'){
    l_areaColor.style.backgroundColor = 'Red';
  }else if(color == 'Green'){
    l_areaColor.style.backgroundColor = 'Green';
  }else{
    l_areaColor.style.backgroundColor = 'blue';
  }
}